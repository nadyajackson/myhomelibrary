import React, {useState} from "react";
import axios from "axios";
//import { useAuth0 } from "@auth0/auth0-react";

export const UserContext = React.createContext()

//user id : user.sub username = nickname

export default function UserProvider(props){
    // const { user, isAuthenticated} = useAuth0();

    const initState = {
        owned: [],
        tbr: [],
        wishlist: [],
        errMsg: ''
    }
    const [userState, setUserState] = useState(initState)

    const handleAuthErr=(errMsg)=>{
        setUserState(prevState =>({
            ...prevState,
            errMsg
        }))
    }
    const resetAuthErr=()=>{
        setUserState(prevState =>({
            ...prevState,
            errMsg: ''
        }))
    }
     
    //Get 
    const getOwned = (user) =>{
        axios.get(`http://localhost:9000/getOwned/${user.sub}`)
            .then(res => {setUserState({owned: res.data})})
            .catch(err => handleAuthErr(err))
    }
    const getTBR = (user) =>{
        axios.get(`http://localhost:9000/getTBR/${user.sub}`)
            .then(res => {setUserState({tbr: res.data})})
            .catch(err => handleAuthErr(err))
    }

    const getWishlist = (user) =>{
        axios.get(`http://localhost:9000/getWishlist/${user.sub}`)
            .then(res => {setUserState({wishlist: res.data})})
            .catch(err => handleAuthErr(err))
    }

    

    //Post Owned
    const addOwned = (newBook) =>{
        console.log(newBook)
        axios.post('http://localhost:9000/insertOwned', newBook)
            .then(res=>{
                console.log(newBook)
                setUserState({owned: previous => [...previous, newBook]})
                alert('Success!')
            })
            .catch(err => handleAuthErr(err))
    }

    const addTBR = (newBook) =>{
        axios.post('http://localhost:9000/insertTBR', newBook)
            .then(res=>{
                console.log(newBook)
                setUserState({tbr: previous => [...previous, newBook]})
                alert('Success!')
            })
            .catch(err => handleAuthErr(err))
    }
    const addWishlist = (newBook) =>{
        axios.post('http://localhost:9000/insertWishlist', newBook)
            .then(res=>{
                console.log(newBook)
                setUserState({wishlist: previous => [...previous, newBook]})
                alert('Success!')
            })
            .catch(err => handleAuthErr(err))
    }
    //Delete Owned
    //Update Owned
    // const editOwned = (updates, user) => {
    //     axios.get(`updateRow/${user.sub}`, updates)
    //         .then(res =>{ 
    //             console.log(updates)
    //             setUserState({owned: previous => previous.map(stuff => stuff.sku !== productSku ? stuff: res.data)})
    //      })
    //         .catch(err => console.log(err))
    // }

return(
    <UserContext.Provider
        value={{
            ...userState,
            getOwned,
            getWishlist,
            getTBR,
            addOwned,
            addTBR,
            addWishlist,
            resetAuthErr
        }}>
        {props.children}
    </UserContext.Provider>
)

}
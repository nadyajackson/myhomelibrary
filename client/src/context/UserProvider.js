import React, {useState} from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const UserContext = React.createContext()

//user id : user.sub username = nickname

export default function UserProvider(props){
    const { user, isAuthenticated} = useAuth0();

    const initState = {
        owned: [],
        tbr: [],
        wishlist: []
    }
    const [userState, setUserState] = useState(initState)

    //Get 
    const getOwned = (user) =>{
        axios.get(`/getOwned/${user.sub}`)
            .then(res => {setUserState({owned: res.data})})
            .catch(err => console.log(err))
    }
    const getTBR = (user) =>{
        axios.get(`/getTBR/${user.sub}`)
            .then(res => {setUserState({tbr: res.data})})
            .catch(err => console.log(err))
    }

    const getWishlist = (user) =>{
        axios.get(`/getWishlist/${user.sub}`)
            .then(res => {setUserState({wishlist: res.data})})
            .catch(err => console.log(err))
    }

    

    //Post Owned
    const addOwned = (newBook) =>{
        axios.get('/insertOwned', newBook)
            .then(res=>{
                console.log(newBook)
                setUserState({owned: previous => [...previous, newBook]})
                .catch(err => console.log(err))
            })
    }
    const addTBR = (newBook) =>{
        axios.get('/insertTBR', newBook)
            .then(res=>{
                console.log(newBook)
                setUserState({tbr: previous => [...previous, newBook]})
                .catch(err => console.log(err))
            })
    }
    const addWishlist = (newBook) =>{
        axios.get('/insertWishlist', newBook)
            .then(res=>{
                console.log(newBook)
                setUserState({wishlist: previous => [...previous, newBook]})
                .catch(err => console.log(err))
            })
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
        }}>
        {props.children}
    </UserContext.Provider>
)

}
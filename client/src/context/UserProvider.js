import React, {useState} from "react";
import axios from "axios";

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState ={
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        userComments: [],
        issueComments: [],
        errMsg: '',
        issues: [],
    }
    const [userState, setUserState] = useState(initState)

    function handleError(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }
    function resetError(){
        setUserState(prevState =>({
            ...prevState,
            errMsg: ''
        }))
    }
//Signup
function signup(credentials){
    axios.post("/auth/signup", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
           // selectIssue()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleError(err.response.data.errMsg))
}
//login
function login(credentials){
    axios.post("/auth/login", credentials)
        .then(res =>{
            const { user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
           // selectIssue()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
            console.log(user._id, "login")
          //  getUserComments(user._id)
        })
        .catch(err => handleError(err.response.data.errMsg))
}
//logout
function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
        user: {},
        token: "",
        issues: [],
        userComments: []
    })
    axios.get("/")
    .then(res => console.log(res))
    .catch(err => console.log(err.response.data.errMsg))
}
return(
    <UserContext.Provider
        value={{
            ...userState,
            signup,
            login,
            logout,
            // addComment,
            // selectIssue,
            // getUserComments,
            // selectIssueThread,
            resetError
        }}>
        {props.children}
    </UserContext.Provider>
)

}
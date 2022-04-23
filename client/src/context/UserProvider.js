import React, {useState} from "react";
import axios from "axios";

export const UserContext = React.createContext()



export default function UserProvider(props){
    // const initState ={
    //     user: JSON.parse(localStorage.getItem("user")) || {},
    //     token: localStorage.getItem("token") || "",
    //     userComments: [],
    //     issueComments: [],
    //     errMsg: '',
    //     issues: [],
    // }
    // const [userState, setUserState] = useState(initState)

   
//Signup
function testuser(){
    axios.get("http://localhost:300/api/v2/users")
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
}

return(
    <UserContext.Provider
        value={{
            // ...userState,
            testuser,
            // login,
            // logout,
            // addComment,
            // selectIssue,
            // getUserComments,
            // selectIssueThread,
            //resetError
        }}>
        {props.children}
    </UserContext.Provider>
)

}
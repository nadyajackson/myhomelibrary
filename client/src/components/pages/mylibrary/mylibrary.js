import BookMapLists from "../../pieces/bookMapLists"
import axios from 'axios'
import { useEffect, useContext} from "react"
import { UserContext } from "../../../context/UserProvider"
import { useAuth0 } from "@auth0/auth0-react";

export default function Library (){
    const { user} = useAuth0();
    const {getOwned, owned} =  useContext(UserContext)
    useEffect(() =>{
        getOwned(user)
    }, []);

    function handleChange(e){
        const{value} = e.target
        console.log(value)
    }
    
    return(
        <div>
            <form className="SortForm">
               <label>Sort by:</label>
               <select onChange={handleChange}>
                    <option value="addDate">Date added(newest)</option>
                    <option value="addDate">Date added(oldest)</option>
                    <option value="Title">Title</option>
                    <option value="Author">Author</option>
                    <option value="pubDate">Date Published</option>
               </select> 
           </form>
           <BookMapLists userData = {owned} />
        </div>
    )
}
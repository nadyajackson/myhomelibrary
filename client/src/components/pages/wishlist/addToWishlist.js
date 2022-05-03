import FullBookDisplay from "../../pieces/fullBookDisplay";
import { DataContext } from "../../../context/DataProvider";
import {useContext, useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../../../context/UserProvider";

export default function AddtoWishlist (){
    const {oneBook} = useContext(DataContext)
    const bookID = oneBook.id
    const { user,} = useAuth0();
    const current = new Date()
    const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    const initialInputs = {user_id:user.sub, dateAdded: date, dateEdited: date, gid: bookID, physical:'Hardback'};
    
    const [inputs, setInputs] = useState(initialInputs);
    const {addWishlist} = useContext(UserContext)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
        setInputs(prevInputs => ({...prevInputs, gid:bookID}))
        console.log(name, value)
        console.log(inputs)
    }

    const handleSubmit = (e) => {
        setInputs(prevInputs => ({...prevInputs, gid:bookID}))
        e.preventDefault();
        console.log(inputs)
        addWishlist(inputs)
     }


    return(
        <div id="fullbook" >
            <FullBookDisplay oneBook={oneBook} />
            <form className="addtoLibrary" onSubmit={handleSubmit}>
            <h3>Add Book To Your WishList</h3>
                
            <label>Recommend By:</label>
            <input type="text" name="recomendedBy" onChange={handleChange}/>
               
            <label>Book Type:</label>
            <select name="physical" onChange={handleChange}> 
                <option name="physical" value="Audible">Audible</option>
                <option name="physical" value="Hardback">Hardback</option>
                <option name="physical" value="Kindle">Kindle</option>
                <option name="physical" value="Nook">Nook</option>
                <option name="physical" value="Paperback">Paperback</option>
                <option name="physical" value="other">other</option>
                {/* Other should trigger an input box */}
            </select>

                <button >Submit</button>
            </form>


        </div>
      
    )
}
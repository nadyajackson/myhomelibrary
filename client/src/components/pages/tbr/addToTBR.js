import FullBookDisplay from "../../pieces/fullBookDisplay";
import { DataContext } from "../../../context/DataProvider";
import {useContext, useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../../../context/UserProvider";
//Get Book data from GID
export default function AddtoTBR (){
    const {oneBook} = useContext(DataContext)
    const bookID = oneBook.id
    const {addTBR} =  useContext(UserContext)
    const { user} = useAuth0();
    const current = new Date()
    const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

    const initialInputs = {user_id:user.sub, dateAdded: date, dateEdited: date, gid: bookID };
    
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
        setInputs(prevInputs => ({...prevInputs, gid:bookID}))
        console.log(name, value)
        console.log(inputs)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
        addTBR(inputs)
     }
  


    return(
        <div id="fullbook">
            <FullBookDisplay oneBook={oneBook} /> 
            <form className="addtoLibrary" onSubmit={handleSubmit}>
            <h3>Add Book To Your To Be Read</h3>

            <label>Recommend By:</label>
                <input type="text" name="recomendedBy" onChange={handleChange}/>

                <button>Submit</button>
            </form>


        </div>
      
    )
}
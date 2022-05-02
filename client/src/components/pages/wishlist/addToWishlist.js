import FullBookDisplay from "../../pieces/fullBookDisplay";
import { DataContext } from "../../../context/DataProvider";
import {useContext, useEffect, useState} from 'react'
//Get Book data from GID
export default function AddtoWishlist (props){
    const {oneBook} = useContext(DataContext)
    const {gid} = props
    const initialInputs = {};
    const [inputs, setInputs] = useState(initialInputs);
    const {byGID} = useContext(DataContext)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
        //addFunction;
        //setInputs(initialInputs);
     }
    // useEffect(()=>{byGID(gid)},[])


    return(
        <div id="fullbook">
            {/* <FullBookDisplay oneBook={oneBook} />  */}
            <form className="addtoLibrary" onSubmit={handleSubmit}>
            <h3>Add Book To Your Library</h3>
                
                <label>Recommend By:</label>
                <input type="text" name="recomendedBy"/>

                {/* How to set input for radio button and selectors? */}
               
                <label>Book Type:</label>
                <select onChange={handleChange}> 
                    <option name="physical">Hardback</option>
                    <option name="physical">Paperback</option>
                    <option name="physical">Kindle</option>
                    <option name="physical">Nook</option>
                    <option name="physical">Audible</option>
                    <option name="physical">other</option>
                    {/* Other should trigger an input box */}
               </select>


                <button>Submit</button>
            </form>


        </div>
      
    )
}
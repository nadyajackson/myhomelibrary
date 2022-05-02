import FullBookDisplay from "../../pieces/fullBookDisplay";
import { DataContext } from "../../../context/DataProvider";
import {useContext, useEffect, useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
//Get Book data from GID
export default function AddtoLibrary (){
    const {oneBook} = useContext(DataContext)
    const initialInputs = {firstEdition: 'No', physical: 'Hardback', signedCopy: 'No', 
                            purchaseDate: '', giftedBy: '', embossed: 'No', 
                            paintedEdges: 'standard', roomInHouse: 'Office', 
                            recomendedBy: '', boughtFrom: 'No', specialEdition: 'No'};
    const [inputs, setInputs] = useState(initialInputs);
    const { user, isAuthenticated} = useAuth0();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
        console.log(name, value)
    }
    const radioChange = (e) => {
        console.log("worked")
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
        
    }

    const current = new Date()

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
        setInputs(prevInputs => ({...prevInputs, user_id:user.sub, dateAdded: current, dateEdited: current, gid: oneBook.id}))
        //addFunction;
        //setInputs(initialInputs);
     }
  


    return(
        <div id="fullbook">
            <FullBookDisplay oneBook={oneBook} /> 
            <form className="addtoLibrary" onSubmit={handleSubmit}>
            <h2>Add Book To Your Library</h2>
                <label>Purchase Date:</label>
                <input type="date" name="purchaseDate" onChange={handleChange}/>

                <label>Gifted By:</label>
                <input type="text" name="giftedBy" onChange={handleChange}/>

                <label>Recommend By:</label>
                <input type="text" name="recomendedBy" onChange={handleChange}/>

                {/* How to set input for radio button and selectors? */}
                <p>First Edition:</p>
                <div className="toggle">
                    <input type="radio" name="firstEdition" value="Yes" id="fey" checked={
                        inputs.firstEdition === 'Yes'
                    } onChange={radioChange}/>
                    <label for="fey">Yes</label>
                    <input type="radio" name="firstEdition" value="No"id="fen" checked={
                        inputs.firstEdition === 'No'
                    }
                     onChange={radioChange}/>
                    <label for="fen">No</label>
                </div>

                <p>Signed:</p>
                <div className="toggle" onChange={handleChange}>
                    <input type="radio" name="signedCopy" value="Yes" id="sy" checked={
                        inputs.signedCopy === 'Yes'
                    }onChange={radioChange}/>
                    <label for="sy">Yes</label>
                    <input type="radio" name="signedCopy" value="No" checked={
                        inputs.signedCopy === 'No'
                    } id="sn" onChange={radioChange}/>
                    <label for="sn">No</label>
                </div>

                <p>Embossed Cover:</p>
                <div className="toggle " onChange={handleChange}>
                    <input type="radio" name="embossed" value="Yes" id="ECy" checked={
                        inputs.embossed === 'Yes'
                    }onChange={radioChange}/>
                    <label for="ECy">Yes</label>
                    <input type="radio" name="embossed" value="No"checked={
                        inputs.embossed === 'No'
                    } id="ECn" onChange={radioChange}/>
                    <label for="ECn">No</label>
                </div>

                <label>Book Type:</label>
                <select name="physical" onChange={handleChange}> 
                    <option name="physical" value="Hardback">Hardback</option>
                    <option name="physical" value="Paperback">Paperback</option>
                    <option name="physical" value="Kindle">Kindle</option>
                    <option name="physical" value="Nook">Nook</option>
                    <option name="physical" value="Audible">Audible</option>
                    <option name="physical" value="other">other</option>
                    {/* Other should trigger an input box */}
               </select>

                <label>Special Edition:</label>
                <select name="specialEdition" onChange={handleChange}> 
                    <option name="specialEdition" value="No">No</option>
                    <option name="specialEdition" value="Bookish Box">Bookish Box</option>
                    <option name="specialEdition" value="FaeCrate">FaeCrate</option>
                    <option name="specialEdition" value="Barnes and Noble">Barnes and Noble</option>
                    <option name="specialEdition" value="other" >other</option>
                    {/* Other should trigger an input box */}
               </select>

               <label>Bought From:</label>
                <select name="boughtFrom" onChange={handleChange}> 
                    <option name="boughtFrom" value="No">No</option>
                    <option name="boughtFrom" value="Walmart">Walmart</option>
                    <option name="boughtFrom" value="Barnes and Noble">Barnes and Noble</option>
                    <option name="boughtFrom" value="Amazon">Amazon</option>
                    <option name="boughtFrom" value="Bookish Box">Bookish Box</option>
                    <option name="boughtFrom" value="FaeCrate">FaeCrate</option>
                    <option name="boughtFrom" value="local shop">local shop</option>
                    {/* Other should trigger an input box */}
               </select>

               <label>Edges:</label>
                <select  name="paintededges" onChange={handleChange}> 
                    <option name="paintededges" value="standard">Standard</option>
                    <option name="paintededges" value="deckled">Deckled</option>
                    <option name="paintededges" value="stenciled">Stenciled</option>
                    <option name="paintededges" value="Red">Red</option>
                    <option name="paintededges" value="Orange">Orange</option>
                    <option name="paintededges" value="Yellow">Yellow</option>
                    <option name="paintededges" value="Green">Green</option>
                    <option name="paintededges" value="Blue">Blue</option>
                    <option name="paintededges" value="Purple">Purple</option>
                    <option name="paintededges" value="Pink">Pink</option>
                    <option name="paintededges" value="Black">Black</option>
                    {/* Other should trigger an input box */}
               </select>

               <label>Room in House:</label>
                <select name="roomInHouse" onChange={handleChange}> 
                    <option name="roomInHouse" value="Library">Library</option>
                    <option name="roomInHouse" value="Office">Office</option>
                    <option name="roomInHouse" value="Bedroom">Bedroom</option>
                    <option name="roomInHouse" value="Living Room">Living Room</option>
                    <option name="roomInHouse" value="Kids room">Kids room</option>
                    <option name="roomInHouse" value="Kitchen">Kitchen</option>
                    <option name="roomInHouse" value="Other">Other</option>
                    {/* Other should trigger an input box */}
               </select>

                <button>Submit</button>
            </form>


        </div>
      
    )
}
import FullBookDisplay from "../../pieces/fullBookDisplay";
import { DataContext } from "../../../context/DataProvider";
import {useContext, useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../../../context/UserProvider";
//Get Book data from GID
export default function AddtoLibrary (){
    const {oneBook} = useContext(DataContext)
    const bookID = oneBook.id
    const {addOwned} =  useContext(UserContext)
    const { user} = useAuth0();
    const current = new Date()
    const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    
    const initialInputs = {firstEdition: 'False', physical: 'Hardback', signedCopy: 'False', embossed: 'False', 
                            paintedEdges: 'standard', roomInHouse: 'Library', gid: bookID, boughtFrom: 'unknown', specialEdition: 'No',
                            user_id:user.sub, dateAdded: date, dateEdited: date, purchaseDate: date};

    const [inputs, setInputs] = useState(initialInputs);
    
    // useEffect(setInputs(prevInputs => ({...prevInputs, gid:bookID})));


    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
        setInputs(prevInputs => ({...prevInputs, gid:bookID}))
        console.log(name, value)
        console.log(inputs)
    }
    const setGID =() =>{
        setInputs(prevInputs => ({...prevInputs, gid:bookID}))
        // console.log(bookID)
        // return new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve('resolved');
        //     }, 5000);
        //   })
    }
   
    const handleSubmit =(e)=> {
        e.preventDefault();
        addOwned(inputs)
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

          
                <p>First Edition:</p>
                <div className="toggle">
                    <input type="radio" name="firstEdition" value="True" id="fey" checked={
                        inputs.firstEdition === 'True'
                    } onChange={handleChange}/>
                    <label for="fey">Yes</label>
                    <input type="radio" name="firstEdition" value="False"id="fen" checked={
                        inputs.firstEdition === 'False'
                    } onChange={handleChange}/>
                    <label for="fen">No</label>
                </div>

                <p>Signed:</p>
                <div className="toggle">
                    <input type="radio" name="signedCopy" value="True" id="sy" checked={
                        inputs.signedCopy === 'True'
                    } onChange={handleChange}/>
                    <label for="sy">Yes</label>
                    <input type="radio" name="signedCopy" value="False" checked={
                        inputs.signedCopy === 'False'
                    } id="sn" onChange={handleChange}/>
                    <label for="sn">No</label>
                </div>

                <p>Embossed Cover:</p>
                <div className="toggle ">
                    <input type="radio" name="embossed" value="True" id="ECy" checked={
                        inputs.embossed === 'True' 
                    } onChange={handleChange}/>
                    <label for="ECy">Yes</label>
                    <input type="radio" name="embossed" value="False"checked={
                        inputs.embossed === 'False'
                    } onChange={handleChange} id="ECn" />
                    <label for="ECn">No</label>
                </div>

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

                <label>Special Edition:</label>
                <select name="specialEdition" onChange={handleChange}> 
                    <option name="specialEdition" value="No">No</option>
                    <option name="specialEdition" value="Barnes and Noble">Barnes and Noble</option>
                    <option name="specialEdition" value="Bookish Box">Bookish Box</option>
                    <option name="specialEdition" value="FaeCrate">FaeCrate</option>
                    <option name="specialEdition" value="Once Upon A Book Club">Once Upon A Book Club</option>
                    <option name="specialEdition" value="OwlCrate">OwlCrate</option>
                    <option name="specialEdition" value="Target">Target</option>
                    <option name="specialEdition" value="other" >other</option>
                    {/* Other should trigger an input box */}
               </select>

               <label>Bought From:</label>
                <select name="boughtFrom" onChange={handleChange}> 
                    <option name="boughtFrom" value="No">No</option>
                    <option name="boughtFrom" value="Amazon">Amazon</option>
                    <option name="boughtFrom" value="Barnes and Noble">Barnes and Noble</option>
                    <option name="boughtFrom" value="Book Depository">Book Depository</option>
                    <option name="boughtFrom" value="Book of the Month">Book of the Month</option>
                    <option name="boughtFrom" value="Bookish Box">Bookish Box</option>
                    <option name="boughtFrom" value="FaeCrate">Etsy</option>
                    <option name="boughtFrom" value="FaeCrate">FaeCrate</option>
                    <option name="boughtFrom" value="Half Price Books">Half Price Books</option>
                    <option name="boughtFrom" value="Local Book Shop">Local Book Shop</option>
                    <option name="boughtFrom" value="Once Upon A Book Club">Once Upon A Book Club</option>
                    <option name="boughtFrom" value="OwlCrate">OwlCrate</option>
                    <option name="boughtFrom" value="Target">Target</option>
                    <option name="boughtFrom" value="Thrift Books">Thrift Books</option>
                    <option name="boughtFrom" value="Walmart">Walmart</option>
                    <option name="boughtFrom" value="other" >other</option>
                    {/* Other should trigger an input box */}
               </select>

               <label>Edges:</label>
                <select  name="paintedEdges" onChange={handleChange}> 
                    <option name="paintedEdges" value="standard">Standard</option>
                    <option name="paintedEdges" value="deckled">Deckled</option>
                    <option name="paintedEdges" value="stenciled">Stenciled</option>
                    <option name="paintedEdges" value="Red">Red</option>
                    <option name="paintedEdges" value="Orange">Orange</option>
                    <option name="paintedEdges" value="Yellow">Yellow</option>
                    <option name="paintedEdges" value="Green">Green</option>
                    <option name="paintedEdges" value="Blue">Blue</option>
                    <option name="paintedEdges" value="Purple">Purple</option>
                    <option name="paintedEdges" value="Pink">Pink</option>
                    <option name="paintedEdges" value="Black">Black</option>
                    <option name="paintedEdges" value="Other" >Other</option>
                    {/* Other should trigger an input box */}
               </select>

               <label>Room in House:</label>
                <select name="roomInHouse" onChange={handleChange}> 
                    <option name="roomInHouse" value="Attic">Attic</option>
                    <option name="roomInHouse" value="Bedroom">Bedroom</option>
                    <option name="roomInHouse" value="Dorm room">Dorm room</option>
                    <option name="roomInHouse" value="Kids room">Kid's room</option>
                    <option name="roomInHouse" value="Kitchen">Kitchen</option>
                    <option name="roomInHouse" value="Library">Library</option>
                    <option name="roomInHouse" value="Living Room">Living Room</option>
                    <option name="roomInHouse" value="Office">Office</option>
                    <option name="roomInHouse" value="Storage">Storage</option>
                    <option name="roomInHouse" value="Other">Other</option>
                    {/* Other should trigger an input box */}
               </select>

                <button>Submit</button>
            </form>


        </div>
      
    )
}
import FullBookDisplay from "../../pieces/fullBookDisplay";
import { DataContext } from "../../../context/DataProvider";
import {useContext, useEffect, useState} from 'react'
//Get Book data from GID
export default function AddtoTBR (props){
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

                <button>Submit</button>
            </form>


        </div>
      
    )
}
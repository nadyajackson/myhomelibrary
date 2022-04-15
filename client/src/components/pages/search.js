import BookMap from "../pieces/bookMap";
import { DataContext } from "../../context/DataProvider";
import {useContext, useState} from 'react'

export default function Search (props){
   // const {} = props
const [inputs, setInputs] = useState()
const [query, setQuery] = useState()
//const context = useContext(DataContext)
 const {byTitle, byISBN, byAuthor, genQuery, bookState} = useContext(DataContext)
//console.log(context)
   function handleChange(e){
    const{value} = e.target
    console.log(value)
    setInputs(value)

}
function barChange(e){
    const{value} = e.target
    setQuery(value)
}
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(query)
        if(inputs === "general"){
            genQuery(query)
            console.log(query)
        }else if(inputs === "ISBN"){
            byISBN(query)
            console.log(query)
        }else if(inputs === "title"){
            byTitle(query)
            console.log(query)
        }else if(inputs === "author"){
            byAuthor(query)
            console.log(query)
        }
    }


    return(
        <div>
           <form name="SearchForm">
               <label>Search by:</label>
               <select onChange={handleChange}> 
                    <option value="general">Title and Author</option>
                    <option value="ISBN">ISBN</option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
               </select>
               <input name="searchbar" onChange={barChange}></input>
               <button type="submit" onClick={handleSubmit}>Submit</button>
           </form>
           <div>
              <BookMap bookState={bookState}/> 
           </div>
        </div>
    )
}
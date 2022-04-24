import BookMapLists from "../pieces/bookMapLists"

export default function Library (){
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
           <BookMapLists/>
        </div>
    )
}
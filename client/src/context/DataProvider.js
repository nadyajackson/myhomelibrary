import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const DataContext = React.createContext()

export default function DataProvider(props) {
    let key = 'AIzaSyCZKGKVzptBGV25nPaDWcgK4q6vHIzhSCQ'
    //https://www.googleapis.com/books/v1/volumes?q=search+terms
    //GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
    //https://www.googleapis.com/books/v1/volumes/volumeId
    //langRestrict
    //printType=books
//     intitle: Returns results where the text following this keyword is found in the title.
// inauthor: Returns results where the text following this keyword is found in the author.
// inpublisher: Returns results where the text following this keyword is found in the publisher.
// subject: Returns results where the text following this keyword is listed in the category list of the volume.
    //isbn: Returns results where the text following this keyword is the ISBN number.

  //  https://www.googleapis.com/books/v1/volumes?q=isbn:9781732030725&key=AIzaSyCZKGKVzptBGV25nPaDWcgK4q6vHIzhSCQ
    
    const handleErr=(errMsg)=>{
        setErrMsg(
            errMsg
        )
    }
    const resetErr=()=>{
        setErrMsg(
            errMsg = ''
        )
    }
    const [bookState, setBookState] = useState([])
    const [oneBook, setOneBook] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const byISBN = (query) => {
        const encodeQuery = encodeURIComponent(query);
        const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${encodeQuery}&key=${key}`
        
        axios.get(url).then(res => 
            {setBookState({bookState: res.data.items})}
        ).catch(err => handleErr(err))
    }

    const byGID = (query) => {
        const encodeQuery = encodeURIComponent(query);
        const url = `https://www.googleapis.com/books/v1/volumes/${encodeQuery}?key=${key}`
        
        var p = axios.get(url);
        p.then(res => 
           {console.log(url)
            console.log(res.data)
            setOneBook(res.data)}
            
        ).catch(err => handleErr(err))
        return p;

    }

    const byTitle = (query) => {
        const encodeQuery = encodeURIComponent(query);
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeQuery}&key=${key}`
    // url="https://www.googleapis.com/books/v1/volumes?q=intitle:The+Iron+King&key=AIzaSyCZKGKVzptBGV25nPaDWcgK4q6vHIzhSCQ"
        axios.get(url).then(res => {
            //console.log(res.data.items)
            setBookState({bookState: res.data.items})
            // console.log(res.data.items[0].volumeInfo.title)
        }).catch(err => handleErr(err))

    }

    const byAuthor= (query) => {
        const encodeQuery = encodeURIComponent(query);
        const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeQuery}&key=${key}`
        
        axios.get(url).then(res => 
          {  setBookState({bookState: res.data.items})}
        ).catch(err => handleErr(err))
    }
    
    const genQuery= (query) => {
        const encodeQuery = encodeURIComponent(query);
        const url = `https://www.googleapis.com/books/v1/volumes?q="${encodeQuery}"&key=${key}`
        
        axios.get(url).then(res => {
            console.log(url)
            console.log(res.data.items)
            setBookState({bookState: res.data.items})}
        ).catch(err => handleErr(err))
    }
   

    return(
        <DataContext.Provider
            value={{
                ...bookState,
                oneBook,
                byISBN,
                byGID,
                byTitle,
                byAuthor,
                genQuery,
                resetErr
            }}>
            {props.children}
        </DataContext.Provider>
    )
}
import React, { useState} from 'react';
//import { DataContext } from '../../context/DataProvider';
import coverNotFound from "../../coverNotFound.png"
//import { useAuth0 } from "@auth0/auth0-react";


//byGID
export default function FullBookDisplay(props){
    const [loading, setLoading] = useState(true)
    const {volumeInfo} = props.oneBook
    function noCover (){
        // console.log(volumeInfo)
        if(volumeInfo.imageLinks !== undefined){
            return volumeInfo.imageLinks.thumbnail
        }else{return coverNotFound}
    }
    let Authors = !volumeInfo ? 'loading':
        volumeInfo.authors.map(bookdata => <h4>{bookdata}</h4>)
    

    return(
        !volumeInfo ? 'loading': 
        <div className='fullbook'>
            <img src={noCover()} alt="bookcover" height="40px"/>
            <h2>{volumeInfo.title}</h2>
            {Authors}
            <p>{volumeInfo.description}</p>
            <p>Published: {volumeInfo.publishedDate}</p>
            <p>Publisher: {volumeInfo.publisher}</p>
            <p>Published Date: {volumeInfo.publishedDate}</p>
            <p>ISBN 10: {volumeInfo.industryIdentifiers[0].identifier}</p>
            <p>ISBN 13: {volumeInfo.industryIdentifiers[1].identifier}</p>
            <p>Pages: {volumeInfo.pageCount}</p>
        </div>
    )
}
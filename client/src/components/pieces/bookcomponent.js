import React, { useContext, } from 'react';
import { DataContext } from '../../context/DataProvider';
import coverNotFound from "../../coverNotFound.png"
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';


export default function BookPiece (props){
    const {volumeInfo, id} = props
    let gid = id
    const {isAuthenticated} = useAuth0();
    const {byGID} = useContext(DataContext)
    function noCover (){
        if(volumeInfo.imageLinks !== undefined){
            return volumeInfo.imageLinks.thumbnail
        }else{return coverNotFound}
    }
    async function getOneBook(){
        console.log(gid)
        await byGID(gid)
        console.log("complete")
    }
    
    let Authors = volumeInfo.authors.map(bookdata => <h4>{bookdata}</h4>)
    
    return(
        <div className='bookdata'>
            <img src={noCover()} alt="bookcover" height="40px"/>
            <h2>{volumeInfo.title}</h2>
            {Authors}
            <p>{volumeInfo.description}</p>
            <div className='buttons'>
                <Link  to={isAuthenticated ? '/addToLibrary' : '/'} gid={gid}> <button onClick={getOneBook}>Add to Library</button></Link> 
                <Link to={isAuthenticated ? '/addToTBR' : '/'}><button onClick={getOneBook}>Add to TBR</button> </Link>
                <Link to={isAuthenticated ? '/addToWishlist' : '/'}> <button onClick={getOneBook}>Add to Wishlist</button> </Link>
            </div>
        </div>
    )
}
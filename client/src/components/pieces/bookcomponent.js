import React, { useContext, useState} from 'react';
import { DataContext } from '../../context/DataProvider';
import coverNotFound from "../../coverNotFound.png"
import { useAuth0 } from "@auth0/auth0-react";
import {Link, Navigate} from 'react-router-dom';


export default function BookPiece (props){
    const {volumeInfo, id} = props
    const {isAuthenticated} = useAuth0();
    const {byGID} = useContext(DataContext)
    function noCover (){
        if(volumeInfo.imageLinks !== undefined){
            return volumeInfo.imageLinks.thumbnail
        }else{return coverNotFound}
    }
    async function getOneBook(){
        let gid = id
        console.log(gid)
        await byGID(gid)
        console.log("complete")
    }
  
    
    return(
        <div className='bookdata'>
            <img src={noCover()} alt="bookcover" height="40px"/>
            <h2>{volumeInfo.title}</h2>
            <h4>{volumeInfo.authors}</h4>
            <p>{volumeInfo.description}</p>
            <div className='buttons'>
                <Link  to={isAuthenticated ? '/addToLibrary' : '/'}> <button onClick={getOneBook}>Add to Library</button></Link> 
                <Link to={isAuthenticated ? '/addToTBR' : '/'}><button onClick={getOneBook}>Add to TBR</button> </Link>
                <Link to={isAuthenticated ? '/addToWishlist' : '/'}> <button onClick={getOneBook}>Add to Wishlist</button> </Link>
            </div>
        </div>
    )
}
import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import coverNotFound from "../../coverNotFound.png"
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


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
    const navigate = useNavigate();

    async function getLibrary(){
        console.log(gid)
        await byGID(gid)
        console.log("complete")
        navigate('/addtolibrary')
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
                <button onClick={getLibrary} >Add to Library</button>
                <Link to={isAuthenticated ? '/addToTBR' : '/'}><button onClick={getOneBook}>Add to TBR</button> </Link>
                <Link to={isAuthenticated ? '/addToWishlist' : '/'}> <button onClick={getOneBook}>Add to Wishlist</button> </Link>
            </div>
        </div>
    )
}
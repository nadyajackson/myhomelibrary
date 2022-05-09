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
    async function getTBR(){
        console.log(gid)
        await byGID(gid)
        console.log("complete")
        navigate('/addToTBR')
    }
    async function getWL(){
        console.log(gid)
        await byGID(gid)
        console.log("complete")
        navigate('/addToWishlist')
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
                <button onClick={getTBR}>Add to TBR</button>
                <button onClick={getWL}>Add to Wishlist</button>
            </div>
        </div>
    )
}
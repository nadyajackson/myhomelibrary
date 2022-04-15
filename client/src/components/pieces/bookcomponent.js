import React, {useContext} from 'react';
import { DataContext } from '../../context/DataProvider';
import coverNotFound from "../../coverNotFound.png"

export default function BookPiece (props){
    const {volumeInfo} = props

    function noCover (){
        if(volumeInfo.imageLinks !== undefined){
            return volumeInfo.imageLinks.thumbnail
        }else{return coverNotFound}
    }

    
    return(
        <div className='bookdata'>
            <img src={noCover()} alt="bookcover" height="40px"/>
            <h2>{volumeInfo.title}</h2>
            <h4>{volumeInfo.authors}</h4>
             <p>{volumeInfo.description}</p>
            <button>Library</button>
            <button>TBR</button>
            <button>Wishlist</button>
        </div>
    )
}
import React, {useContext} from 'react';
import { DataContext } from '../../context/DataProvider';


export default function BookPiece (props){
    const {volumeInfo} = props
    return(
        <div className='bookdata'>
            <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.alt} height="40px"/>
            <h2>{volumeInfo.title}</h2>
            <h4>{volumeInfo.authors}</h4>
             <p>{volumeInfo.description}</p>
            <button>Library</button>
            <button>TBR</button>
            <button>Wishlist</button>
        </div>
    )
}
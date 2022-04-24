import React from 'react'
import BookPiece from './bookcomponent'
import { DataContext } from '../../context/DataProvider'
import {useContext} from 'react'

export default function BookMap(){
  const {bookState} = useContext(DataContext)
// console.log(bookState)
  return (
    <div >
       {bookState.map(bookdata =>  <BookPiece {...bookdata}  key={bookdata.id}/>)} 
    </div>
  )
}
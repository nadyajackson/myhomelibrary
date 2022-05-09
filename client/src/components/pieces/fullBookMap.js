import React from 'react'
import FullBookDisplay from './fullBookDisplay'
import { DataContext } from '../../context/DataProvider'
import {useContext} from 'react'

export default function FullBookMap(){
  const {bookState} = useContext(DataContext)
console.log(bookState)
  return (
    <div >
       {bookState.map(bookdata =>  <FullBookDisplay {...bookdata}  key={bookdata.id}/>)} 
    </div>
  )
}
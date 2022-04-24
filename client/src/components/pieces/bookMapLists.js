import React from 'react'
import BookPiece from './bookcomponent'
import {UserContext} from '../../context/UserProvider'
import {useContext} from 'react'

export default function BookMapLists(){
  const {listState} = useContext(UserContext)
 console.log(listState)
  return (
    <div>
       {/* {listState.map(listdata =>  <BookPiece {...listdata}  key={listdata.id}/>)}  */}
    </div>
  )
}
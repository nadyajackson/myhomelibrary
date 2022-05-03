import React from 'react'
import BookPiece from './bookcomponent'
import {UserContext} from '../../context/UserProvider'
import {useContext, useState} from 'react'
import axios from 'axios'

export default function BookMapLists(props){
  const {userData} = props
  const initState ={
    listState: []
  }
  const [listState, setListState] = useState(initState)
  let key = 'AIzaSyCZKGKVzptBGV25nPaDWcgK4q6vHIzhSCQ'

  userData.forEach(bookData => {
      const encodeQuery = encodeURIComponent(bookData.gid);
      console.log(encodeQuery)
      const url = `https://www.googleapis.com/books/v1/volumes/${encodeQuery}?key=${key}`
      // axios.get(url).then(res => 
      //     {setListState({listState: res.data.items})}    
      // ).catch(err => console.log(err))
  });


//  console.log(listState)
  return (
    <div>
    {console.log(listState)}
       {/* {listState.map(listdata =>  <BookPiece {...listdata}  key={listdata.gid}/>)}  */}
    </div>
  )
}
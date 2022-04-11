import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import logo from './homelibrary.png'


export default function Navbar(){
   // const { logout, token }= useContext(UserContext)
    return(
        <div className='NavBar'>
            <span>
            <img src={logo} alt="My Home Library Logo" height="300px"/>
            <Link to="/">Home</Link>
            {/* { token && <Link to="/mylibrary">My Library</Link> }
            { token && <Link to="/wishlist">Wishlist</Link> }
            { token && <Link to="/tbr">TBR</Link> } */}
            <Link to="/search">Search</Link>
            <Link to="/contact">Contact</Link>
            {/* { token && <button onClick={logout}>Logout</button>} */}
            </span>
        </div>
    )
}
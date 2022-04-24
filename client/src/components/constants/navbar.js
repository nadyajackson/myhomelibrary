import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import logo from './homelibrary.png'
import LoginButton from './loginbutton';
import LogoutButton from './logoutbutton';
import { useAuth0 } from "@auth0/auth0-react";



export default function Navbar(){
    
     const { user, isAuthenticated} = useAuth0();
      
    
    return(
        
        <div className='navbar'>
            <img src={logo} alt="My Home Library Logo" />
            <span>
            {/* <img src={logo} alt="My Home Library Logo" /> */}
            <Link to="/">Home</Link>
            {isAuthenticated && <Link to="/mylibrary">My Library</Link> } 
            {isAuthenticated && <Link to="/wishlist">Wishlist</Link> }
            {isAuthenticated && <Link to="/tbr">TBR</Link> }
            <Link to="/search">Search</Link>
            <Link to="/contact">Contact</Link>
            {isAuthenticated && <p>Welcome, {user.name}</p>}
             {isAuthenticated && <LogoutButton/> }
            {!isAuthenticated && <LoginButton/> }
            </span>
        </div>
    )
}
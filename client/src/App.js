import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/constants/navbar';
import Footer from './components/constants/footer';
import Home from './components/pages/home';
import TBR from './components/pages/tbr/tbr';
import Wishlist from './components/pages/wishlist/wishlist';
import Search from './components/pages/search';
import Library from './components/pages/mylibrary/mylibrary';
// import ProtectedRoute from "./components/constants/ProtectedRoute"
import Contact from "./components/pages/contact"
import { useAuth0 } from "@auth0/auth0-react";
import AddtoLibrary from './components/pages/mylibrary/addToLibrary';
import AddtoTBR from './components/pages/tbr/addToTBR'
import AddtoWishlist from './components/pages/wishlist/addToWishlist'

function App() {
  const {isAuthenticated} = useAuth0();
  const ProtectedRoute = ({children})=> {
    if(isAuthenticated === false){return <Navigate to={"/"} replace/> }
    return(children)}

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact path = "/"
          element={<Home/>}
        />
       <Route
          path="/myLibrary"
          element={
          <ProtectedRoute>
            <Library/>
            </ProtectedRoute>}   
        />
        <Route
          path="/addToLibrary"
          element={
          <ProtectedRoute>
            <AddtoLibrary/>
            </ProtectedRoute>}   
        />
        <Route
          path="/addToTBR"
          element={
          <ProtectedRoute>
            <AddtoTBR/>
            </ProtectedRoute>}   
        />
        <Route
          path="/addToWishlist"
          element={
          <ProtectedRoute>
            <AddtoWishlist/>
            </ProtectedRoute>}   
        />
        <Route
          path="/tbr"
          element={<ProtectedRoute><TBR/></ProtectedRoute>}    
        />
        <Route
          path="/wishlist"
          element={<ProtectedRoute><Wishlist/></ProtectedRoute>}
        /> 
        <Route
          path="/search"
          element={<Search/>}
        />
        <Route
          path="/contact"
          element={<Contact/>}
        />
      </Routes>
      <Footer/> 
    </div>
  );
}
export default App;

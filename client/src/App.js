import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/constants/navbar';
import Footer from './components/constants/footer';
import Login from './components/pieces/login';
import Home from './components/pages/home';
import TBR from './components/pages/tbr';
import Wishlist from './components/pages/wishlist';
import Search from './components/pages/search';
import { UserContext } from './context/UserProvider';


function App() {
//const {token, logout} = useContext(UserContext)
  return (
    <div className="App">
      <Navbar /*logout = {logout}*/ />
      <Routes>
        <Route
          exact path = "/"
          element={<Home/>}
       //   render={()=> token ? <Navigate to="/mylibrary" /> : <Home /> }
        />
        {/* <ProtectedRoute
          path="/tbr"
          element={<TBR/>}
          redirectTo='/'  
          token={token}
        />
        <ProtectedRoute
          path="/wishlist"
          element={<Wishlist/>}
          redirectTo='/'  
          token={token} */}
        {/* /> */}
        {/* <Route
          path="/search"
          element={<Search/>}
        /> */}
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

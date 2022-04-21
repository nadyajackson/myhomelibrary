import React, {useContext} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/constants/navbar';
import Footer from './components/constants/footer';
import Home from './components/pages/home';
import Login from './components/pages/login';
import TBR from './components/pages/tbr';
import Wishlist from './components/pages/wishlist';
import Search from './components/pages/search';
import Library from './components/pages/mylibrary';
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
        <Route
          exact path = "/login"
          element={<Login/>}
       />
       <Route
          path="/myLibrary"
          element={<Library/>}
          //useNavigate='/'  
         
        />
        <Route
          path="/tbr"
          element={<TBR/>}
          //useNavigate='/'    
          
        />
        <Route
          path="/wishlist"
          element={<Wishlist/>}
          //useNavigate='/'    
          
        /> 
        <Route
          path="/search"
          element={<Search/>}
        />
      </Routes>
      <Footer/> 
    </div>
  );
}
// const ProtectedRoute = ({ user, children }) => {
//   if (!user) {
//     return <Navigate to="/landing" replace />;
//   }

//   return children;
// };
export default App;

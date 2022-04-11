import React, {useContext} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/constants/navbar';
import Footer from './components/constants/footer';
import Login from './components/pieces/login';
import Home from './components/pages/home';
import TBR from './components/pages/tbr';
import Wishlist from './components/pages/wishlist';
import Search from './components/pages/search';


function App() {
const {token, logout} = useContext(UserContext)
  return (
    <div className="App">
      <Navbar logout = {logout} />
      <Switch>
        <Route
          exact path = "/"
          render={()=> token ? <Redirect to="/mylibrary" /> : <Home /> }
        />
        <ProtectedRoute
          path="/tbr"
          component={TBR}
          redirectTo='/'  
          token={token}
        />
        <ProtectedRoute
          path="/wishlist"
          component={Wishlist}
          redirectTo='/'  
          token={token}
        />
        <Route
          path="/search"
          component={Search}
        />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

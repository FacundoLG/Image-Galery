import './App.css';
import Login from './pages/Login'
import SingUp from './pages/SingUp'
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom'
import { connect } from 'react-redux';
function App({loggedIn}) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
            { loggedIn ? <Redirect to="/home"/> : ""}
          </Route>
          <Route path="/register">
            <SingUp/>
          </Route>
          { loggedIn ? 
          <Route path="/home">
            <Home/>
          </Route>: 
          <Redirect to="/login"/>
        }
          <Route path="/">
              <Redirect to="/login"/>   
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
const MapStateToProps = state => {
  return {
    loggedIn: state.User.loggedIn
  }
}
export default connect(MapStateToProps,null)(App);

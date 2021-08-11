import './App.css';
import Login from './pages/Login'
import SingUp from './pages/SingUp'
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Router path="/home">
            <Home/>
          </Router>
          <Router path="/login">
            <Login />
          </Router>
          <Router path="/register">
            <SingUp/>
          </Router>
          <Router path="/">
              <Redirect to="/login"/>   
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

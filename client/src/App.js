import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import NavBar from './components/NavBar';

function App() {


  const handleUsers = (data) => {
    console.log(data)
  }

  return (
    <div className="App">
        <NavBar />
          <Switch>
              <Route exact path='/signup'>
                  <Signup />
              </Route>
              <Route exact path='/login'>
                  <Login />
              </Route>
              <Route exact path='/logout'>
                  <Logout />
              </Route>
          </Switch>
    </div>
  );
}

export default App;

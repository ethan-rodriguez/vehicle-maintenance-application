import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, useHistory } from 'react-router-dom'
import { useState } from 'react'
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Garage from './components/Garage';
import NavBar from './components/NavBar';
import CreateVehicle from './components/CreateVehicle';

function App() {

  
  const [user ,setUser] = useState(null)
  const [errors, setErrors] = useState([])

  const history = useHistory()

  const handleLogin = (data) => {
    console.log(data, 'handleLogin')
    data.errors ? setErrors(data.errors) : handleState(data)
    if (!data.errors){
      history.push('/garage')
      setErrors([])
    }
  }

const handleState = (data) => {
  setUser(data)
}

  return (
    <div className="App">
        <NavBar user={user} />
          <Switch>
              <Route exact path='/signup'>
                  <Signup handleAuth={handleLogin}/>
              </Route>
              <Route exact path='/login'>
                  <Login handleLogin={handleLogin} />
              </Route>
              <Route exact path='/logout'>
                  <Logout />
              </Route>
              <Route exact path='/garage'>
                <Garage />
              </Route>
              <Route exact path='/createvehicle'>
                <CreateVehicle />
              </Route>
          </Switch>
    </div>
  );
}

export default App;

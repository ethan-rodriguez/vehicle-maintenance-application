import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Garage from './components/Garage';
import NavBar from './components/NavBar';
import CreateVehicle from './components/CreateVehicle';
import Errors from './components/Errors';

function App() {

  
  const [user, setUser] = useState(null)
  const [vehicles, setVehicles] = useState([])
  const [errors, setErrors] = useState([])

  const history = useHistory()

  const handleLogin = (data) => {
    data.errors ? setErrors(data.errors) : setUser(data)
    if (!data.errors){
      console.log(`Setting current user to ${data.username}.`)
      history.push('/garage')
      setErrors([])
    }
  }

const handleVehicles = (data) => {
  data.errors ? setErrors(data.errors) : setVehicles(data)
  if (!data.errors){
    console.log(`${data.year} ${data.make} ${data.model} added to garage`)
    history.push('/garage')
  }
}


const checkSessionId = () => {
  fetch('/me')
  .then(resp => resp.json())
  .then(data => {
    console.log(`${data.username} has been auto logged in`)
    setUser(data)
  })
}
useEffect(checkSessionId, [])


  return (
    <div className="App">
        <NavBar user={user} />
          <Switch>
              <Route exact path='/signup'>
                  <Signup handleLogin={handleLogin} errors={errors} />
              </Route>
              <Route exact path='/login'>
                  <Login handleLogin={handleLogin} errors={errors} />
              </Route>
              <Route exact path='/logout'>
                  <Logout setUser={setUser} />
              </Route>
              <Route exact path='/garage'>
                <Garage />
              </Route>
              <Route exact path='/createvehicle'>
                <CreateVehicle handleVehicles={handleVehicles} errors={errors} />
              </Route>
          </Switch>
    </div>
  );
}

export default App;

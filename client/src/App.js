import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, useHistory } from 'react-router-dom'
import { useState } from 'react'
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Garage from './components/Garage';
import NavBar from './components/NavBar';

function App() {

  
  const [user ,setUser] = useState(null)
  const [errors, setErrors] = useState([])

  const history = useHistory()

  const handleAuth = (data) => {
    console.log(data, 'handle auth function')
    data.errors ? setErrors(data.errors) : handleState()
    if (!data.errors){
      history.pushState('/garage')
      setErrors([])
    }
  }

const handleState = () => {
  
}

  return (
    <div className="App">
        <NavBar />
          <Switch>
              <Route exact path='/signup'>
                  <Signup handleAuth={handleAuth}/>
              </Route>
              <Route exact path='/login'>
                  <Login />
              </Route>
              <Route exact path='/logout'>
                  <Logout />
              </Route>
              <Route exact path='/garage'>
                <Garage />
              </Route>
          </Switch>
    </div>
  );
}

export default App;

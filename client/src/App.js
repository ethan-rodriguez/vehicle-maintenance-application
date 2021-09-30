import './App.css';
import { Switch, Route } from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {


  const handleUsers = (data) => {
    console.log(data)
  }

  return (
    <div className="App">
        <Signup />
        <Login />
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

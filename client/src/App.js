import './App.css';
import { Switch, Route } from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';


function App() {


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
            <Route>
                <Logout />
            </Route>
        </Switch>
    </div>
  );
}

export default App;

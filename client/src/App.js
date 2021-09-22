import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {


  return (
    <div className="App">
      <Signup />

      <Switch>
          <Route exact path='/signup'>
              <Signup />
          </Route>
          <Route exact path='/login'>
              <Login />
          </Route>
      </Switch>
    </div>
  );
}

export default App;

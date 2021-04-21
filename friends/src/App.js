
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Howdy!</h1>
      <Link to="/friends" style={{marginRight: "12px"}}>See Friends</Link>
      <Link to="/friends/add-new">Add Friend</Link>
    <Switch>
      <PrivateRoute path="/friends" component={FriendsList}/>
      <PrivateRoute path="/friends/add-new" component={AddFriendForm}/>
  
      
      <Route path="/login">
        <Login/>
      </Route>
      <Route>
        <Login/>
      </Route>
    </Switch>  
    </div>
    </Router>
  );
}

export default App;

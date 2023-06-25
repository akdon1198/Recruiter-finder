import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Panel from "./pages/Panel/Panel"
import Register from "./pages/Register/Register"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/login'><Login/></Route>
        <Route exact path='/register'><Register/></Route>
        <Route exact path='/panel'><Panel/></Route>
      </Switch>
    </Router>
  );
}

export default App;

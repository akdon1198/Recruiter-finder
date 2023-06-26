import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Panel from "./pages/Panel/Panel";
import Register from "./pages/Register/Register";
import { useSelector } from "react-redux";

function App() {
  const loginuser = useSelector((state) => state.user.loginuser);
  const registeruser = useSelector((state) => state.user.registeruser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          {Object.keys(registeruser).length ? (
            <Login />
          ) : (
            <Redirect to="/register" />
          )}
        </Route>
        <Route path="/register">
          {Object.keys(registeruser).length ? (
            <Redirect to="/login" />
          ) : (
            <Register />
          )}
        </Route>
        {Object.keys(loginuser).length ? (
          <Route path="/panel">
            <Panel />
          </Route>
        ) : <Redirect to = "/login"/>}
      </Switch>
    </Router>
  );
}

export default App;

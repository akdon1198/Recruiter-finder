import "../Login/Login.css";
import { NavLink } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="full-container">
        <div className="login">LOGIN</div>
        <div className="input-email">
          <input className="input-email-name" type="text" placeholder="Email" />
        </div>
        <div className="input-password">
          <input
            className="input-password-name"
            type="text"
            placeholder="Password"
          />
        </div>
        <div className="create-new-account">Create New Account</div>
        <NavLink style={{ textDecoration: "none" }} to="/register">
          <div className="register-button">Register</div>
        </NavLink>
      </div>
    </>
  );
}
export default Login;

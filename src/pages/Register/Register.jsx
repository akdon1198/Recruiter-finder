import "../Register/Register.css";
import { NavLink } from "react-router-dom";
function Register() {
  return (
    <>
      <div className="full-container">
        <div className="login">REGISTER</div>
        <div className="input-email">
          <input className="input-email-name" type="text" placeholder="Email" />
        </div>
        <div className="input-password">
          <input
            className="input-password-name"
            type="text"
            placeholder="New Password"
          />
        </div>
        <div className="input-password">
          <input
            className="input-password-name"
            type="text"
            placeholder="Confirm Password"
          />
        </div>
        <div className="create-new-account">Already Registered</div>
        <NavLink style={{ textDecoration: "none" }} to="/login">
          <div className="register-button">Login</div>
        </NavLink>
      </div>
    </>
  );
}
export default Register;

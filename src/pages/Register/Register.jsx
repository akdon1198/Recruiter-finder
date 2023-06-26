import "../Register/Register.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addregister } from "../../redux/UserRedux";
function Register() {
  const [emailaddress, setemailaddress] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [emailerror, setemailerror] = useState({});
  const [newpassworderror, setnewpassworderror] = useState({});
  const [confirmpassworderror, setconfirmpassworderror] = useState({});
  const history = useHistory()
  const dispatch = useDispatch()
  function handleemail(e) {
    setemailaddress(e.target.value);
  }
  function handlenewpassword(e) {
    setnewpassword(e.target.value);
  }
  function handleconfirmpassword(e) {
    setconfirmpassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addregister({emailaddress, confirmpassword}))
    history.push("/login")
  }
  return (
    <>
      <div className="full-container">
        <div className="login">REGISTER</div>
        <form onSubmit={handleSubmit}>
          <div className="input-email">
            <input
              className="input-email-name"
              type="text"
              placeholder="Email"
              onChange={handleemail}
              value={emailaddress}
            />
          </div>
          <div className="input-password">
            <input
              className="input-password-name"
              type="text"
              placeholder="New Password"
              onChange={handlenewpassword}
              value={newpassword}
            />
          </div>
          <div className="input-password">
            <input
              className="input-password-name"
              type="text"
              placeholder="Confirm Password"
              onChange={handleconfirmpassword}
              value={confirmpassword}
            />
          </div>
          <button className="subbuttn" type="submit">
            submit
          </button>
        </form>
        <div className="create-new-account">Already Registered</div>
        <NavLink style={{ textDecoration: "none" }} to="/login">
          <div className="register-button">Login</div>
        </NavLink>
      </div>
    </>
  );
}
export default Register;

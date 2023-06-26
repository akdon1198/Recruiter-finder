import "../Login/Login.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addlogin } from "../../redux/UserRedux";
function Login() {
  const [emailaddress, setemailaddress] = useState("");
  const [password, setpassword] = useState("");
  const [emailerror, setemailerror] = useState({});
  const [passworderror, setpassworderror] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const loginuser = useSelector(state => state.user.loginuser)
  console.log(loginuser);
  function handleSubmit(e) {
    e.preventDefault();
    let isvalid = true;
    if (!/^\d{10}$/.test(password)) {
      isvalid = false;
      setpassworderror({ border: "2px solid red", boxShadow: "0 0 5px red" });
      setTimeout(() => {
        setpassworderror({});
      }, 1000);
    }
    if (!/^\S+@\S+\.\S+$/.test(emailaddress)) {
      isvalid = false;
      setemailerror({ border: "2px solid red", boxShadow: "0 0 5px red" });
      setTimeout(() => {
        setemailerror({});
      }, 1000);
    }
    dispatch(addlogin({emailaddress, password}))
    if (isvalid) {
      setemailaddress("");
      setpassword("");
    }
  }
  if(Object.keys(loginuser).length) {
    history.push("/panel")
  }
  function handlepassword(e) {
    setpassword(e.target.value);
  }
  function handleemail(e) {
    setemailaddress(e.target.value);
  }
  return (
    <>
      <div className="full-container">
        <div className="login">LOGIN</div>
        <form onSubmit={handleSubmit}>
          <div className="input-email">
            <input
              style={{ emailerror }}
              className="input-email-name"
              type="text"
              placeholder="Email"
              value={emailaddress}
              onChange={handleemail}
            />
          </div>
          <div className="input-password">
            <input
              style={{ passworderror }}
              className="input-password-name"
              type="text"
              placeholder="Password"
              value={password}
              onChange={handlepassword}
            />
          </div>
          <button className="subbuttn" type="submit">
            submit
          </button>
        </form>
        <div className="create-new-account">Create New Account</div>
        <NavLink style={{ textDecoration: "none" }} to="/register">
          <div className="register-button">Register</div>
        </NavLink>
      </div>
    </>
  );
}
export default Login;

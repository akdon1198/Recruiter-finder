import "../Home/Home.css";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="head-section">
        <div className="head-title">
          Welcome to Our Online Recruitment Solution
        </div>
        <div className="loginregister">
          <NavLink style={{textDecoration:"none"}}to="/login">
            <div className="headlogin">Login</div>
          </NavLink>
          <NavLink style={{textDecoration:"none"}}to="/register">
            <div className="headregister">Register</div>
          </NavLink>
        </div>
      </div>
      <div className="mid-section">
        <div className="mid-titles">
          <div className="mid-title">Total Users</div>
          <div className="mid-title">Downloads</div>
          <div className="mid-title">Partners</div>
        </div>
        <div className="mid-values">
          <div className="mid-value">50M+</div>
          <div className="mid-value">1M+</div>
          <div className="mid-value">100K+</div>
        </div>
      </div>
      <div className="para">
        Streamline your hiring process with our efficient and effective
        solution.
      </div>
      <div className="bottom-section">
        <NavLink style={{textDecoration:"none"}}to="/panel">
        <div className="bottom-button">
          <div className="bottom-title">Get Started</div>
        </div>
        </NavLink>
      </div>
    </>
  );
}

export default Home;

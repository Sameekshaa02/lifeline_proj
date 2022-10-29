import "./styles.css";
import {useNavigate} from "react-router-dom";
import "./Hospitaldashboard.css";
import loginbloodbank from "./Loginbloodbank";
import GoogleButton from "react-google-button";

function HospitalLogin() {
  const navigate = useNavigate();
  const navigateToHospitalDashboard = () => {
    navigate("/HospitalLogin/HospitalDashboard");
  };


  return (
    <div>
      <div className="bg">
        <div className="containers">
          <div className="topnav2">
            <a
              style={{
                textDecoration: "underline",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              href="/HospitalLogin"
            >
              Hospital
            </a>
            <a href="/BloodBankLogin">Bloodbank</a>
          </div>
        </div>
        <div className="text-block1">
          <h2 style={{ opacity: "100%" }}>WELCOME BACK </h2>
          <div>
            <form>
              <input type="text" placeholder="Email"
                onChange={(event) => {
                }}
              />
              <br />
              <br />
              <input
                type="Password"
                placeholder="Password"
                onChange={(event) => {
                }}
              />
              <br />
              <br />
              <a style={{fontSize:"14px",textDecoration:"None"}} href="">Forgot Password</a>
              <br />
              
              <br />
              <button
                className="loginbutton"
                type="button"
                onClick={
                  () => {
                    return navigateToHospitalDashboard();
                  }
                  //navigateToHospitalDashboard
                }
              >
                Sign in
              </button>
              <br />
              <br />
            {/* <div><GoogleButton className="g-btn" type="dark" /></div> */}
              <h4>
                <b>
                  Don't have an account?<br/>
                  <a href="">Sign Up</a>
                </b>
              </h4>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalLogin;
import "./styles.css";
import { useNavigate } from "react-router-dom";
import "./Hospitaldashboard.css";
import Blooddashboard from "./Blooddashboard.js";

function Loginbloodbank() {
  const navigate = useNavigate();
  const navigateTobloodDashboard = () => {
    navigate("/Loginbloodbank/Blooddashboard");
  };


  return (
    <div>
      <div className="bg">
        <div className="containers">
          <div className="topnav2">
            <a href="../"
            >
              Hospital
            </a>
            <a style={{
                textDecoration: "underline",
                fontSize: "20px",
                fontWeight: "bold",
              }} >Bloodbank</a>
          </div>
        </div>
        <div className="text-block1">
          <h2 style={{ opacity: "100%" }}>WELCOME BACK </h2>
          <div>
            <form>
              <input
                type="text"
                placeholder="Email"
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
              <a href="">Forgot Password</a>
              <br />
              <br />
              <button
                className="loginbutton"
                type="button"
                onClick={
                  () => {
                    return navigateTobloodDashboard();
                  }
                  //navigateToHospitalDashboard
                }
              >
                Sign in
              </button>
              <br />
              <br />

              <h4>
                <b>
                  Don't have an account?
                  <a href="/Login/SignUp">Sign Up</a>
                </b>
              </h4>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginbloodbank;

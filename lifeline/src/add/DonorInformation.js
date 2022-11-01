import logo1 from "./logo1.png";
import bgimage from "./dashboardimage.png";

import "./Hospitaldashboard.css";
import { useState } from "react";



//import Axios from "axios";
// const tableElements = {
//   border: "1px solid black",
//   borderCollapse: "collapse",
//   columnWidth: "500px",
//   paddingTop: "5px",
//   paddingBottom: "5px",
//   paddingLeft: "5px",
//   paddingRight: "5px",
// };

function DonorInformation() {

  return (
    <div>
      <div className="row">
        {/* column 1 */}
        <div className="column1"
          style={{
            backgroundColor: "#F0A8AE"
          }}>

          <div class='odinMainContainer'>
            {/* <!-- Left Sidebar Area[upper] --> */}
            <div class='odinLeftSidebarContainer'>
              <div className="rowlogo">
                <br />
                <div className="columnlogo1" style={{ backgroundColor: "#F0A8AE" }}>
                  <img style={{ width: "95%", height: "100%" }} src={logo1} />
                </div>
                <div class="columnlogo2" style={{ backgroundColor: "" }}>
                  <h1 style={{ fontSize: "23px", opacity: "80%", margin: "0px" }}>LifeLine</h1>
                  <p style={{ margin: "0px" }}>Save a Life<br />Give Blood</p>


                </div>
              </div>
            </div>

            {/* Left Sidebar Area[Lower] */}
            <div class='odinMainContentContainer'>
              <hr style={{ padding: "0px", margin: "0px", backgroundColor: "black" }} />
              <div style={{ paddingTop: "70px", paddingLeft: "40px" }}>
              <a
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "20px",
                    textDecoration: "none",
                    padding: "10px",
                    opacity: "10px",
                  }}
                  href="/"
                >
                  Profile
                </a>
                <br />
                <br />

                <a
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "20px",
                    textDecoration: "none",
                    padding: "10px",
                    opacity: "10px",
                  }}
                  href="/BloodBankLogin/BloodBankDashboard/BloodRequirements"
                >
                  Blood Requirements
                </a>
                <br />
                <br />
                <a
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "20px",
                    textDecoration: "none",
                    padding: "10px",
                    opacity: "10px",
                  }}
                  href="/BloodBankLogin/BloodBankDashboard/DonorInformation"
                >
                  Donor Information
                </a>
                <br />
                <br />
                <a
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "20px",
                    textDecoration: "none",
                    padding: "10px",
                    opacity: "10px",
                  }}
                  href="/BloodBankLogin/BloodBankDashboard/StockAvailable"
                >
                 Stock Available
                </a>
                <br />
                <br />
                <a
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "20px",
                    textDecoration: "none",
                    padding: "10px",
                    opacity: "10px",
                  }}
                  href="/BloodBankLogin/BloodBankDashboard/AddDonor"
                >
                  Add Donar
                </a>
                <br />
                <br />
                <a
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "20px",
                    textDecoration: "none",
                    padding: "10px",
                    opacity: "10px",
                  }}
                  href="/"
                >
                  Logout
                </a>
                </div>
            </div>
          </div>
        </div>

        {/* column 2 */}
        <div className="column2"
          style={{
            backgroundColor: ""
          }}>
          <div class='odinMainContainer11'>
            {/* <!-- Left Sidebar Area --> */}
            <div class='odinLeftSidebarContainer1'>

              <div class="container">

                <img style={{ opacity: "60%" }} src={bgimage} />
                <div class="text-block">
                  <div class="wrap">
                    <div class="search">
                      <input style={{ marginTop: "100px" }} type="text" class="searchTerm" placeholder="Search" />

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Main Content Area --> */}
            <div class='odinMainContentContainer2'>

              <table>
                <tr>
                  <th>Name </th>
                  <th>Email</th>
                  <th>Blood Group</th>
                  <th>DOB</th>
                  <th>Phone no</th>
                  <th>Location</th>

                </tr>
                <tr>
                  <td>Sam</td>
                  <td>sam@gmail.com</td>
                  <td>O+ve</td>
                  <td>29/12/2002</td>
                  <td>9999999999</td>
                  <td>Cbe</td>
                </tr>
                <tr>
                  <td>Sam</td>
                  <td>sam@gmail.com</td>
                  <td>O+ve</td>
                  <td>29/12/2002</td>
                  <td>9999999999</td>
                  <td>Cbe</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonorInformation;


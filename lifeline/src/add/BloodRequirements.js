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

function BloodRequirements() {

  return (
    <div>
      <div className="row">
        {/* column 1 */},
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
                <a style={{ color: "black", textDecoration: "none", fontSize: "20px", textDecoration: "none", padding: "10px", opacity: "10px" }} href="/" >Profile</a><br /><br />

                <a style={{ color: "black", textDecoration: "none", fontSize: "20px", textDecoration: "none", padding: "10px", opacity: "10px" }} href="/Login/Hospitaldashboard/BloodRequest" >Blood Request</a><br /><br />
                <a style={{ color: "black", textDecoration: "none", fontSize: "20px", textDecoration: "none", padding: "10px", opacity: "10px" }} href="/" >Location Tracking</a><br /><br />
                <a style={{ color: "black", textDecoration: "none", fontSize: "20px", textDecoration: "none", padding: "10px", opacity: "10px" }} href="/" >Blood Bank Details</a><br /><br />
                <a style={{ color: "black", textDecoration: "none", fontSize: "20px", textDecoration: "none", padding: "10px", opacity: "10px" }} href="/" >Logout</a><br /><br />
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

              <table style={{marginLeft:"50px",marginTop:"80px"}}>
                <tr>
                  <th>Date </th>
                  <th>Hospital</th>
                  <th>Patient Name</th>
                  <th>Blood Group</th>
                  <th>Age</th>
                  <th>Units</th>
                  <th>Contact no</th>

                </tr>
                <tr>
                <td>29/12/2022</td>
                <td>GKNM</td>
                  <td>Sam</td>
                 
                  <td>O+ve</td>
                  <td>19</td>
                  <td>19</td>
                  <td>9999999999</td>
                 
                </tr>
                <tr>
                <td>29/12/2022</td>
                <td>GKNM</td>
                  <td>Sam</td>
                 
                  <td>O+ve</td>
                  <td>19</td>
                  <td>19</td>
                  <td>9999999999</td>
                 
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloodRequirements;


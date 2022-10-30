import logo1 from "./logo1.png";
import bgimage from "./dashboardimage.png";

import "./Hospitaldashboard.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

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
  const ref = collection(db, "hospital_blood_request");
  const [request, setRequest] = useState([]);
  function getDocuments() {
    return getDocs(ref);
  }
  useEffect(() => {
    getDataDocs();
  }, []);

  const getDataDocs = async () => {
    const data = await getDocuments();
    console.log(data.docs);
    setRequest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div>
      <div className="row">
        {/* column 1 */},
        <div
          className="column1"
          style={{
            backgroundColor: "#F0A8AE",
          }}
        >
          <div className="odinMainContainer">
            {/* <!-- Left Sidebar Area[upper] --> */}
            <div className="odinLeftSidebarContainer">
              <div className="rowlogo">
                <br />
                <div
                  className="columnlogo1"
                  style={{ backgroundColor: "#F0A8AE" }}
                >
                  <img style={{ width: "95%", height: "100%" }} src={logo1} />
                </div>
                <div className="columnlogo2" style={{ backgroundColor: "" }}>
                  <h1
                    style={{ fontSize: "23px", opacity: "80%", margin: "0px" }}
                  >
                    LifeLine
                  </h1>
                  <p style={{ margin: "0px" }}>
                    Save a Life
                    <br />
                    Give Blood
                  </p>
                </div>
              </div>
            </div>

            {/* Left Sidebar Area[Lower] */}
            <div className="odinMainContentContainer">
              <hr
                style={{
                  padding: "0px",
                  margin: "0px",
                  backgroundColor: "black",
                }}
              />
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
                  href="/Login/Hospitaldashboard/BloodRequest"
                >
                  Blood Request
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
                  Location Tracking
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
                  Blood Bank Details
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
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* column 2 */}
        <div
          className="column2"
          style={{
            backgroundColor: "",
          }}
        >
          <div className="odinMainContainer11">
            {/* <!-- Left Sidebar Area --> */}
            <div className="odinLeftSidebarContainer1">
              <div className="container">
                <img style={{ opacity: "60%" }} src={bgimage} />
                <div className="text-block">
                  <div className="wrap">
                    <div className="search">
                      <input
                        style={{ marginTop: "100px" }}
                        type="text"
                        class="searchTerm"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="odinMainContentContainer2">
                {/* <pre>{JSON.stringify(request, undefined, 2)}</pre> */}
                <table style={{ marginLeft: "50px", marginTop: "80px" }}>
                  <tr>
                    <th>Date </th>
                    <th>Hospital</th>
                    <th>Patient Name</th>
                    <th>Blood Group</th>
                    <th>Age</th>
                    <th>Units</th>
                    <th>Contact no</th>
                    <th>Status</th>
                  </tr>
                  {request.map((doc, index) => {
                    return (
                      <tr key={doc.id}>
                        <td>{doc.date}</td>
                        <td>{doc.hospitalName}</td>
                        <td>{doc.patientName}</td>

                        <td>{doc.bloodType}</td>
                        <td>{doc.age}</td>
                        <td>{doc.bloodUnitsReq}</td>
                        <td>{doc.contactNo}</td>
                        <td>{doc.status}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
            {/* <!-- Main Content Area --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloodRequirements;

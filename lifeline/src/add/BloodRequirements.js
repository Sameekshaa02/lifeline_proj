import logo1 from "./logo1.png";
import bgimage from "./dashboardimage.png";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

//import Axios from "axios";
const tableElements = {
  border: "1px solid black",
  borderCollapse: "collapse",
  columnWidth: "500px",
  paddingTop: "5px",
  paddingBottom: "5px",
  paddingLeft: "5px",
  paddingRight: "5px",
};

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
                <br /><br />
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
                <br /><br />
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
                <br /><br />
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
                <br /><br />
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
                <br /><br />
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
                </a><br /><br /><br /><br /></div>
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
                      <input style={{}} type="text" class="searchTerm" placeholder="Search" />

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Main Content Area --> */}
            <div class='odinMainContentContainer2'>
            <table style={{marginTop:"80px",marginLeft:"80px",tableLayout:"fixed",width:"900px"}}>
            <tr >
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
        </div>
      </div>
    </div>
  );
}

export default BloodRequirements;

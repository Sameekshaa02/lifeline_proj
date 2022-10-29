import "./Hospitaldashboard.css";
import logo1  from "./logo1.png";
import bar from "./Group 10.png";
import sq from "./Rectangle 11.png";
import drop from "./Vector.png";
//import { useState } from "react";
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

function StockAvailable() {

  return (
    <div>
      <div className="row">
       {/* column 1 */}
        <div className="column1" 
          style={{
            backgroundColor:"#F0A8AE"
          }}>
    
    <div class='odinMainContainer'>
  {/* <!-- Left Sidebar Area[upper] --> */}
  <div class='odinLeftSidebarContainer'>
    <div className="rowlogo">
    <br />
  <div className="columnlogo1" style={{backgroundColor:"#F0A8AE"}}>
     <img style={{width:"95%",height:"100%"}} src={logo1}/> 
  </div>
  <div class="columnlogo2" style={{backgroundColor:""}}>
   <h1 style={{fontSize:"23px",opacity:"80%",margin:"0px"}}>LifeLine</h1>
   <p style={{margin:"0px"}}>Save a Life<br/>Give Blood</p>
    
    
  </div>
</div>
  </div>
  
  {/* Left Sidebar Area[Lower] */}
  <div class='odinMainContentContainer'>
  <hr style={{ padding:"0px" , margin:"0px" , backgroundColor:"black" }}/>
  <div style={{paddingTop:"70px",paddingLeft:"40px"}}>
  <a style={{ color: "black", textDecoration: "none", fontSize: "20px", textDecoration: "none", padding:"10px",opacity:"10px"}} href="/" >Profile</a><br/><br/>
 
  <a style={{ color: "black", textDecoration: "none", fontSize: "20px", textDecoration: "none", padding:"10px",opacity:"10px"}} href="/" >Blood Request</a><br/><br/>
  <a style={{ color: "black", textDecoration: "none", fontSize: "20px", textDecoration: "none", padding:"10px",opacity:"10px"}} href="/" >Donor Information</a><br/><br/>
  <a style={{ color: "black", textDecoration: "none", fontSize: "20px", textDecoration: "none", padding:"10px",opacity:"10px"}} href="/" >Stock Available</a><br/><br/>
  <a style={{ color: "black", textDecoration: "none", fontSize: "20px", textDecoration: "none", padding:"10px",opacity:"10px"}} href="/" >Logout</a><br/><br/>
  </div>
  </div>
</div>
  </div>

  {/* column 2 */}
  <div className="column2" 
    style={{
      backgroundColor:""
    }}>
    <div class='odinMainContainer11'>
  {/* <!-- Left Sidebar Area --> */}
  <div class='odinLeftSidebarContainer1'>
  <div class="container">
  <img style={{position: "absolute",
width: "775px",
height: "250px",
left: "125px",
top: "25px",
}} src={bar}/>

{/*<!-- First box --> */}
<img style={{position: "absolute",
width: "215px",
height: "175px",
left: "125px",
top: "300px",
}} src={sq}/> 

<img style={{position: "absolute",
width: "42px",
height: "60px",
left: "150px",
top: "350px",
}} src={drop}/> 

<p
  style=
{{
  position: "absolute",
width: "351px",
height: "59px",
left: "220px",
top: "300px",

fontFamily: "Inter",
fontStyle: "normal",
fontWeight: "700",
fontSize: "30px",
color: "#333333"

}}>A+
</p>

<p
  style=
{{
  position: "absolute",
width: "351px",
height: "59px",
left: "220px",
top: "350px",
fontFamily: "Nanum Gothic, sans-serif",
fontStyle: "normal",
fontWeight: "700",
fontSize: "30px",
color: "#333333"

}}>43
</p>

{/*<!-- second box --> */}
<img style={{position: "absolute",
width: "215px",
height: "175px",
left: "400px",
top: "300px",
}} src={sq}/> 

<img style={{position: "absolute",
width: "42px",
height: "60px",
left: "425px",
top: "350px",
}} src={drop}/> 

<p
  style=
{{
  position: "absolute",
width: "351px",
height: "59px",
left: "495px",
top: "300px",

fontFamily: "Inter",
fontStyle: "normal",
fontWeight: "700",
fontSize: "30px",
color: "#333333"

}}>B+
</p>

<p
  style=
{{
  position: "absolute",
width: "351px",
height: "59px",
left: "495px",
top: "350px",
fontFamily: "Nanum Gothic, sans-serif",
fontStyle: "normal",
fontWeight: "700",
fontSize: "30px",
color: "#333333"

}}>43
</p>

{/*<!-- third box --> */}
<img style={{position: "absolute",
width: "215px",
height: "175px",
left: "675px",
top: "300px",
}} src={sq}/>

<img style={{position: "absolute",
width: "42px",
height: "60px",
left: "700px",
top: "350px",
}} src={drop}/>

<p
  style=
{{
  position: "absolute",
width: "351px",
height: "59px",
left: "770px",
top: "300px",

fontFamily: "Inter",
fontStyle: "normal",
fontWeight: "700",
fontSize: "30px",
color: "#333333"

}}>O+
</p>

<p
  style=
{{
  position: "absolute",
width: "351px",
height: "59px",
left: "770px",
top: "350px",
fontFamily: "Nanum Gothic, sans-serif",
fontStyle: "normal",
fontWeight: "700",
fontSize: "30px",
color: "#333333"

}}>43
</p>

{/*<!-- fourth box --> */}
<img style={{position: "absolute",
width: "215px",
height: "175px",
left: "125px",
top: "500px",
}} src={sq}/>

<img style={{position: "absolute",
width: "42px",
height: "60px",
left: "150px",
top: "550px",
}} src={drop}/> 

<p
  style=
{{
  position: "absolute",
width: "351px",
height: "59px",
left: "220px",
top: "500px",

fontFamily: "Inter",
fontStyle: "normal",
fontWeight: "700",
fontSize: "30px",
color: "#333333"

}}>AB+
</p>

<p
  style=
{{
  position: "absolute",
width: "351px",
height: "59px",
left: "220px",
top: "550px",
fontFamily: "Nanum Gothic, sans-serif",
fontStyle: "normal",
fontWeight: "700",
fontSize: "30px",
color: "#333333"

}}>43
</p>

{/*<!-- fifth box --> */}
<img style={{position: "absolute",
width: "215px",
height: "175px",
left: "400px",
top: "500px",
}} src={sq}/> 

<img style={{position: "absolute",
width: "42px",
height: "60px",
left: "425px",
top: "550px",
}} src={drop}/> 

<p
  style=
{{
  position: "absolute",
width: "351px",
height: "59px",
left: "495px",
top: "500px",

fontFamily: "Inter",
fontStyle: "normal",
fontWeight: "700",
fontSize: "30px",
color: "#333333"

}}>AB-
</p>

<p
  style=
{{
  position: "absolute",
width: "351px",
height: "59px",
left: "495px",
top: "550px",
fontFamily: "Nanum Gothic, sans-serif",
fontStyle: "normal",
fontWeight: "700",
fontSize: "30px",
color: "#333333"

}}>43
</p>

{/*<!-- sixth box --> */}
<img style={{position: "absolute",
width: "215px",
height: "175px",
left: "675px",
top: "500px",
}} src={sq}/>

<img style={{position: "absolute",
width: "42px",
height: "60px",
left: "700px",
top: "550px",
}} src={drop}/>

<p
  style=
{{
  position: "absolute",
width: "351px",
height: "59px",
left: "770px",
top: "500px",

fontFamily: "Inter",
fontStyle: "normal",
fontWeight: "700",
fontSize: "30px",
color: "#333333"

}}>O-
</p>

<p
  style=
{{
  position: "absolute",
width: "351px",
height: "59px",
left: "770px",
top: "550px",
fontFamily: "Nanum Gothic, sans-serif",
fontStyle: "normal",
fontWeight: "700",
fontSize: "30px",
color: "#333333"

}}>43
</p>

</div>
  </div>
  </div>
</div>
  </div>
</div>
  
  );
}

export default StockAvailable;
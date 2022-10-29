import "./bloodrequest.css";
function BloodRequest() {
    return (
        <div>
            <div className="row">
                <div className="left" >
                    <h2>Column 1</h2>
                    <p>Some text..</p>
                    <div className="c_r">
                        <div className="c1_r1">
                            <div className="c1_r1_c">
                                <div className="r1_c1" >
                                    <img src="logo1.png" />
                                </div>
                                <div className="r1_c2" >
                                    <h1>Lifeline </h1>
                                    <p>Give Blood</p>
                                </div>
                            </div>
                        </div>
                        <div className="c1_r2">
                            <h2 style={{ fontSize: "10px" }}>REQUEST FOR BLOOD </h2>
                            <p>Fill in the details to request blood from blood bank</p>
                        </div>
                        <div className="c1_r3">
                            <img style={{width: "400px",height: "280px"}} src="AB+.png" />
                        </div>
                        <div className="c1_r4">
                            <div className="container1">
                                <button id="btn1">Return to Dashboard</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right" >
                    <div className='odinMain'>
                        {/* Left Sidebar Area */}
                        <div class='odinLeftSidebar'>
                            <form>
                                <label className="field_name" for="pname">Patient Name /</label><br />
                                <input className="form_field" type="text" id="pname" name="pname" /><br />
                                <label className="field_name" for="btype">Blood Type</label><br />
                                <input className="form_field" type="text" id="btype" name="btype" /><br />
                                <label className="field_name" for="page">Patient Age</label><br />
                                <input className="form_field" type="text" id="page" name="page" /><br />
                                <label className="field_name" for="bunit">Blood Unit Required</label><br />
                                <input className="form_field" type="number" id="bunit" name="bunit" /><br />
                                <label className="field_name" for="cnum">Contact Number</label><br />
                                <input className="form_field" type="tel" id="cnum" name="cnum" /><br />
                            </form>

                        </div>
                        <div className="row2">
                            {/* <p style="font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 29px;
            
            color: #000000;">Blood Request Type</p><p>
                                    <hr style="position: absolute;
                                    width="860px"
                                    height="0px"
                                    left="718px;"
                                    top="744px;"
           color="black""/></p> */}
                                </div>

                               {/* Main Content Area  */}
                                <div className="odinMainContent">

                                    <div className="row1">
                                        <div className="left1" >
                                            <form >
                                                <input className="box" type="checkbox" id="emg" name="emergency" />
                                                    <label className="name" for="emg"> Emergency</label><br/>
                                                        <label className="sub_name" for="emg">Immediatley</label><br/>
                                                            <input className="box" type="checkbox" id="urg" name="urgent" value="Urgent"/>
                                                                <label className="name" for="urg"> Urgent</label><br/>
                                                                    <label className="sub_name" for="urg">Within 1 hour </label><br/>
                                                                    </form>
                                                                </div>
                                                                <div className="right1" >
                                                                    <form>
                                                                        <input className="box" type="checkbox" id="std" name="Standard"/>
                                                                            <label className="name" for="std">Standard</label><br />
                                                                                <label className="sub_name" for="std">Within 8 hours </label><br />
                                                                                    <input className="box" type="checkbox" id="gs" name="Grpandsave" />
                                                                                        <label className="name" for="gs">Group and Save</label><br />
                                                                                            <label className="sub_name" for="gs">Within 7 days </label><br />
                                                                                            </form>
                                                                                            <button className="submit" id="btn">Submit</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                         );
}
export default BloodRequest;

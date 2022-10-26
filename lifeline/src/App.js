import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Hospitaldashboard from "./add/Hospitaldashboard";
//import Dashboard from "./add/Dashboard";
import Login from "./add/Login";
import SignUp from "./add/SignUp";
import Loginbloodbank from "./add/Loginbloodbank";
import Blooddashboard from "./add/Blooddashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />

        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Login/SignUp" element={<SignUp />} />
        <Route
          exact
          path="/Login/Hospitaldashboard"
          element={<Hospitaldashboard />}
        />
        <Route
          exact
          path="/Loginbloodbank"
          element={<Loginbloodbank/>}
        />
        <Route
          exact
          path="/Loginbloodbank/Blooddashboard"
          element={<Blooddashboard/>}
        />
      </Routes>
    </Router>
  );
}

export default App;


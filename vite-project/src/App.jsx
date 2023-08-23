import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Home from "./component/Home";
import "./app.css";
import axios from "axios";
import UserContext from "./userContext/UserContext";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = "true";

function App() {
  return (
    <UserContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </UserContext>
  );
}

export default App;

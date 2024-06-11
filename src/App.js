
import React from "react";
import NavBar from "./route/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./route/Footer/Footer";
import "./style.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctor from "./components/Doctors/Doctors";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />}></Route>
            <Route path="/doctors/*" element={<Doctor />}></Route>
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import Screen1 from "./components/Screen1";
import Recaptcha from "./components/Recapcha"; 
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Screen4 from "./components/Screen4";
import Screen5 from "./components/Screen5";
import Screen6 from "./components/Screen6";
import Screen7 from "./components/Screen7";
import Screen8 from "./components/Screen8";
import Screen9 from "./components/Screen9";
import Screen10 from "./components/Screen10";
import Screen11 from "./components/Screen11";


const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/recapcha" element={<Recaptcha />} />
          <Route path="/screen1" element={<Screen />} />
          <Route path="/screen2" element={<Screen2 />} />
          <Route path="/screen3" element={<Screen3 />} />
          <Route path="/screen4" element={<Screen4 />} />
          <Route path="/screen5" element={<Screen5 />} />
          <Route path="/screen6" element={<Screen6 />} />
          <Route path="/screen7" element={<Screen7 />} />
          <Route path="/screen8" element={<Screen8 />} />
          <Route path="/screen9" element={<Screen9 />} />
          <Route path="/screen10" element={<Screen10 />} />
          <Route path="/screen11" element={<Screen11 />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

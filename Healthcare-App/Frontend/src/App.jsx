import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

import Homepage from "./components/Homepage";
import SecondPage from './components/SecondPage'; // Import SecondPage component


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/second-page" element={<SecondPage />} /> {/* Route for SecondPage */}
      </Routes>
    </Router>
  );
};

export default App;

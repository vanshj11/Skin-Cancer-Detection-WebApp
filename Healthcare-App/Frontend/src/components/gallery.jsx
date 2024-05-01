import { Image } from "./image";
import { Link } from 'react-router-dom'; // Import Link component from React Router
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Try it yourself</h2>
          <p>
          Experience our AI-powered skin cancer detection in action with a live demo. Upload your skin images and witness firsthand how our advanced technology accurately analyzes and identifies potential concerns. Take control of your skin health today with just a click of a button.
          </p>
        </div>
        <Link to="/second-page" className="btn btn-demo"> Live Demo</Link>{" "}
      </div>
    </div>
  );
};

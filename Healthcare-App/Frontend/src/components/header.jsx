import React from "react";

export const Header = (props) => {
  // Define the styles for the text
  const HeaderStyle = {
    color: "#383732", // Change this to the desired text color
  };
  const textStyle = {
    color: "#383732", // Change this to the desired text color
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 style={HeaderStyle}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p style={textStyle}>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

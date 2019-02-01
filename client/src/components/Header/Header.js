import React from "react";
import Background from "./images/printing.png";

const Header = () => (
  <div className="jumbotron jumbotron-fluid" style={{backgroundImage: `url(${Background})`,
  backgroundSize: `cover`,
  height: "40vh"}}>
    <div className="container">
     <h1 className= "text-center" style={{paddingTop: 40, color: "#000000"}}>
      New York Times Article Search
      </h1>
    </div>
  </div>
);

export default Header;

import React from "react";

const Footer = () => (
  <footer className="footer fixed-bottom" style={{height: "25px",backgroundColor: "#ffffff", opacity: 0.5}}>
      <div className="container footerContainer">
        <p className="text-center" style={{color: "#000000"}}>Copyright{('\u00A9')} <span>{
          new Date().getFullYear()}
          </span> Conor O'Neil</p>
      </div>
    </footer>
);

export default Footer;

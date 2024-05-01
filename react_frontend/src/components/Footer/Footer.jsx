import React from "react";
import "./Footer.css";

const Footer = () => {
  let date = new Date();
  return (
    <footer className="footer bg-dark flex flex-center" id="footer">
      <div className="container flex flex-center w-100">
        <div className=" footer-content ">
          <span className="text">
            &copy; {date.getFullYear().toString()} CareerPathwayFinder All
            Rights Reserved By{" "}
            <span className="text-color">Chan Myae Lwin (5SE-1014)</span>{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

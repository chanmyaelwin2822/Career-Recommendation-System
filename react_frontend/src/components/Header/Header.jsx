import React from "react";
import "./Header.css";
import { FaPaperPlane } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "../Particles";
import homebg from "../../assets/images/homebg2.png";
import "../Particles.scss";
// import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <header className="header page-bg py-5">
      <div class="animation-wrapper">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
      </div>

      {/* <Particles></Particles> */}
      <img src={homebg} alt="" className="home-bg" />

      <div className="header-container py-5">
        <div className="header-content d-flex flex-column">
          <h2 className="text-uppercase header-title">Explore Your Journey</h2>
          <p className="text-lead mt-0">
            Unlock your unique career pathway with comprehensive assessments,
            and recommendations, empowering to navigate the professional world
            with confidence and clarity.
          </p>
          <a href="/login" className="btn header-btn btn-sm">
            <FaPaperPlane /> <span>get started</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

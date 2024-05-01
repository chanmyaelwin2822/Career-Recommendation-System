import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardAdmin from "./components/board-admin.component";
import Portfolio from "./components/Portfolio/Portfolio";
import SurveyPage from "./components/Survey/SurveyPage";
import logo from "../src/assets/images/logo3.png"; // Import your logo image

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <div>
        <Navbar
          expand="lg"
          className="navbar navbar-dark ps-5 pe-5"
          fixed="top"
        >
          <Navbar.Brand href="/" className="logo flex">
            <img src={logo} alt="Logo" className="logo-image" />
            <span className="logo-name">CareerPathwayFinder</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>

              {/* <Nav.Link as={Link} to="/blog">
                Blogs
              </Nav.Link> */}

              {showAdminBoard && (
                <Nav.Link as={Link} to="/admin">
                  Admin Board
                </Nav.Link>
              )}
            </Nav>
            {currentUser ? (
              <Nav className="me-5">
                <NavDropdown
                  title={"Signed in as : " + currentUser.username}
                  id="basic-nav-dropdown"
                  className="me-3 down-centered"
                >
                  <NavDropdown.Item as={Link} to="/profile">
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={this.logOut} as={Link} to="/home">
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav className="me-5">
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Sign Up
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>

        <div className="bg-black" style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/blog" element={<Portfolio />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/careerprediction/:userid" element={<SurveyPage />} />
            <Route path="/admin" element={<BoardAdmin />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

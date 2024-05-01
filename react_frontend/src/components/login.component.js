import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "./Particles.scss";
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBRow,
} from "mdb-react-ui-kit";
import AuthService from "../services/auth.service";
import loginimg from "../assets/images/login.png";

import { withRouter } from "../common/with-router";
import "../App.css";
// import Particles from "./Particles";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.router.navigate("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <MDBContainer fluid className="p-3 page-bg container bg-overlay">
        {/* <Particles /> */}
        <div class="animation-wrapper">
          <div class="particle particle-1"></div>
          <div class="particle particle-2"></div>
        </div>

        <MDBRow className="mt-2 pt-3 ">
          <MDBCol col="4" md="6" className="ps-5 mt-3">
            <MDBCard
              className="mt-5 mx-auto px-3 bg-black text-white"
              style={{
                borderRadius: "1rem",
                width: "500px",
                minHeight: "550px",
                borderColor: "#7c00b5",
              }}
            >
              <MDBCardBody className="w-100 d-flex flex-column ">
                <div className="py-4 shadow-5 text-center">
                  <h2 className="fw-bold mb-2 text-center">Welcome!</h2>
                </div>
                <Form
                  onSubmit={this.handleLogin}
                  ref={(c) => {
                    this.form = c;
                  }}
                >
                  <div className="form-group input-margin">
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      validations={[required]}
                      placeholder="Enter Username"
                    />
                  </div>

                  <div className="form-group input-margin">
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required]}
                      placeholder="Enter Password"
                    />
                  </div>

                  <div className="form-group">
                    <button
                      className="w-100 btn p-2"
                      style={{
                        backgroundColor: "rgba(124, 0, 181,0.8)",
                        color: "white",
                      }}
                      disabled={this.state.loading}
                      size="lg"
                    >
                      <span>LOGIN</span>
                    </button>
                  </div>

                  {this.state.message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {this.state.message}
                      </div>
                    </div>
                  )}
                  <CheckButton
                    style={{ display: "none" }}
                    ref={(c) => {
                      this.checkBtn = c;
                    }}
                  />
                  <div className="form-group form-link">
                    <p>
                      Don't have an account?
                      <a href="/register">Sign Up</a>
                    </p>
                  </div>
                </Form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol col="10" md="6" className="pt-5">
            <img
              src={loginimg}
              class="img-fluid"
              alt="login"
              width={500}
              height={300}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withRouter(Login);

import React, { Component } from "react";

import UserService from "../services/user.service";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import "../App.css";
import "../common/common.css";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    console.log(this.state.content);
    return (
      <div className="">
        <Header />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import ProfileHome from "./Profile/Profilehome";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true });
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />;
    }

    const { currentUser } = this.state;

    return (
      <div className="container section-p text-white">
        {this.state.userReady ? (
          <div>
            <ProfileHome
              currentUserid={currentUser.id}
              currentUser={currentUser.username}
              accessToken={currentUser.accessToken}
            ></ProfileHome>
          </div>
        ) : null}
      </div>
    );
  }
}

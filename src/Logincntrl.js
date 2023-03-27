import React, { Component } from "react";
import Greeting from "./Greeting";
import Login from "./Login";
import Logout from "./Logout";

export default class Logincntrl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };
  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <Logout onClick={this.handleLogoutClick} />;
    } else {
      button = <Login onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn}></Greeting>
        {button}
        {this.props.hasMessage && <h1>you have unread msg</h1>}
        {this.props.credit > 0 ? (
          <h2>you have {this.props.credit} credit </h2>
        ) : (
          <h2>you have no credit</h2>
        )}
        {this.props.hasWarning?<h4>you have warning</h4>:null} 
      </div>//to stop rendering a component use null
    );
  }
}

//rcc to have react class

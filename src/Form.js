// function Form(props) {
//     return

// }
import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", desc: "", gender: "", acceptTerms: false };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: (event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value),
    });
    //  this.setState({ username: event.target.value });
  };
  handleChangeDesc = (event) => {
    this.setState({ desc: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // alert(this.state.username + this.state.desc);
  };
  onGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  onAcceptTerms = (event) => {
    this.setState({ acceptTerms: event.target.checked });
  };
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></input>
          </div>
          <div></div>
          <div>
            <label>Description</label>
            <textarea
              name="desc"
              value={this.state.desc}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div>
            <div>
              <select
                name="gender"
                value={this.state.gender}
                onChange={this.handleChange}
              >
                <option>Choose...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              Accept Terms
              <input
                type="checkbox"
                name="acceptTerms"
                checked={this.state.acceptTerms}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

//export default Form;

import React, { Component } from "react";

class TabSelector extends Component {
  handleChangeTab = event => {
    const buttonId = event.target.id;
    this.props.handleClick(buttonId);
  };

  render() {
    console.log(this.props.activeId);
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.handleChangeTab}
          className={this.props.activeId === "home" ? "active" : ""}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.handleChangeTab}
          className={this.props.activeId === "about" ? "active" : ""}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.handleChangeTab}
          className={this.props.activeId === "contact" ? "active" : ""}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;

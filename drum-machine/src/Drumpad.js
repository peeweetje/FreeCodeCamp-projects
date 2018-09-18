import React, { Component } from "react";

export default class Drumpad extends Component {
  handleSound = () => {
    this.audio.play();
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = e => {
    // Compare keyCode with keyPad. charCodeAt changes the keypad in a number.
    // For example, if we click the 'W' drumpad, e.keyCode will be 87, and this.props.keyPad will be "W".
    // charCodeAt() will convert the letter to the keyCode, so this.props.keyPad.charCodeAt() will be 87.
    if (e.keyCode === this.props.keyPad.charCodeAt()) {
      this.audio.play();
    }
  };

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleSound}>
        <h1>{this.props.keyPad}</h1>
        <audio
          id={this.props.keyPad}
          className="clip"
          src={this.props.src}
          ref={ref => (this.audio = ref)}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

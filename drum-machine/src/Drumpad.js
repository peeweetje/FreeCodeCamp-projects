import React, { Component } from "react";

export default class Drumpad extends Component {
  handleSound = () => {
    this.audio.play();
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
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleClick = () => {
    this.audio.play();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Drum machine</h1>
        </header>
        <div className="container" id="drum-machine">
          <div id="display" />
          <div className="drum-pad" id="Q" onClick={this.handleClick()}>
            <p>Q</p>
            <audio
              ref={ref => (this.audio = ref)}
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              className="clip"
              id="Q"
            />
          </div>
          <div className="drum-pad" id="w" onClick={this.handleClick()}>
            <p>W</p>
            <audio
              ref={ref => (this.audio = ref)}
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              className="clip"
              id="w"
            />
          </div>
          <div className="drum-pad" id="e">
            <p>E</p>
            <audio
              ref={ref => (this.audio = ref)}
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              className="clip"
              id="e"
            />
          </div>
          <div className="drum-pad" id="a">
            <p>A</p>
            <audio
              ref={ref => (this.audio = ref)}
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              className="clip"
              id="a"
            />
          </div>
          <div className="drum-pad" id="s">
            <p>S</p>
            <audio
              ref={ref => (this.audio = ref)}
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              className="clip"
              id="s"
            />
          </div>
          <div className="drum-pad" id="d">
            <p>D</p>
            <audio
              ref={ref => (this.audio = ref)}
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              className="clip"
              id="d"
            />
          </div>
          <div className="drum-pad" id="z">
            <p>Z</p>
            <audio
              ref={ref => (this.audio = ref)}
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              className="clip"
              id="z"
            />
          </div>
          <div className="drum-pad" id="x">
            <p>X</p>
            <audio
              ref={ref => (this.audio = ref)}
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              className="clip"
              id="x"
            />
          </div>
          <div className="drum-pad" id="c">
            <p>C</p>
            <audio
              ref={ref => (this.audio = ref)}
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              className="clip"
              id="c"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

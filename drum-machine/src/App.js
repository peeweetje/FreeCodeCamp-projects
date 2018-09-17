import React, { Component } from "react";
import Drumpad from "./Drumpad";
import "./App.css";

const drumdata = [
  {
    keyCode: 81,
    keyPad: "Q",
    id: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyPad: "W",
    id: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyPad: "E",
    id: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyPad: "A",
    id: "Heater-4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyPad: "S",
    id: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyPad: "D",
    id: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyPad: "Z",
    id: "Kick-n'-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyPad: "X",
    id: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyPad: "C",
    id: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Drum machine"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
        </header>

        <div className="container" id="drum-machine">
          <div id="display" />
          <div id="drum-pad">
            {drumdata.map(data => (
              <Drumpad
                key={data.id}
                id={data.id}
                keyPad={data.keyPad}
                src={data.src}
              />
            ))}
            ;
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Muse from "./openbci";

import "./styles.css";
import "./stylesheets/index.styles.css";

import MusicPlayer from "./components/MusicPlayer";
import YerkesDodsonInfo from "./components/YerkesDodsonInfo";
var stressLevelNormal = true;
var elec2, elec3, elec16, elec17 = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };

    this.addScript = src => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.type = "text/javascript";
      document.head.appendChild(script);
    };
  }
  
  componentDidMount() {
    // BCIDevice
    this.addScript(
      "https://drive.google.com/uc?export=view&id=1jG7w2D0NZIAFJYgtd25FYHT6jcoOY9FJ"
    );

    //bci.jc
    this.addScript("https://cdn.jsdelivr.net/npm/bcijs@1.5.2/dist/bci.min.js");
  }

  updateData = recentData => {
    const newData = recentData;
    this.state.data = newData;
    if (newData[2] != null) elec2 = newData[2][newData[2].length - 1];
    if (newData[3] != null) elec3 = newData[3][newData[3].length - 1];
    if (newData[16] != null) elec16 = newData[16][newData[16].length - 1];
    if (newData[17] != null) elec17 = newData[17][newData[17].length - 1];
    
    console.log(elec2, elec3, elec16, elec17);

  };

  render() {
    return (<div className="App">
      <div className="header-background">
        <div className="header-text">In The Zone</div>
      </div>
      <div className={ stressLevelNormal ? 'normal' + ' app-body' : 'not-normal' + ' app-body'}>
        <h2>Start playing to see some magic happen!</h2>
        <h2>{this.state.data}</h2>
        <button onClick={() => Muse.startMuse(this.updateData)}>Connect</button>
        <YerkesDodsonInfo/>
        <MusicPlayer/>
      </div>
    </div>);
  }
};

export default App
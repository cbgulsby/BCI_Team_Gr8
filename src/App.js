import React from "react";

import "./styles.css";
import "./stylesheets/index.styles.css";

import MusicPlayer from "./components/MusicPlayer";
import YerkesDodsonInfo from "./components/YerkesDodsonInfo";
var stressLevelNormal = true;

function App() {
  return (
    <div className="App">
      <div className="header-background">
        <div className="header-text">In The Zone</div>
      </div>
      <div className={ stressLevelNormal ? 'normal' + ' app-body' : 'not-normal' + ' app-body'}>
        <h2>Start playing to see some magic happen!</h2>
        <YerkesDodsonInfo/>
        <MusicPlayer/>
      </div>
    </div>
  );
}

export default App
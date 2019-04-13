import React from "react";

import { Line, Bar } from "react-chartjs-2";

import "./styles.css";
import "./stylesheets/index.css";
import "./components/music_player";

var stressLevelNormal = true;

function App() {
  return (
    <div className="App">
      <div className="header-background">
        <div className="header-text">In The Zone</div>
      </div>
      <div className={ stressLevelNormal ? 'normal' + ' app-body' : 'not-normal' + ' app-body'}>
        <h2>Start playing to see some magic happen!</h2>
        <img src={'http://integrativecancer.org/wp-content/uploads/Yerkes-Dodson-curve-1024x600.png'}/>
      </div>
    </div>
  );
}

export default App
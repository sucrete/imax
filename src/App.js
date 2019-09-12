import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header>
      <h1>tester</h1>
      <div class="container">
        <div class="blob"> 🀐㎇ ╳⏧⚜⚜</div>
        <div class="blob2">㎭㎉╍▔▀╏╻▍ ▏</div>
        <div class="cary"> 𝕮𝖔𝖗𝖓𝖇𝖆𝖗𝖓 ░▒▓▓▉▊▜</div>
        <div class="theBiz"></div>
      </div> */}
      <Card></Card>
      <svg version="1.1" id="layer">
        <defs>
          <filter id="watercolor">
            <feTurbulence
              result="TURBULENCE"
              baseFrequency=".59"
              numOctaves="30"
              seed="200"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="TURBULENCE"
              scale="120"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Name from "./Name.js";
import json from "./got.json";
import Season from "./Season";
import Number from "./Number";
import Image from "./Image";
import Summary from "./Summary";
import Selector from "./Selector";

function App() {
  return (
    <div className="App">
      <Selector/>
      {getData()}
    </div>
  );
}

const getData = () => {
  return json.map(episodeInfo => {
    return (
      <div>
        <Name data={episodeInfo} />
        <Season data={episodeInfo} />
        <Number data={episodeInfo} />
        <Image data={episodeInfo} />
        <Summary data={episodeInfo} />
      </div>
    );
  });
};

// const App = <div className="App">{getData()}</div>;

// (function() {
//   console.log("sdasdasdasda");
//   ReactDOM.render(App, document.getElementById("root"));
// })();

export default App;

// line 10 is importing .json named as data

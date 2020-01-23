import React, { Component } from "react";
import game from "./got.json";

class Selector extends Component {
  render() {
    console.log(game);
    return (
      <select>
        <option>Jump to an episode: </option>
        {game.map(episode => {
          return <option>{episode.name}</option>;
        })}
      </select>
    );
  }
}
export default Selector;

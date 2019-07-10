// Library imports
import React from "react";
// Action imports
import { selectSong } from "../actions";
// Component imports
import SongList from "./SongList";

const App = () => {
  return (
    <div className="ui grid container">
      <div className="row">
        <div className="eight wide column">
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;

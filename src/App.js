//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      <Scoreboard awayScore={awayScore} homeScore={homeScore} />
      <Buttons
        setAwayScore={setAwayScore}
        awayScore={awayScore}
        setHomeScore={setHomeScore}
        homeScore={homeScore}
      />
    </div>
  );
}

export default App;

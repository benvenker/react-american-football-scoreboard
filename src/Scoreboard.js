import React, { useState, useEffect } from "react";
import BottomRow from "./BottomRow";

const Scoreboard = ({ homeScore, awayScore }) => {
  let minutes = 15;
  let seconds = 59;
  const [minutesLeft, setMinutesLeft] = useState(minutes);
  const [secondsLeft, setSecondsLeft] = useState(seconds);
  const [timeLeft, setTimeLeft] = useState(`15:00`);

  const startTimer = (duration) => {
    let timer = duration,
      minutes,
      seconds;

    setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setTimeLeft(`${minutes}:${seconds}`);

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer(900);
  }, []);

  return (
    <section className="scoreboard">
      <div className="topRow">
        <div className="home">
          <h2 className="home__name">Lions</h2>

          {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

          <div className="home__score">{homeScore}</div>
        </div>
        <div className="timer">{timeLeft}</div>
        <div className="away">
          <h2 className="away__name">Tigers</h2>
          <div className="away__score">{awayScore}</div>
        </div>
      </div>
      <BottomRow />
    </section>
  );
};

export default Scoreboard;

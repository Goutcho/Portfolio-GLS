// Countdown.js
import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState((new Date(targetDate).getTime() - new Date().getTime()) / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft <= 1) {
          clearInterval(interval);
          return 0;
        }
        return timeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    return [hours, minutes, seconds].map((unit) => (unit < 10 ? `0${unit}` : unit)).join(" : ");
  };

  return (
    <div class="time-container">
      <h1 class="title-countdown">Compte à rebours</h1>
      <p class="text-countdown">* Temps avant la fin de mon contrat actuel.</p>
      <h2 class="countdown">Heures // {formatTime(timeLeft)}</h2>
    </div>
  );
};

export default Countdown;

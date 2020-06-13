import React from "react";
import "./time.style.scss";

import { useState, useEffect } from "react";

const Time = () => {
  /* ====================== React Hooks for real time ====================== */
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();

      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

      let second = today.getSeconds();
      let minute = today.getMinutes();
      let hour = today.getHours();

      if (today.getSeconds() < 10) {
        second = "0" + today.getSeconds().toString();
      }

      if (today.getMinutes() < 10) {
        minute = "0" + today.getMinutes().toString();
      }
      if (today.getHours() < 10) {
        hour = "0" + today.getHours().toString();
      }

      const time = hour + ":" + minute + ":" + second;

      setCurrentTime(() => [date, time]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-block">
      <p className="date">{currentTime[0]}</p>
      <p className="time">{currentTime[1]}</p>
    </div>
  );
};

export default Time;

import React, { useState, useEffect, useContext } from "react";
import { findTimeZone, getZonedTime } from "timezone-support";
import { Store } from "../App";

const timeZon = [
  "Asia/Hong_Kong",
  "America/Havana",
  "Europe/Berlin",
  "Asia/Singapore",
  "Europe/Moscow"
];

//To get the full timezone object of each sample city
const CitiesClock = () =>
  timeZon.map(zone => {
    return getZonedTime(new Date(), findTimeZone(zone));
  });

export default function Clock() {
  const [date, setDate] = useState([]);
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(CitiesClock());
  }

  return <div>{JSON.stringify(date, null, 2)}</div>;
}

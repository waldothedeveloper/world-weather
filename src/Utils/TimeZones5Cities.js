import React from "react";
import { findTimeZone, getZonedTime } from "timezone-support";

const berlin = findTimeZone("Europe/Berlin");

// From a native Date object
const nativeDate = new Date();
const berlinTime = getZonedTime(nativeDate, berlin);

console.log(berlinTime);

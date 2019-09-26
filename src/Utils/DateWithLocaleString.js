// I would need to create some sort of json dictionary to
// organize which cities are withing the different USA timezones...damn it

export function DatesLocale(unix) {
  let currentDate = null;
  const options = {
    timeStyle: "short"
    //use this line below if you want to know the name of the timezone
    // timeZoneName: "long"
  };
  //using try catch becuase locales are not yet implemented in every browser
  try {
    currentDate = new Date(unix * 1000).toLocaleTimeString("en-EN", options);
  } catch (error) {
    return error instanceof RangeError;
  }
  return currentDate;
}

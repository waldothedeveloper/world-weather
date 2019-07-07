import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { customMaps } from "../Utils/styledGoogleMaps";

export const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(6)}px`
  }
}));

const addMarkers = links => map => {
  const marker = new window.google.maps.Marker({
    map,
    position: links.coords,
    title: links.title
  });
  return marker;
};

function Map({ options, onMount, className }) {
  const classes = useStyles();
  const props = { ref: useRef(), className };

  const onLoad = () => {
    const styledMap = new window.google.maps.StyledMapType(customMaps, {
      name: "Custom Map"
    });

    const map = new window.google.maps.Map(props.ref.current, options);
    map.mapTypes.set("styled_map", styledMap);
    map.setMapTypeId("styled_map");
    onMount && onMount(map);
  };

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement(`script`);
      script.type = `text/javascript`;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        process.env.REACT_APP_GOOGLE_MAPS_API
      }`;

      const headScript = document.getElementsByTagName(`script`)[0];
      headScript.parentNode.insertBefore(script, headScript);

      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  });

  return (
    <div className={classes.root}>
      <div {...props} style={{ height: `400px` }} />
    </div>
  );
}

//Cities in this request:
// New York(5128638)  -- coords: 40.711737, -74.008418
// San Francisco(5391959)  -- coords:
// Los Angeles(5368361)  -- coords:
// Miami(4164138)  -- coords:
// Chicago(4887398)  -- coords:
// Seattle(5809844)  -- coords:
// Boston(4183849)  -- coords:
// Philadelphia(4560349)  --coords:
// Denver(5419384)  -- coords:

const links = {
  coords: {
    lat: 40.711737,
    lng: -74.008418
  },
  title: "New York"
};

Map.defaultProps = {
  options: {
    center: { lat: 40.711737, lng: -74.008418 },
    zoom: 12,
    mapTyeControlOptions: {
      mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"]
    }
  },
  onMount: addMarkers(links)
};

export default Map;

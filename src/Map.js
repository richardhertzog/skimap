import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 1366,
    height: 768,
    latitude: 40.692364680210034,
    longitude: -98.62088812109194,
    zoom: 3.801606750508365,
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    />
  );
}

export default Map;


import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";

// let Markers = [{ lat: -6.402484, lng: 106.794243 }];

const Map = withScriptjs(
  withGoogleMap(({ isMarkerShown }) => {
    const [markers, setMarkers] = React.useState([
      { lat: -6.402484, lng: 106.794243 }
    ]);
    return (
      <div>
        <h1>Map</h1>
        <GoogleMap
          defaultZoom={11}
          defaultCenter={{ lat: -6.402484, lng: 106.794243 }}
          onClick={({ latLng }) => {
            // const newMarkers = [...markers];
            // newMarkers.push({
            //   lat: latLng.lat(),
            //   lng: latLng.lng()
            // });
            setMarkers([{ lat: latLng.lat(), lng: latLng.lng() }]);
          }}
        >
          {isMarkerShown &&
            markers.map(marker => (
              <Marker position={{ lat: marker.lat, lng: marker.lng }} />
            ))}
        </GoogleMap>
      </div>
    );
  })
);

export default Map;

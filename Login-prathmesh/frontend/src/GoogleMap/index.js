import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "57vw",
  height: "60vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB5DNSeJ6ifkVlyhP1XeDzJga6XCWioiZk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);

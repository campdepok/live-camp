import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Component/Home";
import Map from "./Component/Map";
import Live from "./Component/Live";
import { AuthProvider } from "./Context/auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={Home} />
        <Route
          path="/map"
          render={props => (
            <Map
              {...props}
              isMarkerShown
              googleMapURL={process.env.REACT_APP_MAP_URL}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          )}
        />
        <Route path="/live" component={Live} />
      </Router>
    </AuthProvider>
  );
}

export default App;

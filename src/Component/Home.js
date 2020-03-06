import React from "react";

const Home = ({ history }) => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => history.push("/map")}>Map</button>
      <br />
      <button onClick={() => history.push("/live")}>Live</button>
    </div>
  );
};

export default Home;

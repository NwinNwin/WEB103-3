import React from "react";
import { useRoutes, Link } from "react-router-dom";
import Locations from "./pages/Locations";
import LocationEvents from "./pages/LocationEvents";
import MusicEvents from "./pages/MusicEvents";
import "./App.css";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Locations />,
    },
    {
      path: "/redrocks",
      element: <LocationEvents index={0} />,
    },
    {
      path: "/royalalberthall",
      element: <LocationEvents index={1} />,
    },
    {
      path: "/staplescenter",
      element: <LocationEvents index={2} />,
    },
    {
      path: "/sydneyoperahouse",
      element: <LocationEvents index={3} />,
    },
    {
      path: "/musicEvents",
      element: <MusicEvents />,
    },
  ]);

  return (
    <div className="app">
      <header className="main-header">
        <h1>UnityGrid Plaza</h1>

        <div className="header-buttons">
          <Link to="/" role="button">
            Home
          </Link>
          <Link to="/musicEvents" role="button">
            Music Events
          </Link>
        </div>
      </header>

      <main>{element}</main>
    </div>
  );
};

export default App;

import React from "react";
import { AppWrapper } from "./context";
import { Jumbo } from "./components/molecules/";
import { Slider, MovieRoster } from "./components/organisms";

import "./App.css";

function App() {
  return (
    <AppWrapper>
      <div className="App">
        <Slider />
        <Jumbo />

        <MovieRoster />
      </div>
    </AppWrapper>
  );
}

export default App;

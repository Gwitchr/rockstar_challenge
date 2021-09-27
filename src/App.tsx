import React from "react";
import { AppWrapper } from "./context";
import { Jumbo } from "./components/molecules/";
import { Slider, MovieRoster } from "./components/organisms";

function App() {
  return (
    <AppWrapper>
      <div>
        <Slider />
        <Jumbo />

        <MovieRoster />
      </div>
    </AppWrapper>
  );
}

export default App;

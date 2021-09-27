import React from "react";
import { Jumbo } from "./components/molecules/";
import { AppWrapper } from "./context";

import "./App.css";

function App() {
  return (
    <AppWrapper>
      <div className="App">
        <Jumbo />
      </div>
    </AppWrapper>
  );
}

export default App;

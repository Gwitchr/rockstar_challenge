import React from "react";
import { SearchBar } from "./";

function Jumbo() {
  return (
    <section
      className="flex flex-col justify-center items-center text-center"
      style={{
        background: `url(https://source.unsplash.com/P2wLo_PzHjU)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "40vh",
      }}
    >
      <h3 className="text-white text-3xl md:text-6xl mb-10">
        Find your favourite movies locally
      </h3>
      <SearchBar />
    </section>
  );
}

export default Jumbo;

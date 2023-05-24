import React from "react";
import Tile from "./Tile";

function Tiles() {
  return (
    <div className="m-5">
      Blogs
      <div className="flex flex-wrap justify-evenly sm:grid-cols-3 md:grid-flow-col-4">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </div>
  );
}

export default Tiles;

import React from "react";
import { Link } from "react-router-dom";

function Tile() {
  return (
    <Link to="/" className="border border-black w-56 m-2 h-96">
      <img
        alt="alt"
        src="https://images.unsplash.com/photo-1684864115275-bb3c2f5928fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      />
      <div className="p-2 flex flex-col flex-start h-auto">
        <h1 className="text-2xl">Title</h1>
        <h2 className="text-sm">5/24/2023</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <button> Read More </button>
      </div>
    </Link>
  );
}

export default Tile;

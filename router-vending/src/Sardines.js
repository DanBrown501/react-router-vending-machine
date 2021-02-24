import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function Sardines() {
  return (
    <div
      className="Sardines"
      >
      <Message>
        <h1>you don't eat the sardines. the sardines, they eat you!</h1>
        <h1><Link to="/">go back</Link></h1>
      </Message>
    </div>
  );
}

export default Sardines;

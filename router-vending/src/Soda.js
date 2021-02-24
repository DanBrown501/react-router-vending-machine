import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function Soda() {
  return (
    <div className="Soda">
      <Message>
        <h1>OMG SUGARRRRR</h1>
        <h1><Link to="/">go back</Link></h1>
      </Message>
    </div>
  );
}

export default Soda;

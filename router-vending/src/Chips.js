import React, { useState } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function Chips() {

  const [bags, setBags] = useState([]);

  function handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setBags(prevBags => [...prevBags, { x, y }]);
  }

       
  return (
    <div className="Chips">
      <Message>
        <h1>bags eaten: {bags.length}</h1>
        <button onClick={handleClick}>nom nom nom</button>
        <h1>
          <Link to="/">go back</Link>
        </h1>
      </Message>
    </div>
  );
}

export default Chips;

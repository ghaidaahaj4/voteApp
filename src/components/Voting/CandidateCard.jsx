// CandidateCard.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";

export default function CandidateCard() {
  const [buttonStatus, setStatus] = useState(true);

  function handleClick() {
    setStatus((prev) => !prev);
  }

  return (
    <div>
      <FontAwesomeIcon icon={faFish} />
      <h1>NAME</h1>
      {buttonStatus ? (
        <button onClick={handleClick}>Vote</button>
      ) : (
        <button onClick={handleClick}>You voted</button>
      )}
    </div>
  );
}

/* eslint-disable react/prop-types */
import React from "react";
import { faFish, faCat, faDog, faCow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function PartyCardInDash({ votes }) {
  const parities = {
    1: [faFish, "Fish Party"],
    2: [faCat, "Cat Party"],
    3: [faDog, "Dog Party"],
    4: [faCow, "Cow Party"],
  };
  return (
    <div className="PartyResults">
      {votes.map((vote, index) => (
        <div className="results" key={index}>
          <FontAwesomeIcon className="icon" icon={parities[index + 1][0]} />
          <h1>{parities[index + 1][1]} </h1>
          <h2> {vote} votes </h2>
        </div>
      ))}
    </div>
  );
}

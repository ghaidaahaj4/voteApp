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
    <div>
      <ul>
        {votes.map((vote, index) => (
          <li className="results" key={index}>
            <FontAwesomeIcon className="icon" icon={parities[index + 1][0]} />
            {parities[index + 1][1]}-{vote}
          </li>
        ))}
      </ul>
    </div>
  );
}

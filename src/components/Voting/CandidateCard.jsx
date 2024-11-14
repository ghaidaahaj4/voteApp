/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function CandidateCard({ voted, handle }) {
  const [buttonStatus, setStatus] = useState(0);

  function handleClick() {
    setStatus((prev) => {
      console.log(voted);
      if (prev === 0) return 1;
      if (prev === 1) {
        handle(true);
        return 2;
      }
    });
  }

  return (
    <div>
      <FontAwesomeIcon icon={faFish} />
      <h1>NAME</h1>
      {buttonStatus === 0 && !voted && (
        <button onClick={handleClick}>Vote</button>
      )}
      {buttonStatus === 1 && !voted && (
        <button onClick={handleClick}>Are You Sure</button>
      )}
      {voted && <button>Done</button>}
    </div>
  );
}

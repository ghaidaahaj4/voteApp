/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function CandidateCard({
  index,
  voted,
  handle,
  middle,
  handleMiddle,
  handleCurrent,
  currentVote,
}) {
  const [buttonStatus, setStatus] = useState(0);

  function handleClick() {
    setStatus((prev) => {
      if (prev === 0) {
        return 1;
      }
      if (prev === 1) {
        return 2;
      }
    });

    if (buttonStatus === 0) {
      handleMiddle(true);
    }
    if (buttonStatus === 1) {
      handle(true);
    }
    handleCurrent(index);
  }

  return (
    <div>
      <FontAwesomeIcon icon={faFish} />
      <h1>NAME</h1>

      {!middle && <button onClick={handleClick}>Vote</button>}
      {middle && !voted && <button onClick={handleClick}>Are You Sure</button>}
      {voted && <button>Done</button>}
      {buttonStatus === 1 && !voted && index === currentVote && (
        <p>HERE{index}</p>
      )}
    </div>
  );
}

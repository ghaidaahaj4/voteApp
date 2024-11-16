/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";

export default function CandidateCard({
  index,
  voted,
  handle,
  handleCurrent,
  currentVote,
}) {
  function handleClick(final) {
    if (final === "FINAL") {
      handle(true);
    } else {
      handleCurrent(index);
    }
  }

  return (
    <div>
      <FontAwesomeIcon icon={faFish} />
      <h1>NAME</h1>
      {index !== currentVote && !voted && (
        <button onClick={() => handleClick()}>Vote</button>
      )}
      {voted && <button disabled>Done</button>}
      {index === currentVote && !voted && <p>Are You Sure?</p>}
      {index === currentVote && voted && <p>Your Vote</p>}
      {index === currentVote && !voted && (
        <button disabled={voted} onClick={() => handleClick("FINAL")}>
          Yes
        </button>
      )}
    </div>
  );
}

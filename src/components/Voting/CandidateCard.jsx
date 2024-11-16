/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../App.css";

export default function CandidateCard({
  index,
  voted,
  handle,
  handleCurrent,
  currentVote,
  icon,
  name,
}) {
  function handleClick(final) {
    if (final === "FINAL") {
      handle(true);
    } else {
      handleCurrent(index);
    }
  }

  return (
    <div className="CandidateCard">
      <FontAwesomeIcon className="icon" icon={icon} />
      <h1>{name}</h1>
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

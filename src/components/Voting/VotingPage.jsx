/* eslint-disable no-undef */
import CandidateCard from "./CandidateCard";
import { useState } from "react";

export default function VotingPage() {
  const [voted, setIsVoted] = useState(false);
  const [currentVote, setCurrentVote] = useState(0);

  function handleVoteFinalClick() {
    setIsVoted(true);
  }

  function handleCurrent(index) {
    setCurrentVote(index);
  }

  return (
    <>
      <h2>Hello User</h2>
      <div className="VotingPage">
        <CandidateCard
          index={1}
          voted={voted}
          handle={handleVoteFinalClick}
          handleCurrent={handleCurrent}
          currentVote={currentVote}
        />
        <CandidateCard
          index={2}
          voted={voted}
          handle={handleVoteFinalClick}
          handleCurrent={handleCurrent}
          currentVote={currentVote}
        />
        <CandidateCard
          index={3}
          voted={voted}
          handle={handleVoteFinalClick}
          handleCurrent={handleCurrent}
          currentVote={currentVote}
        />
        <CandidateCard
          index={4}
          voted={voted}
          handle={handleVoteFinalClick}
          handleCurrent={handleCurrent}
          currentVote={currentVote}
        />
      </div>
    </>
  );
}

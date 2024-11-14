/* eslint-disable no-undef */
import CandidateCard from "./CandidateCard";
import { useState } from "react";

export default function VotingPage() {
  const [middleVote, setMiddleVote] = useState(false);
  const [voted, setIsVoted] = useState(false);
  function handleVoteFinalClick() {
    setIsVoted(true);
  }
  function handleMiddle() {
    setMiddleVote(true);
  }
  return (
    <>
      <h2>Hello User</h2>
      <div className="VotingPage">
        <CandidateCard
          voted={voted}
          handle={handleVoteFinalClick}
          middle={middleVote}
          handleMiddle={handleMiddle}
        />
        <CandidateCard
          voted={voted}
          handle={handleVoteFinalClick}
          middle={middleVote}
          handleMiddle={handleMiddle}
        />
        <CandidateCard
          voted={voted}
          handle={handleVoteFinalClick}
          middle={middleVote}
          handleMiddle={handleMiddle}
        />
        <CandidateCard
          voted={voted}
          handle={handleVoteFinalClick}
          middle={middleVote}
          handleMiddle={handleMiddle}
        />
      </div>
    </>
  );
}

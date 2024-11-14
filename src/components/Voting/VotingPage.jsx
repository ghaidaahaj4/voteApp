/* eslint-disable no-undef */
import CandidateCard from "./CandidateCard";
import { useState } from "react";

export default function VotingPage() {
  const [voted, setIsVoted] = useState(false);
  function handleVoteFinalClick() {
    setIsVoted(true);
  }
  return (
    <>
      <h2>Hello User</h2>
      <div className="VotingPage">
        <CandidateCard voted={voted} handle={handleVoteFinalClick} />
        <CandidateCard voted={voted} handle={handleVoteFinalClick} />
        <CandidateCard voted={voted} handle={handleVoteFinalClick} />
        <CandidateCard voted={voted} handle={handleVoteFinalClick} />
      </div>
    </>
  );
}

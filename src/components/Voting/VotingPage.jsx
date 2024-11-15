/* eslint-disable no-undef */
import CandidateCard from "./CandidateCard";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { doSignOut } from "../Context/AuthContext/auth";
import { useNavigate } from "react-router-dom";

export default function VotingPage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log(currentUser.email);
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
      <h2>Hello,</h2>
      <h1> {currentUser.email}</h1>
      <button
        onClick={() => {
          doSignOut();
          navigate("/");
        }}
      >
        LogOut
      </button>
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

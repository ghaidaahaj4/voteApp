// VotingPage.js
import React from "react";
import CandidateCard from "./CandidateCard";

export default function VotingPage() {
  return (
    <>
      <h2>Hello User</h2>
      <div className="VotingPage">
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
      </div>
    </>
  );
}

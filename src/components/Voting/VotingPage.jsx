/* eslint-disable no-undef */
import CandidateCard from "./CandidateCard";
import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { doSignOut } from "../Context/AuthContext/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function VotingPage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log(currentUser.email);

  const [voted, setIsVoted] = useState(false);
  const [currentVote, setCurrentVote] = useState(0);

  // Fetch vote data when the component loads
  useEffect(() => {
    async function fetchVoteData() {
      try {
        const userVoteRef = doc(db, "votes", currentUser.email);
        const voteDoc = await getDoc(userVoteRef);

        if (voteDoc.exists()) {
          const voteData = voteDoc.data();
          setIsVoted(voteData.voted || false);
          setCurrentVote(voteData.currentVote || 0);
          console.log("Fetched vote data:", voteData);
        } else {
          console.log("No existing vote data for user:", currentUser.email);
        }
      } catch (error) {
        console.error("Error fetching vote data:", error.message);
      }
    }
    if (currentUser?.email) {
      fetchVoteData();
    }
  }, [currentUser]);

  async function handleVoteFinalClick() {
    try {
      setIsVoted(true);
      const userVoteRef = doc(db, "votes", currentUser.email);
      console.log("Saving vote for:", currentUser.email, "Vote:", currentVote);
      await setDoc(userVoteRef, {
        voted: true,
        currentVote,
        timestamp: new Date(),
      });
      console.log("Vote saved successfully!");
    } catch (error) {
      console.error("Error saving vote:", error.message);
    }
  }

  async function handleCurrent(index) {
    try {
      setCurrentVote(index);
      const userVoteRef = doc(db, "votes", currentUser.email);
      console.log("Saving vote for:", currentUser.email, "Vote:", currentVote);
      await setDoc(userVoteRef, {
        voted,
        currentVote: index,
        timestamp: new Date(),
      });
      console.log("Vote saved successfully!");
    } catch (error) {
      console.error("Error saving vote:", error.message);
    }
  }

  return (
    <>
      <h2>Hello,</h2>
      <h1>{currentUser.email}</h1>
      <button
        onClick={() => {
          doSignOut();
          navigate("/");
        }}
      >
        LogOut
      </button>
      <div className="VotingPage">
        {[1, 2, 3, 4].map((index) => (
          <CandidateCard
            key={index}
            index={index}
            voted={voted}
            handle={handleVoteFinalClick}
            handleCurrent={handleCurrent}
            currentVote={currentVote}
          />
        ))}
      </div>
    </>
  );
}

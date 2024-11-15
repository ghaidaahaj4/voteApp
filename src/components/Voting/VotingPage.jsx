/* eslint-disable no-undef */
import CandidateCard from "./CandidateCard";
import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { doSignOut } from "../Context/AuthContext/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";

export default function VotingPage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [userRole, setUserRole] = useState("user");
  const [voted, setIsVoted] = useState(false);
  const [currentVote, setCurrentVote] = useState(0);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      if (currentUser?.email) {
        try {
          const userRef = doc(db, "users", currentUser.email);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserRole(userData.role || "user");
          } else {
            console.log("No user data found for:", currentUser.email);
          }
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
          if (userRole === "admin") {
            const usersRef = collection(db, "votes");
            const usersSnapshot = await getDocs(usersRef);
            const usersList = usersSnapshot.docs.map((doc) => doc.data());
            setAllUsers(usersList);
          }
        } catch (error) {
          console.error("Error fetching user or vote data:", error.message);
        }
      }
    }
    fetchUserData();
  }, [currentUser, userRole]);

  async function handleVoteFinalClick() {
    try {
      setIsVoted(true);
      const userVoteRef = doc(db, "votes", currentUser.email);
      await setDoc(userVoteRef, {
        voted: true,
        currentVote,
        timestamp: new Date(),
      });
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

      {userRole === "admin" && (
        <div>
          <h1>Admin Dashboard</h1>
          <h3>All Users:</h3>
          <ul>
            {allUsers.map((user, index) => (
              <li key={index}>
                {user.voted ? (
                  <p>True - {user.email}</p>
                ) : (
                  <p>False - {user.email}</p>
                )}
              </li>
            ))}
          </ul>

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
        </div>
      )}

      {userRole !== "admin" && (
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
      )}
    </>
  );
}

/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import PartyCardInDash from "./PartyCardInDash";
export default function AdminDashBoard({ allUsers }) {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const voteCounts = [0, 0, 0, 0];
    allUsers.forEach((user) => {
      if (user.voted) {
        console.log(user.currentVote);
        voteCounts[user.currentVote - 1] += 1;
        console.log(voteCounts);
      }
    });

    setVotes(voteCounts);
  }, [allUsers]);

  return (
    <div className="dash">
      <h1>Admin Dashboard</h1>
      <h3>All Users:</h3>
      <ul className="usersInDash">
        {allUsers.map((user, index) => (
          <li key={index}>
            <p className={user.voted ? "voted" : "not-voted"}>
              {user.voted
                ? `${user.email} - Voted `
                : `${user.email} - NotVoted`}
            </p>
          </li>
        ))}
      </ul>

      <h3>All Parties</h3>
      <PartyCardInDash votes={votes} />
    </div>
  );
}

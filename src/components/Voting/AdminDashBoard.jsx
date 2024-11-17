/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function AdminDashBoard({ allUsers }) {
  const [votes, setVotes] = useState([]);
  useEffect(() => {
    const votedUsers = allUsers
      .filter((user) => user.voted)
      .map((user) => user.currentVote);

    setVotes(votedUsers);
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
      <ul>
        {votes.map((vote, index) => (
          <li key={index}>{vote}</li>
        ))}
      </ul>
    </div>
  );
}

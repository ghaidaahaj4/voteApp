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
      <h3>All Parties</h3>
      <ul>
        {votes.map((vote, index) => (
          <li key={index}>{vote}</li>
        ))}
      </ul>
    </div>
  );
}

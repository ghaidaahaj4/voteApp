/* eslint-disable react/prop-types */
import React from "react";

export default function AdminDashBoard({ allUsers }) {
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].voted) {
      console.log(allUsers[i].currentVote);
    }
  }
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
    </div>
  );
}

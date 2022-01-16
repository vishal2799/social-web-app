import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFriend, deleteFriend } from "../data";

export default function Friend() {
    let navigate = useNavigate();
    let params = useParams();
    let friend = getFriend(parseInt(params.friendId, 10));
    return (
        <main style={{ padding: "1rem" }}>
      <h2>Total Due: {friend.amount}</h2>
      <p>
        {friend.name}: {friend.number}
      </p>
      <p>Due Date: {friend.due}</p>
      <p><button
          onClick={() => {
            deleteFriend(friend.number);
            navigate("/friends");
          }}
        >
          Delete
        </button></p>
    </main>

    )
  }
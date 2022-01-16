import axios from "axios";
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/Auth/AuthContext";
import { getUser, deleteUser } from "../data";

// export default function User() {
//     let navigate = useNavigate();
//     let params = useParams();
//     let user = getUser(parseInt(params.userId, 10));
//     return (
//         <main style={{ padding: "1rem" }}>
//       <h2>Total Due: {user.amount}</h2>
//       <p>
//         {user.name}: {user.number}
//       </p>
//       <p>Due Date: {user.due}</p>
//       <p><button
//           onClick={() => {
//             deleteUser(user.number);
//             navigate("/users");
//           }}
//         >
//           Delete
//         </button></p>
//     </main>

//     )
//   }

export default function User() {
    let navigate = useNavigate();
    const { user } = useContext(AuthContext)

    let params = useParams();

    console.log(params);
    return (
        <main style={{ padding: "1rem" }}>
            
      {/* <h2>Total Due: {user.amount}</h2>
      <p>
        {user.name}: {user.number}
      </p>
      <p>Due Date: {user.due}</p>
      <p><button
          onClick={() => {
            deleteUser(user.number);
            navigate("/users");
          }}
        >
          Delete
        </button></p> */}
    </main>

    )
  }
import React from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import { getUsers } from "./data";
import { Outlet, NavLink, useSearchParams } from 'react-router-dom'

const Users = () => {
  let users = getUsers();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {users
          .filter(user => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let userId = user.userId.toLowerCase();
            return userId.startsWith(filter.toLowerCase());
          })
          .map(user => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              })}
              to={`/users/${user.userId}`}
              key={user.userId}
            >
              {user.userId}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Users
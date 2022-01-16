import React from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import { getFriends } from "./data";
import { Outlet, NavLink, useSearchParams } from 'react-router-dom'

const Friends = () => {
  let friends = getFriends();
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
        {friends
          .filter(friend => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = friend.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map(friend => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              })}
              to={`/friends/${friend.number}`}
              key={friend.number}
            >
              {friend.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Friends
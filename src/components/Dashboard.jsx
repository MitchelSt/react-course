import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function Dashboard() {
  const history = useHistory();
  const data = 54897;

  console.log(history);

  return (
    <>
      <h2>Dashboard</h2>

      <button onClick={() => history.push("/login", { data })}>
        Go to login
      </button>

      <Link to="/login">Go to login (link)</Link>
    </>
  );
}

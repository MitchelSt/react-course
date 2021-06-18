import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      Dashboard
      <br />
      <Link to="/chart">Go to Chart</Link>
    </>
  );
}

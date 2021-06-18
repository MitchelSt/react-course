import React from "react";
import { Link } from "react-router-dom";
import "./Chart.module.css";

export default function Chart() {
  return (
    <>
      Chart
      <br />
      <Link to="/dashboard">Go to Dashboard</Link>
    </>
  );
}

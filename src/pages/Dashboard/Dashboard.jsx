import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <p styles={styles.dashboard}>Dashboard</p>
      <br />
      <Link to="/chart">Go to Chart</Link>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Chart.module.css";

export default function Chart() {
  return (
    <>
      <p styles={styles.chart}>Chart</p>
      <br />
      <Link to="/dashboard">Go to Dashboard</Link>
    </>
  );
}

import React from "react";

export default function Input({ setInputValue }) {
  return (
    <>
      <input type="number" onChange={(e) => setInputValue(e.target.value)} />
    </>
  );
}

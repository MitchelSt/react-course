import React from "react";

export default function MultipliedByTwo({ inputValue }) {
  console.log(inputValue);
  return (
    <>
      <p>Multiplied number: {inputValue * 2}</p>
    </>
  );
}

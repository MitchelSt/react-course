import React, { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";

export default function MultipliedByTwo() {
  const { state } = useContext(InputValueContext);

  console.log(state);

  return (
    <>
      <p>Multiplied number: {state.inputValue * 2}</p>
    </>
  );
}

import React, { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";
import MultipliedCalculations from "./MultipliedCalculations";

export default function CalculationOverview() {
  const { dispatch } = useContext(InputValueContext);

  return (
    <>
      <MultipliedCalculations />

      <button onClick={() => dispatch({ type: "SET_INPUT_VALUE_TO_100" })}>
        Set multiplied number to 100
      </button>
    </>
  );
}

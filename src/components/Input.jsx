import React, { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";

export default function Input() {
  const { dispatch } = useContext(InputValueContext);

  return (
    <>
      <input
        type="number"
        onChange={(e) =>
          dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value })
        }
      />
    </>
  );
}

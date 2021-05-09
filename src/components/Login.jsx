import React from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  console.log(history);

  return (
    <>
      <h2>Login</h2>

      <button onClick={() => history.goBack()}>Go back</button>
    </>
  );
}

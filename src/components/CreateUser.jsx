import React from "react";
import useCreateUser from "../query-hooks/useCreateUser";

export default function CreateUser() {
  const mutation = useCreateUser();

  return (
    <>
      <button
        type="button"
        onClick={() => mutation.mutate({ name: "John Doe", age: 55 })}
      >
        Create user
      </button>
    </>
  );
}

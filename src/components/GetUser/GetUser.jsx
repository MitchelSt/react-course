import React from "react";
import useUser from "../../query-hooks/useUser";

export default function GetUser() {
  const user = useUser(5);

  return (
    <>
      {user.isError && <p>Could not fetch user...</p>}

      {user.isSuccess && <p>{user.data.name}</p>}
    </>
  );
}

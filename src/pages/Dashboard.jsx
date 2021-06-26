import React, { useState } from "react";
import Users from "../components/Users";
import User from "../components/User";
import { useIsFetching } from "react-query";

export default function Dashboard() {
  const [selectedUser, setSelectedUser] = useState(null);
  const isFetching = useIsFetching();

  return (
    <>
      <Users setSelectedUser={setSelectedUser} />

      <hr />

      <User selectedUser={selectedUser} />

      {isFetching ? (
        <p style={{ position: "fixed", top: "2%", right: "0%" }}>Loading...</p>
      ) : null}
    </>
  );
}

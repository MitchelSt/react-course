import React, { useState } from "react";
import Users from "../components/Users";
import User from "../components/User";
import CreateUser from "../components/CreateUser";
import { useIsFetching } from "react-query";

export default function Dashboard() {
  const [selectedUser, setSelectedUser] = useState(1);
  const isFetching = useIsFetching();

  return (
    <>
      <Users setSelectedUser={setSelectedUser} />
      <hr />
      <User selectedUser={selectedUser} />
      <hr />
      <CreateUser />

      {isFetching ? (
        <p style={{ position: "fixed", top: "2%", right: "0%" }}>Loading...</p>
      ) : null}
    </>
  );
}

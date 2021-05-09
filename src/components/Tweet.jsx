import React from "react";
import { useParams } from "react-router-dom";

export default function Tweet() {
  const { tweetId } = useParams();

  return (
    <>
      <p>The tweet ID is {tweetId}</p>
    </>
  );
}

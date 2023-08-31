"use client";
import React from "react";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import { useSession } from "next-auth/react";

const page = () => {
  const session = useSession();
  if (session.status === "loading") return <div>Loading...</div>;
  return (
    <div>
      {session?.data?.user ? (
        <>
          <h1>Profile</h1>
          <p>{session?.data?.user?.name as string}</p>
          <p>{session?.data?.user?.email as string}</p>
          <SignOut />
        </>
      ) : (
        <div>
          <SignIn />
        </div>
      )}
    </div>
  );
};

export default page;

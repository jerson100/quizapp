"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const navigation = useRouter();
  const handleLogout = async () => {
    await signOut({
      redirect: false,
    });
    // navigation.push("/");
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default SignOut;

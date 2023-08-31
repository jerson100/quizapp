"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/api/auth/signin");
      }}
    >
      Ir a loguin
    </button>
  );
};

export default SignIn;

"use client";
import React from "react";
import { signIn } from "next-auth/react";
const page = () => {
  const handleLogin = async () => {
    await signIn("google", { callbackUrl: "http://localhost:3000/" });
  };
  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={handleLogin}
      >
        Acceder con tu cuenta de google
      </button>
    </div>
  );
};

export default page;

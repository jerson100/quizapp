"use client";
import Step from "@/components/common/Step";
import React, { useState } from "react";
import OneStep from "./components/oneStep";

const page = () => {
  const [option, setOption] = useState("0");
  const [question, setQuestion] = useState({
    title: "",
    type: 0,
    text: "",
    options: [],
  });
  return (
    <div className="container border flex-grow my-4 p-4 flex items-center justify-center">
      <Step.Root>
        <Step.List>
          <Step.Item>
            <OneStep />
          </Step.Item>
          <Step.Item>
            <OneStep />
          </Step.Item>
        </Step.List>
      </Step.Root>
    </div>
  );
};

export default page;

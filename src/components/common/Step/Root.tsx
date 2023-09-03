import React, { ReactNode } from "react";
import StepProvider from "./context/StepContext";

const Root = ({ children }: { children: ReactNode }) => {
  return <StepProvider>{children}</StepProvider>;
};

export default Root;

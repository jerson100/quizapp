import { useContext } from "react";
import { StepContext } from "../context/StepContext";

const useStep = () => {
  const context = useContext(StepContext);
  if (!context) throw new Error("useStep must be used within a StepProvider");
  return context;
};

export default useStep;

import React, { ReactNode, useEffect } from "react";
import useStep from "../hooks/useStep";

const StepList = ({ children }: { children: ReactNode }) => {
  const { addCountItems, current } = useStep();
  const childrenArray = React.Children.toArray(children);
  useEffect(() => {
    const childrenArray = React.Children.toArray(children);
    addCountItems(childrenArray.length ?? 0);
  }, [children]);
  return childrenArray[current];
};

export default StepList;

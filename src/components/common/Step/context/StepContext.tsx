import React, { ReactNode, useCallback, useMemo, useState } from "react";

interface StepContextProps {
  length: number;
  current: number;
  next: () => void;
  prev: () => void;
  to: (index: number) => void;
  addCountItems: (length: number) => void;
}

export const StepContext = React.createContext<StepContextProps>({
  length: 0,
  current: 0,
  next: () => {},
  prev: () => {},
  to: () => {},
  addCountItems: () => {},
});

const StepProvider = ({ children }: { children: ReactNode }) => {
  const [current, setCurrent] = useState<number>(0);
  const [length, setLength] = useState(0);
  const addCountItems = useCallback((length: number) => {
    setLength(length);
  }, []);
  const next = useCallback(() => {
    setCurrent((prev) => prev + 1);
  }, []);
  const prev = useCallback(() => {
    setCurrent((prev) => prev + 1);
  }, []);
  const to = useCallback(() => {
    setCurrent((prev) => prev + 1);
  }, []);
  const memoVal = useMemo(() => {
    return {
      length,
      current,
      next,
      prev,
      to,
      addCountItems,
    };
  }, [length, current, next, prev, to, addCountItems]);
  return (
    <StepContext.Provider value={memoVal}>{children}</StepContext.Provider>
  );
};

export default StepProvider;

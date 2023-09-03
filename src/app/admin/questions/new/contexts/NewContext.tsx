import { Question } from "@/types/question";
import React from "react";

interface NewContextProps {
  questionnary: Question[];
}

const NewContext = React.createContext<NewContextProps>({});

interface NewContextProps {
  children: React.ReactNode;
}

const NewProvider = ({ children }: NewContextProps) => {
  return <NewContext.Provider>{children}</NewContext.Provider>;
};

export default NewContext;

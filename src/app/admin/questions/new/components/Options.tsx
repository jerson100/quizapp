import React from "react";

interface OptionsProps {
  type: "text" | "radio";
}

const Options = ({ type }: OptionsProps) => {
  switch (type) {
    case "text":
      return <TextQuestion />;
  }
  return null;
};

export default Options;

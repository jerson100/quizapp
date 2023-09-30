import React from "react";

const CustomParagraph = ({
  children,
  ...props
}: {
  children: string | string[];
}) => {
  const childS = typeof children === "string" ? children : children[0];
  // Busca y reemplaza todas las instancias de '[[input]]' con un <input>
  const content = childS.split("[[input]]").map((text, index) => {
    if (index === 0) {
      return text;
    }
    return (
      <React.Fragment key={index}>
        <input
          name=""
          placeholder=""
          className="border px-2 border-blue-600 rounded-lg h-10 ml-2 mr-2 w-28"
        />
        {text}
      </React.Fragment>
    );
  });
  return <p {...props}>{content}</p>;
};

export default CustomParagraph;

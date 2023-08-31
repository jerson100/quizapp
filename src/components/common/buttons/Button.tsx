import React from "react";

interface ButtonPros extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: ButtonPros) => {
  return <button {...props}>{children}</button>;
};

export default Button;

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  className?: string;
  children: string | string[];
}

const CodeBlock = ({ className, children }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter
      language={className?.replace("lang-", "")}
      style={oneDark}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

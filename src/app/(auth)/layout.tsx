import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-grow bg-white flex justify-center items-center">
      {children}
    </div>
  );
};

export default layout;

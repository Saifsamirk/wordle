import React, { useState } from "react";
import { BlockContext } from "../Context";
import { Status } from "../types";

export const Provider: React.FC = ({ children }) => {
  // Declare the local state of the component that will be passed on
  // to child components
  const [targetElement, setTargetElement] = useState<{
    element: HTMLElement | null;
    innerText: string;
    id?: number;
  }>({ element: null, innerText: "" });
  const [status, setStatus] = useState<Status>("");

  return (
    <BlockContext.Provider
      value={{
        targetElement,
        setTargetElement,
        status,
        setStatus,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

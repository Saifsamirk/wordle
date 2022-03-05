import React from "react";
import { Status } from "../types";

export const BlockContext = React.createContext<{
  status: Status;
  setStatus: React.Dispatch<React.SetStateAction<Status>> | null;
  targetElement: {
    element: HTMLElement | null;
    innerText: string;
    id?: number;
  };
  setTargetElement: React.Dispatch<
    React.SetStateAction<{
      element: HTMLElement | null;
      innerText: string;
      id?: number;
    }>
  > | null;
}>({
  status: "",
  targetElement: { element: null, innerText: "" },
  setTargetElement: null,
  setStatus: null,
});

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useEffect } from "react";

import { Status } from "../types";
import * as styles from "./NotAwordDialogue.styles";

export const NotAwordDialogue: React.FC<{
  status: Status;
  setStatus: React.Dispatch<React.SetStateAction<Status>> | null;
}> = ({ status, setStatus }) => {
  // Invoke all function below whenever the component renders
  useEffect(() => {
    var timer = setTimeout(() => setStatus?.(""), 3000);
    // Perform a cleanup function whenever the component unmounts
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <dialog css={styles.notAwordDialogue} open={status === "not-word"}>
      Not in the word list
    </dialog>
  );
};

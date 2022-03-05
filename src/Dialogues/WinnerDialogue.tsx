/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useEffect } from "react";

import { Status } from "../types";
import * as styles from "./WinnerDialogue.styles";

export const WinnerDialogue: React.FC<{
  status: Status;
  setStatus: React.Dispatch<React.SetStateAction<Status>> | null;
}> = ({ status, setStatus }) => {
  // Perform a cleanup function whenever the component unmounts
  useEffect(() => {
    return () => {
      // Reload the page with a new word
      window.location.reload();
    };
  }, []);
  return (
    <dialog open={status === "winner"} css={styles.winnerDialogue}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <span
          className="position-absolute top-0"
          onClick={() => {
            // Reset the state
            setStatus?.("");
          }}
        >
          x
        </span>
        <img
          className="mx-auto"
          alt="winner-img"
          src="https://cdn-icons-png.flaticon.com/512/5511/5511415.png"
          width={100}
          height={100}
        />
        <h1>You win!</h1>
      </div>
    </dialog>
  );
};

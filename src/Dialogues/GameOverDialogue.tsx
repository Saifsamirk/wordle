/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useEffect } from "react";

import { Status } from "../types";
import * as styles from "./GameOverDialogue.styles";

export const GameOverDialogue: React.FC<{
  status: Status;
  setStatus: React.Dispatch<React.SetStateAction<Status>> | null;
}> = ({ status, setStatus }) => {
  // Invoke all function below whenever the component renders
  useEffect(() => {
    var timer = setTimeout(() => setStatus?.(""), 3000);
    // Perform a cleanup function whenever the component unmounts
    return () => {
      clearTimeout(timer);
      // Reload the page for a new game
      window.location.reload();
    };
  }, []);
  return (
    <dialog open={status === "game-over"} css={styles.gameOverDialogue}>
      <img
        className="mx-auto"
        alt="Game over"
        src="https://cdn-icons-png.flaticon.com/512/6726/6726782.png"
      />
    </dialog>
  );
};

import { Interpolation, Theme } from "@emotion/react";
// Style the header displayed atop the board
export const notAwordDialogue: Interpolation<Theme> = {
  position: "fixed",
  top: "30% !important",
  //   width: "40%",
  // Remove the default border and make it curved
  border: "none",
  borderRadius: "3px",
  // Change the alignment of the header and make it bolder
  fontWeight: "bolder",
  textAlign: "center",
  // Change the color of the text and the background of
  // the dialogue
  color: "#fff",
  background: "#000",
  // Apply the shake animation to the dialogue
  animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
  transform: "translate3d(0, 0, 0)",
  backfaceVisibility: "hidden",
  perspective: "1000px",
  // Add the functionality using @keyframes to shake the
  // dialogue
  "@keyframes shake": {
    "10%, 90%": {
      transform: "translate3d(-1px, 0, 0)",
    },
    "20%, 80%": {
      transform: "translate3d(2px, 0, 0)",
    },
    "30%, 50%, 70%": {
      transform: "translate3d(-4px, 0, 0)",
    },
    "40%, 60%": {
      transform: "translate3d(4px, 0, 0)",
    },
  },
};

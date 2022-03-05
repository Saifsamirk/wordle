import { Interpolation, Theme } from "@emotion/react";
// Style the header displayed atop the board
export const gameOverDialogue: Interpolation<Theme> = {
  position: "fixed",
  top: "50% !important",
  // Centralize the dialogue
  transform: "translate(0%,-50%)",
  width: "40%",
  // Apply extra padding
  padding: "50px",
  // Change the color of the default border
  border: "2px solid #d4d5db",
  // Let the image occupy the full-width/height of it container
  img: {
    width: "100%",
    height: "100%",
  },
};

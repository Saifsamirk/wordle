import { Interpolation, Theme } from "@emotion/react";
// Style the header displayed atop the board
export const winnerDialogue: Interpolation<Theme> = {
  position: "fixed",
  top: "30% !important",
  width: "40%",
  // Apply extra padding in all directions
  padding: "50px",
  // Change the color of the default border
  border: "2px solid #d4d5db",
  // Change the font family of the header and make it bolder
  fontFamily: "Redressed, cursive",
  fontWeight: "bolder",
  color: "#07e39d",
  textAlign: "center",
  // Apply transition to the dialogue
  transition: "display 1s ease-in-out",
  // align the exit button to the very end of the dialogue
  // header and change the cursor to pointer
  span: {
    cursor: "pointer",
    right: "10px",
    fontSize: "30px",
  },
  // Increase the font size of the header
  h1: {
    fontSize: "50px",
  },
};

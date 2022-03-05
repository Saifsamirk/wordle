import { Interpolation, Theme } from "@emotion/react";

// Style the container that wraps all blocks of the board
export const container: Interpolation<Theme> = {
  // Display the container as grid and apply 20px of
  // spacing between rows and columns
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  gridGap: "7px",
  // Style the span (block)
  span: {
    background: "transparent",
    // Centralize the text in the span
    // Capitalize the text of the span
    textAlign: "center",
    textTransform: "capitalize",
    // Change the font size of the text in the span and make it bolder
    fontSize: "2rem",
    fontWeight: "bolder",
    // Add light grey border to the block of the board
    border: "2px solid #d4d5db",
    // Change the specs of the block (span)
    width: "60px",
    height: "60px",
    // tran
    transitionDuration: "2s",
    msTransitionProperty: "background",
    "&:not(:empty)": {
      border: "2px solid #000",
    },
  },
};

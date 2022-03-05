import { Interpolation, Theme } from "@emotion/react";
// Style the header displayed atop the board
export const header: Interpolation<Theme> = {
  display: "flex",
  alignItems: "center",
  // Add custom styles to h1 element
  h1: {
    // Remove the default margin and padding from the
    // header element
    padding: 0,
    margin: 0,
    // Change the font family of the header and make it bolder and bigger
    fontFamily: "Redressed, cursive",
    fontWeight: "bolder",
    fontSize: "50px",
  },
};

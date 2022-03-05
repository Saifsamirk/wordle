import { Interpolation, Theme } from "@emotion/react";

export const keyboard: Interpolation<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "50%",
  // Style the keys of the keyboard (buttons)
  button: {
    flex: "calc(100% / 8)",
    margin: "3px",
    // Capitalize the text of the button
    textTransform: "capitalize",
    // Change the font size and also the background color
    fontSize: "1.3rem",
    backgroundColor: "#d3d6da",
    // Remove the default borders
    border: "none",
    // Make the corners curved
    borderRadius: "3px",
    padding: "20px 15px",
    // Shrink the button when it is clicked
    "&:active": {
      transform: "scale(0.98)",
    },
  },
};

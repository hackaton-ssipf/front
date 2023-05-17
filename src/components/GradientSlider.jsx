import React from "react";
import { Slider, createTheme, ThemeProvider } from "@mui/material";

const SliderComponent = ({ value, onChange }) => {
  const theme = createTheme({
    components: {
      MuiSlider: {
        styleOverrides: {
          root: {
            height: "8px",
            color: "#1a1a1a", // Set the color of the track to transparent
            webkitBoxShadow: "none",
          },
          thumb: {
            width: "20px",
            height: "20px",
            backgroundColor: "white", // Set the color of the thumb
            webkitBoxShadow: "none",
          },
          track: {
            backgroundImage:
              "linear-gradient(130deg, #E8D206 30%, #B1Ed06 90%)",
            webkitBoxShadow: "none",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Slider
        value={value}
        onChange={onChange}
        aria-labelledby="slider-label"
        min={1}
        max={100}
        step={1}
      />
    </ThemeProvider>
  );
};

export default SliderComponent;

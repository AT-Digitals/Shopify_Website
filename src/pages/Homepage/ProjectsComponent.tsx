import { Box, Chip, Rating, Typography } from "@mui/material";

import React from "react";

type ProjectsComponentProps = {
  flexDirection?: "row" | "row-reverse"; // Add a flexDirection prop
  Bigimg: string;
  Smallimg: string;
  altText: string;
  bigChips: string[]; // Chips for the big image
  smallChips: string[]; // Chips for the small image
  title1: string;
  title2: string;
  rating: number | null;
  status1: string;
  status2: string;
};

export default function ProjectsComponent({
  flexDirection = "row",
  Bigimg,
  Smallimg,
  bigChips,
  smallChips,
  title1,
  title2,
  rating,
  status1,
  status2,
}: ProjectsComponentProps) {
  const [value, setValue] = React.useState<number | null>(5);

  const imageStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out", // Smooth zoom transition
  };

  const containerStyles = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "15px",
    height: "100%",
    "&:hover::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(10px)",
      zIndex: 1, // Behind content but above the image
    },
  };

  return (
    <Box margin={"30px"} display={"flex"} flexDirection={flexDirection}>
      {/* Big Image Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "980px",
          padding: "16px",
          height: "500px",
          backgroundColor: "#f9f9f9",
          marginBottom: "30px",
        }}
      >
        <Box
          sx={containerStyles}
          onMouseOver={(e) => {
            (
              e.currentTarget.querySelector("img") as HTMLElement
            ).style.transform = "scale(1.1)";
          }}
          onMouseOut={(e) => {
            (
              e.currentTarget.querySelector("img") as HTMLElement
            ).style.transform = "scale(1)";
          }}
        >
          <img src={Bigimg} alt="image1" style={imageStyles} />
          <Box
            sx={{
              position: "absolute",
              top: "34px",
              left: "40px",
              display: "flex",
              gap: "8px",
              zIndex: 2,
            }}
          >
            {bigChips.map((chip, chipIndex) => (
              <Chip
                key={chipIndex}
                label={chip}
                sx={{
                  backgroundColor: "#ffffff",
                  fontWeight: "700",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                }}
              />
            ))}
          </Box>
          <Typography
            sx={{
              position: "absolute",
              bottom: "45px",
              left: "40px",
              color: "white",
              fontWeight: "bold",
              fontSize: "32px",
              textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              zIndex: 2,
            }}
          >
            {title1}
          </Typography>
          <Rating
            sx={{
              position: "absolute",
              bottom: "90px",
              left: "40px",
              color: "white",
              fontWeight: "bold",
              fontSize: "32px",
              textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              zIndex: 2,
            }}
            name="no-value"
            value={rating}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              bottom: "22px",
              left: "40px",
              color: "white",
              fontSize: "16px",
              textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              zIndex: 2,
            }}
          >
            {status1}
          </Typography>
        </Box>
      </Box>

      {/* Small Image Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "460px",
          padding: "16px",
          height: "500px",
          backgroundColor: "#f9f9f9",
          marginBottom: "30px",
        }}
      >
        <Box
          sx={containerStyles}
          onMouseOver={(e) => {
            (
              e.currentTarget.querySelector("img") as HTMLElement
            ).style.transform = "scale(1.1)";
          }}
          onMouseOut={(e) => {
            (
              e.currentTarget.querySelector("img") as HTMLElement
            ).style.transform = "scale(1)";
          }}
        >
          <img src={Smallimg} alt="image2" style={imageStyles} />
          <Box
            sx={{
              position: "absolute",
              top: "34px",
              left: "40px",
              display: "flex",
              gap: "8px",
              zIndex: 2,
            }}
          >
            {smallChips.map((chip, chipIndex) => (
              <Chip
                key={chipIndex}
                label={chip}
                sx={{
                  backgroundColor: "#ffffff",
                  fontWeight: "700",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                }}
              />
            ))}
          </Box>
          <Typography
            sx={{
              position: "absolute",
              bottom: "45px",
              left: "40px",
              color: "white",
              fontWeight: "bold",
              fontSize: "32px",
              textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              zIndex: 2,
            }}
          >
            {title2}
          </Typography>
          <Rating
            sx={{
              position: "absolute",
              bottom: "90px",
              left: "40px",
              color: "white",
              fontWeight: "bold",
              fontSize: "24px",
              textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              zIndex: 2,
            }}
            name="no-value"
            value={rating}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              bottom: "22px",
              left: "40px",
              color: "white",
              fontSize: "16px",
              textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              zIndex: 2,
            }}
          >
            {status2}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

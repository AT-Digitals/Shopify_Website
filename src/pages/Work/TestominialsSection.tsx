import { Box, IconButton, Stack, Typography } from "@mui/material";
import { animated, useSpring } from "@react-spring/web"; // Import from react-spring

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const testimonials = [
  {
    rating: "★★★★★",
    text: "They don't feel like an agency, but rather part of a team that is just as invested in our company's success as we are.",
    name: "Emily Iser",
    role: "Software Engineering Manager, Glowforge",
    imgSrc: "https://i.ibb.co/d5DY64w/img1.jpg",
  },
  {
    rating: "★★★★★",
    text: "They don't feel like an agency, but rather part of a team that is just as invested in our company's success as we are.",
    name: "Michael Silva",
    role: "VP E-Commerce & DTC Marketing, Honest Baby Clothing",
    imgSrc: "https://i.ibb.co/5FF1vqz/img2.jpg",
  },
  {
    rating: "★★★★★",
    text: "They don't feel like an agency, but rather part of a team that is just as invested in our company's success as we are.",
    name: "George Kuan",
    role: "Founder, Bang Cookies",
    imgSrc: "https://i.ibb.co/Trv7hDv/img3.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // Track animation direction

  const handlePrevTestimonial = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextTestimonial = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const displayedTestimonial = testimonials[currentIndex];

  // Define animation using react-spring's useSpring hook
  const props = useSpring({
    opacity: 1,
    transform: direction === "right" ? "translateX(0%)" : "translateX(0%)",
    from: {
      opacity: 0,
      transform:
        direction === "right" ? "translateX(100%)" : "translateX(-100%)",
    },
    reset: true,
    config: { duration: 600 },
  });

  if (!displayedTestimonial) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://www.iifl.com/files/2022-04/about-us-banner-top-img.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#ffffff",
        py: 4,
        px: 2,
      }}
    >
      <Typography
        color={"black"}
        variant="h4"
        textAlign="center"
        mb={4}
        fontWeight="700"
      >
        Testimonials
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ position: "relative" }}
      >
        <IconButton
          sx={{
            color: "white",
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
          onClick={handlePrevTestimonial}
          aria-label="Previous"
        >
          <ArrowBackIosIcon />
        </IconButton>
        <animated.div style={props}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#1e1e1e",
              p: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Box
                sx={{
                  width: "150px",
                  height: "150px",
                  margin: "0 auto",
                  padding: "5px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={displayedTestimonial.imgSrc}
                  alt={displayedTestimonial.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                fontWeight="600"
                color="rgb(184, 0, 64)"
                mb={1}
              >
                Clutch
              </Typography>
              <Typography
                variant="body1"
                color="rgb(255, 255, 255)"
                fontSize="14px"
                mb={2}
              >
                {displayedTestimonial.rating}
              </Typography>
              <Typography
                variant="body1"
                fontStyle="italic"
                mb={2}
                color="rgb(220, 220, 220)"
              >
                "{displayedTestimonial.text}"
              </Typography>
              <Typography
                variant="body2"
                fontWeight="600"
                color="rgb(255, 255, 255)"
              >
                {displayedTestimonial.name}
              </Typography>
              <Typography variant="caption" color="rgb(180, 180, 180)">
                {displayedTestimonial.role}
              </Typography>
            </Box>
          </Box>
        </animated.div>
        <IconButton
          sx={{
            color: "white",
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
          onClick={handleNextTestimonial}
          aria-label="Next"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

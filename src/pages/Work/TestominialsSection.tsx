import { Box, IconButton, Stack, Typography } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    rating: "★★★★★",
    text: "To create a store that matched Nicole Rose’s commitment to quality gemstones, we started with rebranding.",
    name: "Gordon Edlin",
    role: "Health Coaching, Personal Training, And Creating Wellness Committees",
    imgSrc:
      "https://media.istockphoto.com/id/1496615469/photo/serene-latin-woman-enjoy-sunset-with-gratitude.jpg?s=612x612&w=0&k=20&c=LXeGeLgKznGamU25tLajijCVuV5lxWIZH0RW5qN3k5g=",
    heading: "Health & Wellness",
  },
  {
    rating: "★★★★★",
    text: "We set out to create a data-driven design and implement tailored strategies best Nicole Rose’s audience.",
    name: "Michael Silva",
    role: "Beauty Consultant, Esthetician, Or Beauty Advisor",
    imgSrc:
      "https://thumbs.dreamstime.com/b/beauty-cosmetics-makeup-woman-brushes-face-aesthetic-brown-background-studio-profile-skincare-facial-transformation-272735590.jpg",
    heading: "Beauty & Personal Care",
  },
  {
    rating: "★★★★★",
    text: "To create a store that matched Nicole Rose’s commitment to quality gemstones, we started with rebranding.",
    name: "George Kuan",
    role: "Create Custom Roles To Suit Your Business Needs",
    imgSrc:
      "https://cdn.prod.website-files.com/635a76dc72a1554a18e33d3d/63f62f2eedfbfdb75e5023c8_63e0d4936bf1b115328ee3a3_37_biggest_brands_Shopify.jpeg",
    heading: "Shopify Plus",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection("left");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []); // Empty dependency array means this effect runs once on mount

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
          'url("https://i0.wp.com/www.suretiimf.com/wp-content/uploads/2020/06/testimonials-background.jpg?ssl=1")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#ffffff",
        py: 4,
        px: 2,
      }}
    >
      <Typography
        fontFamily={"'Codec pro', sans-serif"}
        color={"white"}
        fontSize={"50px"}
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
            left: { xs: "-12px", sm: 0, md: 0, lg: 0 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
          onClick={handlePrevTestimonial}
          aria-label="Previous"
        >
          <ArrowBackIosIcon
            sx={{
              color: "white",
              fontSize: {
                xs: "1.5rem",
                sm: "2.5rem",
                md: "2.5rem",
                lg: "2.5rem",
              },
            }}
          />
        </IconButton>
        <animated.div style={props}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: { xs: "90%", lg: "100%" },
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#1e1e1e",
              p: { xs: "10px", lg: "24px" },
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
                fontFamily={"'Codec pro', sans-serif"}
                variant="h6"
                fontWeight="600"
                color="rgb(184, 0, 64)"
                mb={1}
              >
                {displayedTestimonial.heading}
              </Typography>
              <Typography
                fontFamily={"'Codec pro', sans-serif"}
                variant="body1"
                color="rgb(255, 255, 255)"
                fontSize="14px"
                mb={2}
              >
                {displayedTestimonial.rating}
              </Typography>
              <Typography
                fontFamily={"'Codec pro', sans-serif"}
                variant="body1"
                fontStyle="italic"
                mb={2}
                color="rgb(220, 220, 220)"
              >
                "{displayedTestimonial.text}"
              </Typography>
              <Typography
                fontFamily={"'Codec pro', sans-serif"}
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
            right: { xs: "-12px", sm: 0, md: 0, lg: 0 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
          onClick={handleNextTestimonial}
          aria-label="Next"
        >
          <ArrowForwardIosIcon
            sx={{
              color: "white",
              fontSize: {
                xs: "1.5rem",
                sm: "2.5rem",
                md: "2.5rem",
                lg: "2.5rem",
              },
            }}
          />
        </IconButton>
      </Stack>
    </Box>
  );
}

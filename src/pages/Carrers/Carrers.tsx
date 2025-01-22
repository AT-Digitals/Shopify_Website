import "./CareersPage.css"; // Add CSS styles here

import { Box, Divider, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const opportunities = [
  {
    title: "Junior Front-end Developer",
    link: "/jobs-in-commerce-ui/junior",
    description1:
      "Are you a developer with a passion for clean and efficient code? Would you enjoy building complex Shopify stores for internationally recognized, sustainable, and ethical brands?",
    description2:
      "We are looking for a bright, easygoing person who will join our growing team and bring their energy and technical knowledge to the company.",
  },
  {
    title: "Mid Front-end Developer",
    link: "/",
    description1:
      "Do you bring along 3+ years of professional front-end/web development experience?",
    description2:
      "We’re on the lookout for an adaptable, skilled Front-end developer to enhance our expanding team with knowledge.",
  },
];

export default function CareersPage() {
  const Navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState<number[]>([]); // Explicitly define the state type as number[]

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".slide-up-card");
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisibleCards((prev) => {
            const newSet = new Set(prev); // Create a Set from the previous array
            newSet.add(index); // Add the new index to the Set
            return Array.from(newSet); // Convert the Set back to an array
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on page load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box bgcolor="black" color="white" padding={"20px"}>
      <Box maxWidth={1300} margin={"auto"} mt={5} mb={3}>
        <Typography fontSize={"19px"} fontFamily="Roboto" mb={2}>
          Who are we?
        </Typography>
        <Typography
          color={"rgba(204, 204, 204, 0.933)"}
          maxWidth={900}
          fontFamily="Roboto"
          fontSize={{ xs: "20px", sm: "20px", md: "30px" }}
          lineHeight={1.5}
        >
          Our expertise in Shopify Plus pushes premium e-commerce brands to
          greater heights. We're all about keeping a joyful learning environment
          where we push the envelope together as a harmonious team.
        </Typography>
      </Box>
      <Divider
        orientation="horizontal"
        sx={{
          background: "white",
          width: "100%",
          margin: "2rem auto",
        }}
      />
      <Box bgcolor="black" color="white" maxWidth={1300} margin={"auto"}>
        <Typography
          color={"rgba(204, 204, 204, 0.933)"}
          fontFamily="Roboto"
          mb={5}
          fontSize="19px"
          lineHeight={0}
        >
          Current Opportunities
        </Typography>

        <Box>
          {opportunities.map((opportunity, index) => (
            <Box
              key={index}
              className={`slide-up-card ${
                visibleCards.includes(index) ? "visible" : ""
              }`}
              mb={5}
            >
              <Typography
                fontFamily="Roboto"
                fontSize={{ xs: "30px", sm: "30px", md: "66px" }}
                mb={2}
              >
                {opportunity.title}
              </Typography>
              <Typography
                maxWidth={500}
                fontFamily="Roboto"
                fontSize="16px"
                color={"rgba(204, 204, 204, 0.933)"}
                mb={2}
              >
                {opportunity.description1}
              </Typography>
              <Typography
                maxWidth={500}
                fontFamily="Roboto"
                fontSize="16px"
                mb={3}
                color={"rgba(204, 204, 204, 0.933)"}
              >
                {opportunity.description2}
              </Typography>
              <Typography sx={{ color: "white" }}>
                See details{" "}
                <IconButton
                  onClick={() => Navigate(opportunity.link)}
                  sx={{
                    background: "rgb(184, 0, 64)",
                    color: "white",
                    width: "31px",
                    height: "31px",
                    transition: "width 0.3s ease",
                    marginLeft: "10px",
                    ":hover": {
                      background: "rgb(184, 0, 64)",
                      width: "51px",
                      borderRadius: "30px",
                    },
                  }}
                >
                  <ChevronRightIcon />
                </IconButton>
              </Typography>
              {index < opportunities.length - 1 && (
                <Divider
                  orientation="horizontal"
                  sx={{
                    background: "white",
                    width: "100%",
                    margin: "2rem auto",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

import { Box, Collapse, IconButton, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

const steps = [
  {
    title: "Discovery",
    content:
      "We start by understanding your business needs and goals to chart the best path forward.",
  },
  {
    title: "Solutioning",
    content:
      "Crafting tailored solutions that align with your requirements and objectives.",
  },
  {
    title: "Design + Develop",
    content:
      "Creating user-centric designs and developing robust systems to bring your vision to life.",
  },
  {
    title: "Launch + Support",
    content:
      "Ensuring a seamless launch and providing ongoing support to ensure long-term success.",
  },
];

export default function AboutPage() {
  const [expandedIndices, setExpandedIndices] = useState<
    Record<number, boolean>
  >({});

  const handleToggle = (index: number) => {
    setExpandedIndices((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state of the clicked index
    }));
  };

  return (
    <Box>
      <Box
        sx={{
          height: "450px",
          backgroundImage:
            "url('https://getshogun.com/learn/wp-content/uploads/2024/06/ft-img-add-shopify-about-us-page-.jpeg')", // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "40px",
        }}
      />
      <Typography
        margin={{ xs: "0px 20px", lg: "0px 40px" }}
        variant="h2"
        sx={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "black",
          marginBottom: "20px",
        }}
      >
        How do we do it?
      </Typography>
      <Typography
        margin={{ xs: "0px 20px", lg: "0px 40px" }}
        paddingTop={{ xs: "10px", lg: "10px" }}
        paddingBottom={"20px"}
        sx={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "black",
          marginBottom: "40px",
          width: "100%",
          maxWidth: { xs: "385px", lg: "660px" },
        }}
      >
        Our niche - give us the replatforms, the complex builds, all the fun
        stuff - we love the challenge. BlueSwitch is known as the Original
        Shopify Plus agency, and we’ve been a trusted partner for all things
        Shopify for the past 10+ years.
        <br />
        <br />
        Curious about our process? The BlueSwitch approach is to make the
        complex simple, and the impossible, possible.
      </Typography>

      <Box
        mt={{ xs: "20px", lg: "0px" }}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              width: "100%",
              maxWidth: "270px",
              borderTop: "2px solid black",
              borderBottom: expandedIndices[index]
                ? "3px solid black"
                : "2px solid black",
              padding: "10px",
              marginBottom: "20px",
              height: expandedIndices[index] ? "auto" : "50px", // Adjust height dynamically
              overflow: "hidden", // Ensure content doesn't spill out
              transition: "height 0.3s ease, border-bottom 0.3s ease", // Smooth transition
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "60px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "black",
                  flex: 1,
                  textAlign: "left",
                  padding: "10px 0",
                }}
              >
                {step.title}
              </Typography>
              <IconButton
                sx={{
                  color: "black",
                }}
                onClick={() => handleToggle(index)}
                aria-expanded={!!expandedIndices[index]}
                aria-label={`Toggle ${step.title}`}
              >
                {expandedIndices[index] ? <RemoveIcon /> : <AddIcon />}
              </IconButton>
            </Box>
            <Collapse in={!!expandedIndices[index]}>
              <Typography
                sx={{
                  marginTop: "10px",
                  textAlign: "left",
                  fontSize: "1rem",
                  color: "black",
                  paddingTop: "10px",
                }}
              >
                {step.content}
              </Typography>
            </Collapse>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

import { Box, IconButton, Typography } from "@mui/material";

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
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box>
      <Typography
        margin={"20px 70px"}
        variant="h2"
        sx={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#1e3a8a",
          marginBottom: "20px",
        }}
      >
        How do we do it?
      </Typography>
      <Typography
        margin={"0px 70px"}
        sx={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#333",
          marginBottom: "40px",
          width: "100%",
          maxWidth: "660px",
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
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          justifyContent: "space-around",
        }}
      >
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
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
                  color: "#1e3a8a",
                  flex: 1,
                  textAlign: "left",
                }}
              >
                {step.title}
              </Typography>
              <IconButton onClick={() => handleToggle(index)}>
                {expanded === index ? <RemoveIcon /> : <AddIcon />}
              </IconButton>
            </Box>
            {expanded === index && (
              <Typography
                width={"100%"}
                maxWidth={"220px"}
                sx={{
                  marginTop: "10px",
                  textAlign: "left",
                  fontSize: "1rem",
                  color: "#555",
                }}
              >
                {step.content}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

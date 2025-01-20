import { Box, Button, Collapse, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import GetinTouch from "../../Shared-fronend/GetIntouch/GetInTouch";
import TestimonialsSection from "../Work/TestominialsSection";

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

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box bgcolor={"black"}>
      <Box
        maxWidth={1300}
        margin={{ xs: "20px", sm: "20px", md: "20px", lg: "auto" }}
      >
        <Typography
          mt="2rem"
          color={"#ffffff5e"}
          fontFamily={"Robato"}
          fontSize={"70px"}
        >
          About Us{" "}
        </Typography>

        <Typography
          mt="2rem"
          mb="2rem"
          color={"#ffffff5e"}
          fontFamily={"Robato"}
          fontSize={"22px"}
          maxWidth={800}
        >
          We help you create a professional, fully functional Shopify store from
          scratch. Our team designs visually stunning, responsive, and
          user-friendly stores that reflect your brand's identity and engage
          your target audience.
        </Typography>
      </Box>
      <Box bgcolor={"white"} paddingTop={"2rem"}>
        <Box
          maxWidth={1300}
          margin={{ xs: "20px", sm: "20px", md: "20px", lg: "auto" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "black",
              marginBottom: "20px",
              marginTop: "10px",
            }}
          >
            How do we do it?
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "black",
              marginBottom: "40px",
              width: "100%",
              maxWidth: { xs: "385px", sm: "600px", md: "600px", lg: "660px" },
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
        </Box>
        <Box
          maxWidth={1300}
          margin={"auto"}
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
        <Box
          sx={{
            backgroundColor: "#f6f6f6",
            borderRadius: "60px",
            margin: { xs: "30px", lg: "90px" },
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  width={"250px"}
                  src={
                    "https://cdn.prod.website-files.com/6033a386edbf915204542100/65d3aed4b7aa2377d8eec1ff_target%201.svg"
                  }
                  alt="image1"
                />
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography
                pt={{ xs: "25px", lg: "70px" }}
                ml={{ xs: "20px", lg: "35px" }}
                lineHeight={1.2}
                sx={{
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "black",
                  textAlign: "justify",
                  fontSize: { xs: "28px", lg: "55px" },
                }}
              >
                Your goals are our
                <br />
                focus in Shopify
                <br /> ecommerce
                <br />
                development
              </Typography>
              <Typography
                ml={{ xs: "20px", lg: "35px" }}
                sx={{
                  fontSize: { xs: "16px", lg: "22px" },
                  color: "black",
                  marginBottom: "30px",
                  lineHeight: "1.6",
                  textAlign: "justify",
                  width: "100%",
                  maxWidth: { xs: "270px", lg: "568px" },
                }}
              >
                As a professional team, we understand the importance of creating
                tailor-made solutions for our partners' needs. That's why we
                always offer custom Shopify development services to every
                business. This helps us meet your expectations regarding the
                project's final results.
              </Typography>
              <Button
                onClick={toggleDrawer(true)}
                variant="contained"
                sx={{
                  backgroundColor: "rgb(184, 0, 64)",
                  color: "white",
                  padding: "12px 20px",
                  fontSize: "26px",
                  fontWeight: "700",
                  borderRadius: "35px",
                  width: "100%",
                  maxWidth: "250px",
                  textTransform: "capitalize",
                  marginLeft: "35px",
                  ":hover": {
                    backgroundColor: "rgb(184, 0, 64)",
                    color: "white",
                    borderRadius: "35px",
                  },
                }}
              >
                Get in Touch
              </Button>
            </Box>
            <GetinTouch open={open} toggleDrawer={toggleDrawer(false)} />
          </Box>
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              mt: "30px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "70px",
                filter: "brightness(0%)",
                animation: "scroll 15s linear infinite",
                "@keyframes scroll": {
                  "0%": { transform: "translateX(0)" },
                  "100%": { transform: "translateX(-100%)" },
                },
              }}
            >
              {[
                "https://cdn.prod.website-files.com/6033a386edbf915204542100/65d5761bf5e597cf4aaaaec5_avon-p.png",
                "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0acc1a82cef1814455_partner-logo-alyve.png",
                "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0a69ae4d60492dfec5_partner-logo-obaku.png",
                "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0adf998299c0037368_partner-logo-tbi.png",
                "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0a8e795f829f5bdf37_partner-logo-karmaluck-p-500.png",
                "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0a7c43e75852d2800f_partner-logo-banana.png",
                "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0abe913dce288194a3_partner-logo-giordano-p-500.png",
                "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0aa05664372ddabf2b_partner-logo-ds.png",
                "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0bfe3715263a6c2b51_partner-logo-ingarden.png",
              ]
                .concat([
                  "https://cdn.prod.website-files.com/6033a386edbf915204542100/65d5761bf5e597cf4aaaaec5_avon-p.png",
                  "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0acc1a82cef1814455_partner-logo-alyve.png",
                  "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0a69ae4d60492dfec5_partner-logo-obaku.png",
                  "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0adf998299c0037368_partner-logo-tbi.png",
                  "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0a8e795f829f5bdf37_partner-logo-karmaluck-p-500.png",
                  "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0a7c43e75852d2800f_partner-logo-banana.png",
                  "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0abe913dce288194a3_partner-logo-giordano-p-500.png",
                  "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0aa05664372ddabf2b_partner-logo-ds.png",
                  "https://cdn.prod.website-files.com/6033a386edbf915204542100/65cf0a0bfe3715263a6c2b51_partner-logo-ingarden.png",
                ]) // Duplicate array to loop seamlessly
                .map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`logo-${index}`}
                    style={{
                      marginRight: "20px",
                      width: "130px",
                      height: "130px",
                      objectFit: "contain",
                    }}
                  />
                ))}
            </Box>
          </Box>
        </Box>
        <TestimonialsSection />
      </Box>
    </Box>
  );
}

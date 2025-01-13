import {
  Box,
  CircularProgress,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import AppContainer from "../../Shared-fronend/AppContainer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CountUp from "react-countup";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MyForm from "./ServiceForm";
import ProjectData from "../Data/ProjectData";
import ProjectsComponent from "../Homepage/ProjectsComponent";
import routes from "../../routes/routes";

// Define the FAQ structure
interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  description: string; // Add a description field
  faqs: FAQ[]; // The list of FAQ objects
}

// Define the FAQ data type
type FAQData = {
  [key: string]: FAQCategory; // Use an index signature to allow dynamic key access
};

export default function ServicePage() {
  const [selectedOption, setSelectedOption] = useState<string>(
    "Shopify Design Agency"
  );
  const [loading, setLoading] = useState(false);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // Track the expanded FAQ item

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate 1-second loading time
    return () => clearTimeout(timer);
  }, [selectedOption]);

  // FAQ data for each dropdown option
  const faqData: FAQData = {
    "Shopify Design Agency": {
      description:
        "We specialize in creating custom designs for Shopify stores, helping you enhance the user experience and branding.",
      faqs: [
        {
          question: "What is a Shopify Design Agency?",
          answer:
            "A Shopify Design Agency specializes in creating custom designs for Shopify stores to enhance user experience and branding.",
        },
        {
          question: "Why choose us?",
          answer:
            "We deliver aesthetically pleasing designs tailored to your brand's identity.",
        },
      ],
    },
    "Shopify Development Agency": {
      description:
        "We focus on building, customizing, and maintaining Shopify stores to ensure your business runs smoothly.",
      faqs: [
        {
          question: "What is a Shopify Development Agency?",
          answer:
            "A Shopify Development Agency focuses on building, customizing, and maintaining Shopify stores.",
        },
        {
          question: "What services do we offer?",
          answer:
            "We offer theme development, app integration, and store customization.",
        },
      ],
    },
    "Shopify Marketing Agency": {
      description:
        "We help promote Shopify stores through SEO, social media marketing, and email campaigns to drive traffic and increase conversions.",
      faqs: [
        {
          question: "What does a Shopify Marketing Agency do?",
          answer:
            "We specialize in promoting Shopify stores through SEO, social media marketing, and email campaigns.",
        },
        {
          question: "How can we help your store grow?",
          answer:
            "By driving targeted traffic and increasing conversions through effective marketing strategies.",
        },
      ],
    },
    "Shopify Store Setup": {
      description:
        "We offer full-service Shopify store setup, including theme installation, product setup, and payment gateway integration.",
      faqs: [
        {
          question: "What does a Shopify Marketing Agency do?",
          answer:
            "We specialize in promoting Shopify stores through SEO, social media marketing, and email campaigns.",
        },
        {
          question: "How can we help your store grow?",
          answer:
            "By driving targeted traffic and increasing conversions through effective marketing strategies.",
        },
      ],
    },
  };

  // Handle toggling the expansion of a FAQ item
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const navigate = useNavigate();

  const handleProjectClick = (id: string, type: string) => {
    navigate(`/project/${id}/${type}`);
  };

  return (
    <Box sx={{ fontFamily: "Robato", padding: "20px" }} bgcolor={"black"}>
      {/* Dropdown */}

      <Box maxWidth={1300} margin={"auto"}>
        <Typography
          mt="2rem"
          color={"#ffffff5e"}
          fontFamily={"Robato"}
          fontSize={"70px"}
        >
          Our Services{" "}
        </Typography>

        <Typography
          mt="2rem"
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

      <Stack
        maxWidth={1300}
        margin={{ xs: "2rem auto", sm: "2rem auto", md: " 4rem auto" }}
        width={"100%"}
        direction={{ xs: "column", sm: "column", md: "row" }}
        justifyContent={"space-between"}
        spacing={{ xs: 3, sm: 3, md: 0 }}
        flexWrap={"wrap"}
      >
        <Box width={"100%"} maxWidth={600} sx={{ marginTop: "4rem" }}>
          <FormControl
            sx={{
              maxWidth: 400,
              width: "100%",
              background: "rgb(37, 37, 37)",
              borderRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            }}
          >
            <Select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              displayEmpty
              sx={{
                color: "white",
                fontFamily: "Robato",

                background: "rgb(37, 37, 37)",
                "& .MuiSelect-icon": {
                  color: "white",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "rgb(37, 37, 37)",
                    color: "white",
                  },
                },
              }}
            >
              {Object.keys(faqData).map((option) => (
                <MenuItem
                  key={option}
                  value={option}
                  sx={{
                    fontFamily: "Robato",
                    borderBottom: "1px solid lightgray",
                    color: "white",
                    backgroundColor: "rgb(37, 37, 37)",
                    "&:hover": {
                      backgroundColor: "rgb(50, 50, 50)",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "rgb(50, 50, 50)",
                    },
                    padding: "15px",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                  >
                    {option}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography
            mt="2rem"
            color={"white"}
            fontFamily={"Robato"}
            fontSize={"54px"}
          >
            {selectedOption}
          </Typography>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
              }}
            >
              <CircularProgress style={{ color: "white" }} />
            </Box>
          ) : (
            <Box sx={{ marginTop: "20px" }}>
              {faqData[selectedOption]?.faqs.map((faq, index) => (
                <Box
                  key={index}
                  sx={{
                    marginBottom: "10px",
                    padding: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                    onClick={() => handleToggle(index)}
                  >
                    <Typography
                      color="white"
                      variant="subtitle1"
                      sx={{ fontWeight: "bold" }}
                    >
                      {faq.question}
                    </Typography>
                    <IconButton size="small" aria-label="expand">
                      {expandedIndex === index ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </IconButton>
                  </Box>
                  {expandedIndex === index && (
                    <Typography
                      style={{
                        maxHeight: expandedIndex === index ? "400px" : "0",
                        overflow: "hidden",
                        transition: "all 0.5s ease-in-out",
                        padding:
                          expandedIndex === index ? "1rem 3rem" : "0 3rem",
                        color: "white",
                        fontSize: "16px",
                        borderRadius: expandedIndex === index ? "4px" : "0",
                        fontFamily: "Roboto",
                      }}
                      // sx={{ marginTop: "10px" }}
                      color="white"
                    >
                      {faq.answer}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          )}

          {selectedOption && faqData[selectedOption]?.description && (
            <Typography
              mt="2rem"
              color={"white"}
              fontFamily={"Robato"}
              fontSize={"18px"}
            >
              {faqData[selectedOption]?.description}
            </Typography>
          )}

          <Typography
            mt="1rem"
            color={"white"}
            fontFamily={"Robato"}
            fontSize={"18px"}
          >
            ✅ Conversion & storytelling focused ecommerce design
          </Typography>
          <Typography
            mt="1rem"
            color={"white"}
            fontFamily={"Robato"}
            fontSize={"18px"}
          >
            ✅ Design within Shopify’s capabilities
          </Typography>
        </Box>
        <Box width={"100%"} maxWidth={600} sx={{ marginBottom: "20px" }}>
          <MyForm />
        </Box>
      </Stack>

      <AppContainer mt={"20px"} padding={"0px !important"} maxWidth={1350}>
        <Box padding={"0 20px"}>
          <Typography
            paddingLeft={{ xs: "0px", sm: "30px", lg: "0px" }}
            fontFamily={"Robato"}
            fontSize={"28px"}
            lineHeight={1.2}
            color={"white"}
          >
            Our work
          </Typography>
          <Box
            mt={"0px !important"}
            display={"flex"}
            justifyContent={{
              xs: "space-between",
              sm: "space-around",
              lg: "space-between",
            }}
            alignItems={"baseline"}
            flexDirection={{ xs: "column", sm: "row", lg: "row" }}
          >
            <Box display={"flex"} gap={"20px"}>
              <Box
                display={"flex"}
                alignItems={"baseline"}
                flexDirection={{ xs: "column", lg: "row" }}
                gap={"20px"}
              >
                <Typography
                  fontFamily={"Robato"}
                  fontSize={"70px"}
                  maxWidth={700}
                  color={"white"}
                >
                  <CountUp start={0} end={700} duration={10} />
                </Typography>
                <Typography
                  fontFamily={"Robato"}
                  fontSize={"22px"}
                  textAlign={"center"}
                  maxWidth={700}
                  color={"white"}
                >
                  Completed projects
                </Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", lg: "row" }}
                alignItems={"baseline"}
                gap={"20px"}
              >
                <Typography
                  fontFamily={"Robato"}
                  fontSize={"70px"}
                  maxWidth={700}
                  color={"white"}
                >
                  <CountUp start={0} end={65} duration={10} />
                </Typography>
                <Typography
                  fontFamily={"Robato"}
                  fontSize={"22px"}
                  textAlign={"center"}
                  maxWidth={700}
                  color={"white"}
                >
                  Clients
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              padding={{ xs: "20px", lg: "0px" }}
              alignItems={"center"}
              gap={"10px"}
            >
              <Typography
                fontSize={"18px"}
                color={"white"}
                fontFamily={"Robato"}
              >
                View all case studies
              </Typography>
              <Link to={routes.WORK}>
                <IconButton
                  sx={{
                    background: "rgb(184, 0, 64)",
                    color: "white",
                    ":hover": {
                      background: "rgb(184, 0, 64)",
                    },
                  }}
                >
                  <ChevronRightIcon />
                </IconButton>
              </Link>
            </Box>
          </Box>
        </Box>
      </AppContainer>

      {ProjectData.slice(0, 1).map((project, index) => (
        <ProjectsComponent
          key={index}
          flexDirection={project.flexDirection}
          Bigimg={project.Bigimg}
          Smallimg={project.Smallimg}
          altText={project.altText}
          title1={project.title1}
          title2={project.title2}
          rating={project.rating}
          status1={project.status1}
          status2={project.status2}
          bigChips={project.bigChips}
          smallChips={project.smallChips}
          BigProjectClick={() => handleProjectClick(project.id, project.title1)}
          smallProjectClick={() =>
            handleProjectClick(project.id, project.title2)
          }
        />
      ))}

      {/* FAQ Section */}
    </Box>
  );
}

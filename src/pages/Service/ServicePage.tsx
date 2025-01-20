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
    "Shopify Store Setup"
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
    "Shopify Store Setup": {
      description:
        "We provide end-to-end Shopify store setup services, including theme installation, product configuration, and payment gateway integration. Our goal is to get your online store up and running quickly and efficiently.",
      faqs: [
        {
          question: "What does the Shopify Store Setup service include?",
          answer:
            "Our Shopify Store Setup service covers everything from installing a theme and setting up your products to integrating payment gateways and shipping methods.",
        },
        {
          question: "How long does it take to set up a Shopify store?",
          answer:
            "Depending on the project’s complexity, it can take anywhere from a few days to a couple of weeks. We ensure a smooth and timely setup process.",
        },
      ],
    },

    "Shopify Theme Customization": {
      description:
        "We customize Shopify themes to fit your brand’s identity. Whether it’s modifying an existing theme or adding new features, we make sure your store stands out.",
      faqs: [
        {
          question: "What is Shopify Theme Customization?",
          answer:
            "Shopify Theme Customization involves modifying the design and functionality of an existing theme to better match your brand and business needs.",
        },
        {
          question: "Can I customize my Shopify theme without coding?",
          answer:
            "While Shopify allows for basic customizations without coding, our team can handle more advanced customizations to ensure your store is unique and professional.",
        },
      ],
    },

    "Shopify Custom Theme Development": {
      description:
        "We build fully custom Shopify themes from scratch, ensuring your store is unique, fast, and optimized for conversions. Perfect for businesses that need a distinctive online presence.",
      faqs: [
        {
          question: "What is a custom Shopify theme?",
          answer:
            "A custom Shopify theme is built from the ground up to match your brand’s unique needs, providing complete control over design and functionality.",
        },
        {
          question:
            "Why should I choose a custom theme over a pre-built theme?",
          answer:
            "Custom themes offer flexibility and a unique design that aligns with your brand. They’re optimized for performance, SEO, and scalability.",
        },
      ],
    },

    "Shopify Migration": {
      description:
        "We help businesses migrate their online stores to Shopify from other platforms like WooCommerce, Magento, and BigCommerce. Our migration process ensures your data and design remain intact.",
      faqs: [
        {
          question: "What is Shopify Migration?",
          answer:
            "Shopify Migration is the process of transferring your existing e-commerce store from another platform to Shopify while ensuring all data, including products, customers, and orders, is preserved.",
        },
        {
          question: "How do you ensure a smooth migration process?",
          answer:
            "We use a detailed migration plan that includes data transfer, design replication, and SEO preservation to ensure your store doesn’t lose traffic or functionality during the migration.",
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
        justifyContent={{ xs: "center", sm: "center", md: "space-between" }}
        alignItems={{ xs: "center", sm: "center", md: "self-start" }}
        spacing={{ xs: 3, sm: 3, md: 4 }}
        // flexWrap={"wrap"}
      >
        <Box
          width={"100%"}
          maxWidth={{ xs: "100%", sm: "100%", md: 600 }}
          sx={{ marginTop: "4rem" }}
        >
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
                        <IconButton
                          sx={{
                            background: "rgb(184, 0, 64)",
                            color: "white",
                            ":hover": {
                              background: "rgb(184, 0, 64)",
                            },
                          }}
                        >
                          {" "}
                          <ExpandLessIcon />{" "}
                        </IconButton>
                      ) : (
                        <IconButton
                          sx={{
                            background: "rgb(184, 0, 64)",
                            color: "white",
                            ":hover": {
                              background: "rgb(184, 0, 64)",
                            },
                          }}
                        >
                          {" "}
                          <ExpandMoreIcon />{" "}
                        </IconButton>
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
        <Box
          width={"100%"}
          maxWidth={{ xs: "100%", sm: "100%", md: 600 }}
          sx={{ marginBottom: "20px" }}
        >
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

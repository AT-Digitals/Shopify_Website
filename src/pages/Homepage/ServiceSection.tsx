import { Box, IconButton, Typography } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

const ServicesWeProviding = [
  {
    serviceName: "Shopify Design + Build",
    Description:
      " We specialize in crafting world-class Shopify Plus and Shopify stores.Our approach combines psychology-based strategies, captivating aesthetics, and modern technology to boost customer experience and conversion.",
    link: "/",
  },
  {
    serviceName: "Shopify Theme Customisation",
    Description:
      " We specialize in crafting world-class Shopify Plus and Shopify stores.Our approach combines psychology-based strategies, captivating aesthetics, and modern technology to boost customer experience and conversion.",
    link: "/",
  },
  {
    serviceName: "Shopify Custom theme",
    Description:
      " We specialize in crafting world-class Shopify Plus and Shopify stores.Our approach combines psychology-based strategies, captivating aesthetics, and modern technology to boost customer experience and conversion.",
    link: "/",
  },
  {
    serviceName: "Migrate to Shopify",
    Description:
      "Shopify is the world-leading e-Commerce platform for creating, managing, and growing your online store. Leverage craftberry’s expertise when migrating to Shopify for a seamless and reliable transition to more sales.",
    link: "/",
  },
];

export default function ServiceSection() {
  return (
    <Box maxWidth={1350} margin={"auto"}>
      <Typography
        fontFamily={"Robato"}
        fontSize={"22px"}
        textAlign={"start"}
        lineHeight={1.2}
        color={"white"}
      >
        Services
      </Typography>

      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        {ServicesWeProviding.map((service, index) => (
          <Box key={index} mt={2}>
            <Typography
              fontFamily={"Robato"}
              fontSize={"60px"}
              textAlign={"start"}
              lineHeight={1.2}
              color={"white"}
            >
              {service.serviceName}{" "}
            </Typography>
            <Typography
              fontFamily={"Robato"}
              fontSize={"20px"}
              textAlign={"start"}
              maxWidth={550}
              color={"white"}
            >
              {service.Description}
            </Typography>
            <Box mt={2} display={"flex"} alignItems={"center"} gap={"10px"}>
              <Typography
                fontSize={"18px"}
                color={"white"}
                fontFamily={"Robato"}
              >
                View all case studies
              </Typography>
              <Link to={service.link}>
                <IconButton
                  sx={{
                    border: "1px solid white",
                  }}
                >
                  <ChevronRightIcon
                    style={{
                      color: "white",
                    }}
                  />
                </IconButton>
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

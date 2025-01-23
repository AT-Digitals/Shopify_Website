import { Box, IconButton, Typography } from "@mui/material";

import BrushIcon from "@mui/icons-material/Brush";
import BuildIcon from "@mui/icons-material/Build";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import InsightsIcon from "@mui/icons-material/Insights";
import { Link } from "react-router-dom";

const ServicesWeProviding = [
  {
    serviceName: "Shopify Design + Build",
    Description:
      " We specialize in crafting world-class Shopify Plus and Shopify stores.Our approach combines psychology-based strategies, captivating aesthetics, and modern technology to boost customer experience and conversion.",
    link: "https://www.shopify.com/blog/diy-ecommerce-store-design-as-a-beginner",
    iCon: (
      <BuildIcon
        style={{
          color: "white",
          fontSize: "100px",
        }}
      />
    ),
  },
  {
    serviceName: "Shopify Theme Customisation",
    Description:
      " We specialize in crafting world-class Shopify Plus and Shopify stores.Our approach combines psychology-based strategies, captivating aesthetics, and modern technology to boost customer experience and conversion.",
    link: "https://help.shopify.com/en/manual/online-store/themes/customizing-themes",
    iCon: (
      <BrushIcon
        style={{
          color: "white",
          fontSize: "100px",
        }}
      />
    ),
  },
  {
    serviceName: "Shopify Custom theme",
    Description:
      " We specialize in crafting world-class Shopify Plus and Shopify stores.Our approach combines psychology-based strategies, captivating aesthetics, and modern technology to boost customer experience and conversion.",
    link: "https://help.shopify.com/en/manual/online-store/themes/customizing-themes",
    iCon: (
      <DashboardCustomizeIcon
        style={{
          color: "white",
          fontSize: "100px",
        }}
      />
    ),
  },
  {
    serviceName: "Migrate to Shopify",
    Description:
      "Shopify is the world-leading e-Commerce platform for creating, managing, and growing your online store. Leverage craftberry’s expertise when migrating to Shopify for a seamless and reliable transition to more sales.",
    link: "https://help.shopify.com/en/manual/migrating-to-shopify",
    iCon: (
      <InsightsIcon
        style={{
          color: "white",
          fontSize: "100px",
        }}
      />
    ),
  },
];

export default function ServiceSection() {
  return (
    <Box maxWidth={1350} padding={"0 20px"} margin={"auto"}>
      <Typography
        fontFamily={"'Codec pro', sans-serif"}
        fontSize={"30px"}
        textAlign={"start"}
        lineHeight={1.2}
        color={"white"}
      >
        Services
      </Typography>

      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        {ServicesWeProviding.map((service, index) => (
          <Box
            display={"flex"}
            justifyContent={{ xs: "center", sm: "center", md: "space-between" }}
            alignItems={"center"}
            flexWrap={"wrap"}
            key={index}
          >
            <Box mt={2}>
              <Typography
                fontFamily={"'Codec pro', sans-serif"}
                fontSize={{ xs: "32px", sm: "32px", md: "60px" }}
                textAlign={"start"}
                lineHeight={1.2}
                color={"white"}
              >
                {service.serviceName}{" "}
              </Typography>
              <Typography
                fontFamily={"'Codec pro', sans-serif"}
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
                  fontFamily={"'Codec pro', sans-serif"}
                >
                  Learn more
                </Typography>
                <Link to={service.link}>
                  <IconButton
                    sx={{
                      background: "rgb(184, 0, 64)",
                      color: "white",
                      width: "31px",
                      height: "31px",
                      transition: "width 0.3s ease",

                      ":hover": {
                        background: "rgb(184, 0, 64)",
                        width: "51px",
                        borderRadius: "30px",
                      },
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
            <Box>
              <IconButton
                sx={{
                  animation: "shake 2s infinite",
                  "@keyframes shake": {
                    "0%, 100%": {
                      transform: "translateX(0)",
                    },
                    "25%": {
                      transform: "translateX(-45px)",
                    },
                    "50%": {
                      transform: "translateX(4px)",
                    },
                    "75%": {
                      transform: "translateX(-45px)",
                    },
                  },
                }}
              >
                {service.iCon}
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

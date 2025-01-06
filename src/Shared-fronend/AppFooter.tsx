import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import AppContainer from "./AppContainer";
import Colors from "./Colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import routes from "../routes/routes";
import styled from "@emotion/styled";

interface FooterProps {
  activeTab: string;
  setActiveTab: (event: any) => void;
}

const StyleLink = styled(Link)({
  color: "#787878",
  fontSize: "18px",
  fontFamily: `"ProximaNovaRegular", sans-serif`,
  fontWeight: 400,
  textUnderlineOffset: "5px",
  textDecoration: "none",
  "&:hover": {
    color: Colors.WHITE,
  },
});

const StyleLink1 = styled(Link)({
  color: "#787878",
  fontSize: "18px",
  textUnderlineOffset: "5px",
  fontFamily: `"ProximaNovaRegular", sans-serif`,
  fontWeight: 400,
  "&:hover": {
    color: Colors.WHITE,
  },
});

export default function AppFooter({
  activeTab,
  setActiveTab,
}: Readonly<FooterProps>) {
  const isSmScreen = useMediaQuery("(max-width:950px)");
  const services = [
    { linkname: "Home", url: routes.ROOT },
    { linkname: "About Us", url: routes.ROOT },
    { linkname: "Work", url: routes.ROOT },

    { linkname: "Contact Us", url: routes.ROOT },
  ];
  const handleMenuClick = (menu: string) => {
    localStorage.setItem(activeTab, menu);
    setActiveTab(menu);
  };

  const location = useLocation();

  return (
    <Box bgcolor={Colors.BLACK}>
      <Box borderBottom="1px solid #272727">
        <AppContainer paddingLeft={0} paddingRight={0}>
          <Stack
            padding={"4rem 2rem"}
            direction={isSmScreen ? "column" : "row"}
            justifyContent={isSmScreen ? "center" : "space-between"}
            alignItems="center"
          >
            <a href={routes.ROOT}>
              <img
                src="shopi"
                alt="alterknit logo"
                loading="lazy"
                width={200}
                height={40}
              />
            </a>
            <Stack
              paddingTop={"15px"}
              spacing={3}
              alignItems={isSmScreen ? "center" : "end"}
              textAlign={isSmScreen ? "center" : "end"}
            >
              <ul
                style={{
                  flexWrap: "wrap",
                  justifyContent: "center",
                  display: "flex",
                  gap: "1rem",
                  padding: 0,
                  marginTop: "20px",
                }}
              >
                {services.map((service, index) => (
                  <li
                    key={index}
                    style={{
                      listStyleType: "none",
                    }}
                  >
                    <StyleLink
                      to={service.url}
                      onClick={() => handleMenuClick(service.url)}
                      style={{
                        color:
                          location.pathname === service.url ? Colors.WHITE : "",
                      }}
                    >
                      {service.linkname}
                    </StyleLink>
                  </li>
                ))}
              </ul>

              <Stack direction="row" spacing={3}>
                <ul
                  style={{
                    flexWrap: "wrap",
                    justifyContent: "center",
                    display: "flex",
                    gap: "1rem",
                    padding: 0,
                  }}
                >
                  <li
                    style={{
                      listStyleType: "none",
                    }}
                  >
                    <StyleLink to="mailto:orders@alterknitnewyork.com">
                      {" "}
                      shopify.com
                    </StyleLink>
                  </li>
                  <li
                    style={{
                      listStyleType: "none",
                    }}
                  >
                    <StyleLink to="tel:+12124736363"> 1224567890</StyleLink>
                  </li>
                </ul>
              </Stack>
            </Stack>
          </Stack>
        </AppContainer>
      </Box>

      <Box
        display={"flex"}
        justifyContent={isSmScreen ? "center" : "flex-end"}
        p={isSmScreen ? "2rem" : "4rem"}
        maxWidth={1340}
        gap={{ xs: "2rem", sm: "2rem", md: "4rem", lg: "18rem" }}
        margin="0 auto"
        marginLeft={"-26px"}
        flexWrap={"wrap"}
      >
        <Stack
          flexWrap={"wrap"}
          gap={isSmScreen ? "1rem" : "3rem"}
          justifyContent={"center"}
          direction="row"
        >
          <Box
            flexWrap={"wrap"}
            justifyContent={"center"}
            display={"flex"}
            gap={"1rem"}
          >
            <Typography
              fontSize={isSmScreen ? "16px" : "18px"}
              fontFamily={`"ProximaNovaRegular", sans-serif`}
              fontWeight={400}
              color={"#787878"}
              textAlign="center"
            >
              Copyright
            </Typography>
            <Typography
              fontSize={isSmScreen ? "16px" : "18px"}
              color={"#787878"}
              textAlign="center"
              fontFamily={`"ProximaNovaRegular", sans-serif`}
              fontWeight={400}
            >
              Shopify
            </Typography>
            <StyleLink1
              to={routes.ROOT}
              style={{
                color: location.pathname === routes.ROOT ? "#787878" : "",
              }}
            >
              Privacy Policy
            </StyleLink1>
            <StyleLink1
              to={routes.ROOT}
              style={{
                color: location.pathname === routes.ROOT ? "#787878" : "",
              }}
            >
              Terms and Conditions
            </StyleLink1>
          </Box>
        </Stack>
        <Box display={"flex"} gap={"2rem"}>
          <StyleLink1
            to="https://www.facebook.com/AlterKnitNY/"
            target="_blank"
          >
            {" "}
            <FacebookIcon />
          </StyleLink1>
          <StyleLink1
            to="https://www.instagram.com/alterknitnewyork/"
            target="_blank"
          >
            <InstagramIcon />
          </StyleLink1>
        </Box>
      </Box>
    </Box>
  );
}

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
        <AppContainer maxWidth={1500} paddingLeft={0} paddingRight={0}>
          <Stack
            padding={"4rem 2rem"}
            direction={isSmScreen ? "column" : "row"}
            justifyContent={isSmScreen ? "center" : "space-between"}
            alignItems="center"
          >
            <a href={routes.ROOT}>
              <svg
                color="white"
                width="163"
                height="36"
                viewBox="0 0 163 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="paint0_linear_2367_217"
                    x1="10.5"
                    y1="0"
                    x2="10.5"
                    y2="36"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.08" stop-color="#9999FF"></stop>
                    <stop offset="0.32" stop-color="#FF3355"></stop>
                    <stop offset="0.64"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M20.2243 7.34952V0L0.766946 7.36071L0.75 36L20.25 28.6379V21.2956L7.52015 26.1817V12.2713L20.2243 7.34952Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M49.192 20.0655C48.818 21.7485 47.628 22.6155 45.962 22.6155C43.99 22.6155 42.477 20.9495 42.477 17.9575C42.477 14.9825 44.024 13.3845 45.979 13.3845C47.577 13.3845 48.784 14.2685 49.158 15.9345H51.232C50.739 13.1805 48.784 11.6165 46.047 11.6165C42.477 11.6165 40.25 14.0815 40.25 17.9575C40.25 21.8165 42.341 24.3835 45.945 24.3835C48.784 24.3835 50.756 22.8195 51.266 20.0655H49.192Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M54.9448 17.9915C54.9448 14.9995 56.5598 13.3845 58.5998 13.3845C60.6398 13.3845 62.2548 14.9995 62.2548 17.9915C62.2548 20.9835 60.6398 22.6155 58.5998 22.6155C56.5598 22.6155 54.9448 20.9835 54.9448 17.9915ZM64.4818 17.9915C64.4818 14.2005 62.2208 11.6165 58.5998 11.6165C54.9788 11.6165 52.7178 14.2005 52.7178 17.9915C52.7178 21.7825 54.9788 24.3835 58.5998 24.3835C62.2208 24.3835 64.4818 21.7825 64.4818 17.9915Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M73.9044 24.1625L77.0324 14.1835V24.1625H79.1404V11.8375H75.7914L72.8164 21.6635L69.8244 11.8375H66.4754V24.1625H68.5834V14.1835L71.7114 24.1625H73.9044Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M89.045 24.1625L92.173 14.1835V24.1625H94.281V11.8375H90.932L87.957 21.6635L84.965 11.8375H81.616V24.1625H83.724V14.1835L86.852 24.1625H89.045Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M96.7567 24.1625H105.478V22.3435H98.9157V18.7225H105.121V16.9375H98.9157V13.6395H105.478V11.8375H96.7567V24.1625Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M114.713 24.1625H117.144L114.322 18.5695C115.852 18.0425 116.634 16.9715 116.634 15.3905C116.634 12.6535 114.781 11.8375 111.143 11.8375H107.216V24.1625H109.375V18.9775H111.466C111.687 18.9775 111.908 18.9775 112.112 18.9605L114.713 24.1625ZM111.449 13.5715C113.149 13.5715 114.424 13.7925 114.424 15.4075C114.424 16.8865 113.37 17.2605 111.517 17.2605H109.375V13.5715H111.449Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M126.871 20.0655C126.497 21.7485 125.307 22.6155 123.641 22.6155C121.669 22.6155 120.156 20.9495 120.156 17.9575C120.156 14.9825 121.703 13.3845 123.658 13.3845C125.256 13.3845 126.463 14.2685 126.837 15.9345H128.911C128.418 13.1805 126.463 11.6165 123.726 11.6165C120.156 11.6165 117.929 14.0815 117.929 17.9575C117.929 21.8165 120.02 24.3835 123.624 24.3835C126.463 24.3835 128.435 22.8195 128.945 20.0655H126.871Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M130.757 24.1625H139.478V22.3435H132.916V18.7225H139.121V16.9375H132.916V13.6395H139.478V11.8375H130.757V24.1625Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M146.333 20.4905V18.6715H140.791V20.4905H146.333Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M148.201 11.8375V19.0285C148.201 23.0065 149.714 24.3835 153.25 24.3835C156.837 24.3835 158.282 22.8535 158.282 18.9605V11.8375H156.123V19.0455C156.123 21.3065 155.511 22.6155 153.25 22.6155C150.955 22.6155 150.36 21.3745 150.36 19.1135V11.8375H148.201Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M162.732 11.8375H160.573V24.1625H162.732V11.8375Z"
                  fill="currentColor"
                ></path>
              </svg>
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

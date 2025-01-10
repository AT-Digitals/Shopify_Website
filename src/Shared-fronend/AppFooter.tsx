import {
  Box,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import styled from "@emotion/styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import routes from "../routes/routes";
import AppContainer from "./AppContainer";
import Colors from "./Colors";

interface FooterProps {
  activeTab: string;
  setActiveTab: (event: any) => void;
}

const StyleLink = styled(Link)({
  color: "#787878",
  fontSize: "14px",
  fontFamily: "Roboto",
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
  fontFamily: "Roboto",
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

  return (
    <Box bgcolor={Colors.BLACK}>
      <Box borderBottom="1px solid #272727">
        <AppContainer maxWidth={1300} padding={"0px !important"}>
          <Stack
            padding={"4rem 2rem"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems="start"
            flexWrap={"wrap"}
          >
            <div>
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
              <p
                style={{
                  maxWidth: 300,
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  color: "#787878",
                }}
              >
                We are a leading Shopify Agency, crafted by top-tier Shopify
                Experts. Our expertise spans from store initiation to custom
                theme development
              </p>
              <Box display={"flex"} gap={"10px"}>
                <StyleLink1
                  to="https://www.facebook.com/AlterKnitNY/"
                  target="_blank"
                >
                  {" "}
                  <FacebookIcon
                    style={{
                      color: "white",
                    }}
                  />
                </StyleLink1>
                <StyleLink1
                  to="https://www.instagram.com/alterknitnewyork/"
                  target="_blank"
                >
                  <InstagramIcon
                    style={{
                      color: "white",
                    }}
                  />
                </StyleLink1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  width="24px"
                  height="24px"
                  viewBox="0 0 32 32"
                >
                  <path d="M20.448 31.974l9.625-2.083c0 0-3.474-23.484-3.5-23.641s-0.156-0.255-0.281-0.255c-0.13 0-2.573-0.182-2.573-0.182s-1.703-1.698-1.922-1.88c-0.057-0.052-0.099-0.078-0.161-0.099l-1.219 28.141zM15.615 15.073c0 0-1.083-0.563-2.365-0.563-1.932 0-2.005 1.203-2.005 1.521 0 1.641 4.318 2.286 4.318 6.172 0 3.057-1.922 5.010-4.542 5.010-3.141 0-4.719-1.953-4.719-1.953l0.859-2.781c0 0 1.661 1.422 3.042 1.422 0.901 0 1.302-0.724 1.302-1.245 0-2.156-3.542-2.255-3.542-5.807-0.047-2.984 2.094-5.891 6.438-5.891 1.677 0 2.5 0.479 2.5 0.479l-1.26 3.625zM14.896 1.104c0.177 0 0.359 0.052 0.536 0.182-1.313 0.62-2.75 2.188-3.344 5.323-0.875 0.286-1.724 0.542-2.516 0.771 0.688-2.38 2.359-6.26 5.323-6.26zM16.542 5.036v0.182c-1.005 0.307-2.115 0.646-3.193 0.979 0.62-2.37 1.776-3.526 2.781-3.958 0.255 0.667 0.411 1.568 0.411 2.797zM17.26 2.063c0.922 0.094 1.521 1.151 1.901 2.339-0.464 0.151-0.979 0.307-1.542 0.484v-0.333c0-1.005-0.13-1.828-0.359-2.495zM21.25 3.781c-0.031 0-0.083 0.026-0.104 0.026-0.026 0-0.385 0.099-0.953 0.281-0.563-1.646-1.568-3.161-3.344-3.161h-0.156c-0.51-0.646-1.135-0.927-1.672-0.927-4.141 0-6.12 5.172-6.74 7.797-1.594 0.484-2.75 0.844-2.88 0.896-0.901 0.286-0.927 0.313-1.031 1.161-0.099 0.615-2.438 18.75-2.438 18.75l18.078 3.396z"></path>
                </svg>
              </Box>
            </div>

            <ul
              style={{
                flexWrap: "wrap",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: 0,
                marginTop: "0px",
                color: "white",
              }}
            >
              <Typography color={"white"}>Service We Provide</Typography>
              <li
                style={{
                  listStyleType: "none",
                  fontSize: "14px",
                }}
              >
                <StyleLink to={""}>Shopify Store Setup</StyleLink>
              </li>
              <li
                style={{
                  listStyleType: "none",
                  fontSize: "14px",
                }}
              >
                <StyleLink to={""}>Shopify Theme Customisation</StyleLink>
              </li>
              <li
                style={{
                  listStyleType: "none",
                  fontSize: "14px",
                }}
              >
                <StyleLink to={""}>Shopify Custom theme</StyleLink>
              </li>
              <li
                style={{
                  listStyleType: "none",
                  fontSize: "14px",
                }}
              >
                <StyleLink to={""}>Shopify Migration</StyleLink>
              </li>
            </ul>
            <ul
              style={{
                flexWrap: "wrap",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: 0,
                marginTop: "0px",
              }}
            >
              <Typography color={"white"}>About us</Typography>

              <li
                style={{
                  listStyleType: "none",
                  fontSize: "14px",
                }}
              >
                <StyleLink to={""}>Work</StyleLink>
              </li>
              <li
                style={{
                  listStyleType: "none",
                  fontSize: "14px",
                }}
              >
                <StyleLink to={""}>Industries</StyleLink>
              </li>
              <li
                style={{
                  listStyleType: "none",
                  fontSize: "14px",
                }}
              >
                <StyleLink to={""}>Privacy Policy</StyleLink>
              </li>
              <li
                style={{
                  listStyleType: "none",
                  fontSize: "14px",
                }}
              >
                <StyleLink to={""}>Terms and Conditions</StyleLink>
              </li>
            </ul>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography mb={2} color={"white"}>
                Newsletter Sign Up
              </Typography>
              <Typography color={"white"}>Email</Typography>
              <TextField
                variant="standard"
                sx={{
                  marginTop: 1,
                  color: "white",
                  border: "none",
                  background: "white",
                  padding: "0 15px",
                }}
                placeholder="email"
              />
              <Typography
                border={"1px solid white"}
                borderRadius={"50px"}
                padding={"10px 15px"}
                fontSize="17px"
                fontWeight={400}
                color={"white"}
                textAlign={"center"}
                sx={{
                  cursor: "pointer",
                  marginTop: 3,
                }}
              >
                Send
              </Typography>{" "}
            </Box>

            {/* <li
                style={{
                  listStyleType: "none",
                }}
              >
                <StyleLink to={""}>Email: info@comerce.com</StyleLink>
              </li>
              <li
                style={{
                  listStyleType: "none",
                }}
              >
                <StyleLink to={""}>+91 1234567890</StyleLink>
              </li> */}

            {/* <ul
              style={{
                flexWrap: "wrap",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: 0,
                marginTop: "0px",
              }}
            >
              <Typography color={"white"}> Get in Touch</Typography>

              <li
                style={{
                  listStyleType: "none",
                }}
              >
                <StyleLink to={""}>Shopify Custom theme</StyleLink>
              </li>
              <li
                style={{
                  listStyleType: "none",
                }}
              >
                <StyleLink to={""}>Shopify Migration</StyleLink>
              </li>
            </ul> */}
          </Stack>
        </AppContainer>
      </Box>

      <Box padding={"2rem 0px"}>
        <Typography
          fontSize={isSmScreen ? "16px" : "18px"}
          fontFamily="Robatto"
          fontWeight={400}
          color={"#787878"}
          textAlign="center"
        >
          © 2025 All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

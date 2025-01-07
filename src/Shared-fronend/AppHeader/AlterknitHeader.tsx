import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  TextField,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AppContainer from "../AppContainer";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import React from "react";
import routes from "../../routes/routes";
import { useState } from "react";

const HeaderLink = styled("a")`
  text-decoration: none;
  position: relative;
  font-size: 16px;
  color: graytext;
  font-weight: 900;

  &:hover {
    color: white;
    font-weight: 900;
  }
`;

interface HeaderProps {
  setActiveTab: (event: any) => void;
  activeTab: string;
}

export default function AlterknitHeader({
  setActiveTab,
  activeTab,
}: Readonly<HeaderProps>) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const services = [
    { linkname: "Home", url: routes.ROOT },
    { linkname: "About", url: routes.ABOUT },
    { linkname: "Work", url: "/work" },
    { linkname: "Services", url: "/Service" },
    { linkname: "Industries", url: "/Indus" },
  ];

  const handleMenuClick = (menu: string) => {
    setActiveTab(menu);
  };
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box
      bgcolor={"black"}
      width="100%"
      borderBottom={"1px solid black"}
      display={{ xs: "none", sm: "none", md: "flex", lg: "flex" }}
    >
      <AppContainer maxWidth={1300}>
        <Stack
          pt={3}
          pb={3}
          direction={isSmallScreen ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
          spacing={isSmallScreen ? 2 : 5}
        >
          <Box>
            <Link to={routes.ROOT} onClick={() => handleMenuClick(routes.ROOT)}>
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
            </Link>
          </Box>

          <Stack
            whiteSpace="nowrap"
            alignItems="center"
            spacing={isSmallScreen ? 2 : 4}
            direction={isSmallScreen ? "column" : "row"}
          >
            {services.map((service, index) => (
              <HeaderLink
                href={service.url}
                onClick={() => handleMenuClick(service.url)}
                key={index}
                style={{
                  color: activeTab === service.url ? "white" : "#ffffff91",
                  textDecoration:
                    activeTab === service.linkname ? "underline" : "none",
                }}
              >
                <Typography fontSize="17px" fontWeight={400}>
                  {service.linkname}
                </Typography>
              </HeaderLink>
            ))}
            <Typography
              onClick={toggleDrawer(true)}
              border={"1px solid white"}
              borderRadius={"50px"}
              padding={"10px 15px"}
              fontSize="17px"
              fontWeight={400}
              color={"white"}
              sx={{
                cursor: "pointer",
              }}
            >
              Get In Touch
            </Typography>
          </Stack>
        </Stack>
      </AppContainer>
      <Drawer anchor="right" open={open}>
        <Box
          sx={{
            padding: "10px 40px",
            backgroundColor: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "start",
            width: 600, // Set the drawer width here
            maxWidth: "100%", // Responsive for smaller screens
            margin: "0 auto", // Center the drawer horizontally
          }}
        >
          <Box width={"100%"} display={"flex"} justifyContent={"end"}>
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{
                background: "lightgray",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          {/* Title */}
          <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
            <Typography fontSize={"70px"} variant="h6" gutterBottom>
              Let's talk
            </Typography>
          </Box>

          {/* Form Fields */}
          <Box sx={{ width: "100%", maxWidth: 600 }}>
            <Box display={"flex"} gap={"10px"}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
              />
            </Box>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />

            {/* Submit Button */}
            <Button
              variant="contained"
              fullWidth
              style={{
                backgroundColor: "black",
                color: "white",
                marginTop: "20px",
                padding: "10px 0",
                fontSize: "15px",
                maxWidth: 150,
                borderRadius: "50pc",
                textTransform: "none",
              }}
            >
              Send Request
            </Button>
            <Typography pt={"2rem "} fontSize={"20px"}>
              Prefer email contact?
            </Typography>

            <Box display={"flex"} gap={"20px"} alignItems={"center"}>
              <p>hello@commerce-ui.com</p>
              <svg
                fill="none"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path>
              </svg>
            </Box>
            <Typography fontSize={"20px"}>Follw Us</Typography>
            <Box display={"flex"} justifyContent={"end"} gap={"10px"}>
              <IconButton
                sx={{
                  background: "lightgray",
                }}
              >
                <img src="https://cdn.sanity.io/images/jtds2dzp/production/e87794c1e41e235f3fbd66ca59c4b0f6201adc84-21x20.svg" />{" "}
              </IconButton>
              <IconButton
                sx={{
                  background: "lightgray",
                }}
              >
                <img src="https://cdn.sanity.io/images/jtds2dzp/production/3a0ab00e64b1473ee9c529cf7e608555d203ce33-21x20.svg" />{" "}
              </IconButton>
              <IconButton
                sx={{
                  background: "lightgray",
                }}
              >
                <img src="https://cdn.sanity.io/images/jtds2dzp/production/a892d584e01ac539891e17a42214cb4760cd6eda-22x20.svg" />{" "}
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

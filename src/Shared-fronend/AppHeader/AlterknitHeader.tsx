import {
  Box,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AppContainer from "../AppContainer";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";

const HeaderLink = styled("a")`
  text-decoration: none;
  position: relative;
  font-size: 16px;
  color: graytext;

  &:hover {
    color: black;
  }
`;

const StyledButton = styled(CustomButton)({
  borderRadius: "5px",
  fontSize: "18px",
  fontWeight: 600,
  padding: "16px 30px",
  textTransform: "none",
  whiteSpace: "nowrap",
  fontFamily: `"ProximaNovaSemibold", sans-serif !important`,
});

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
    { linkname: "About Us", url: routes.ABOUT },
    { linkname: "Work", url: routes.ROOT },

    { linkname: "Contact Us", url: routes.ROOT },
  ];

  const handleMenuClick = (menu: string) => {
    setActiveTab(menu);
  };

  return (
    <Box bgcolor={"white"} width="100%" borderBottom={"1px solid black"}>
      <AppContainer display={{ xs: "none", xl: "flex" }}>
        <Stack
          pt={isSmallScreen ? 3 : 4.5}
          pb={4}
          direction={isSmallScreen ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
          spacing={isSmallScreen ? 2 : 5}
        >
          <Box>
            <Link to={routes.ROOT} onClick={() => handleMenuClick(routes.ROOT)}>
              <img
                width={isSmallScreen ? 120 : 170}
                src={"Alterknit"}
                alt="alterknit"
              />
            </Link>
          </Box>

          <Stack
            whiteSpace="nowrap"
            alignItems="center"
            spacing={isSmallScreen ? 2 : 6}
            direction={isSmallScreen ? "column" : "row"}
          >
            {services.map((service, index) => (
              <HeaderLink
                href={service.url}
                onClick={() => handleMenuClick(service.url)}
                key={index}
                className="service-item"
              >
                <Typography
                  fontSize="22px"
                  fontFamily={`"ProximaNovaRegular", sans-serif`}
                  fontWeight={400}
                >
                  {service.linkname}
                </Typography>
              </HeaderLink>
            ))}
          </Stack>
          <Stack
            direction={isSmallScreen ? "column" : "row"}
            spacing={3}
            alignItems="center"
          >
            <StyledButton>Get in Touch</StyledButton>
          </Stack>
        </Stack>
      </AppContainer>
    </Box>
  );
}

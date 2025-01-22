import {
  Collapse,
  Drawer,
  List,
  ListItemButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import routes from "../../../routes/routes";
import Colors from "../../Colors";

const HeaderLink = styled("a")`
  text-decoration: none;
  position: relative;
  color: graytext;
  font-size: 14px;

  &:hover {
    color: black;
  }
`;

const StyledDrawer = styled(Drawer)({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "300px",
    boxSizing: "border-box",
    backgroundColor: Colors.BLACK,
    padding: "20px",
    "& .MuiListItemButton-root:hover": {
      backgroundColor: Colors.WHITE,
      color: Colors.WHITE,
    },
  },
});

interface AppDrawerProps {
  open: boolean;
  onClose?: () => void;
  setActiveTab: (event: any) => void;
  activeTab: string;
}

export default function AppDrawer({
  open,
  onClose,
  setActiveTab,
  activeTab,
}: Readonly<AppDrawerProps>) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { linkname: "Home", url: routes.ROOT },
    { linkname: "About", url: routes.ABOUT },
    { linkname: "Work", url: routes.WORK },
  ];

  const services2 = [{ linkname: "Industries", url: "/Indus" }];

  const handleMenuClick = (menu: string) => {
    localStorage.setItem(activeTab, menu);
    setActiveTab(menu);
  };

  const subServices = [
    { linkname: "Shopify Store Setup", url: "/ShopifySetup" },
    { linkname: "Shopify Theme Customisation", url: "ShopifyCustomisation" },
    { linkname: "Shopify Custom theme", url: "/ShopifyCustomtheme" },
    { linkname: "Shopify Migration", url: "/ShopifyMigration" },
  ];

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <StyledDrawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <List>
        {services.map((service, index) => (
          <HeaderLink
            href={service.url}
            onClick={() => handleMenuClick(service.url)}
            key={index}
            className="service-item"
          >
            <Typography
              fontSize="16px"
              fontFamily={"'Codec pro', sans-serif"}
              fontWeight={500}
              padding={2}
              color={Colors.WHITE}
            >
              {service.linkname}
            </Typography>
          </HeaderLink>
        ))}

        {/* Toggleable Services Section */}
        <ListItemButton
          sx={{
            justifyContent: "space-between",
          }}
          onClick={toggleServices}
        >
          <Typography
            fontSize="16px"
            fontFamily={"'Codec pro', sans-serif"}
            fontWeight={500}
            color={Colors.WHITE}
          >
            Services
          </Typography>
          {servicesOpen ? (
            <ExpandLessIcon sx={{ color: "rgb(184, 0, 64)" }} />
          ) : (
            <ExpandMoreIcon sx={{ color: "rgb(184, 0, 64)" }} />
          )}
        </ListItemButton>
        <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subServices.map((subService, index) => (
              <HeaderLink
                href={subService.url}
                onClick={() => handleMenuClick(subService.url)}
                key={index}
                className="sub-service-item"
              >
                <Typography
                  fontSize="14px"
                  fontFamily={"'Codec pro', sans-serif"}
                  fontWeight={400}
                  padding={2}
                  color={Colors.WHITE}
                  sx={{ paddingLeft: "20px" }}
                >
                  {subService.linkname}
                </Typography>
              </HeaderLink>
            ))}
          </List>
        </Collapse>
      </List>
      {services2.map((service, index) => (
        <HeaderLink
          href={service.url}
          onClick={() => handleMenuClick(service.url)}
          key={index}
          className="service-item"
        >
          <Typography
            fontSize="16px"
            fontFamily={"'Codec pro', sans-serif"}
            fontWeight={500}
            padding={2}
            color={Colors.WHITE}
          >
            {service.linkname}
          </Typography>
        </HeaderLink>
      ))}
      <Stack direction={"column"} spacing={3} alignItems="start">
        <Typography
          fontFamily={"'Codec pro', sans-serif"}
          border={"1px solid rgb(184, 0, 64)"}
          borderRadius={"50px"}
          padding={"10px 15px"}
          fontSize="17px"
          fontWeight={400}
          color={"white"}
          sx={{
            cursor: "pointer",
            background: "rgb(184, 0, 64)",
          }}
        >
          Get In Touch
        </Typography>
      </Stack>
    </StyledDrawer>
  );
}

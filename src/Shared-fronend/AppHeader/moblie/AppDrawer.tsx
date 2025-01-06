import { Drawer, List, Stack, Typography, styled } from "@mui/material";

import Colors from "../../Colors";
import CustomButton from "../../CustomButton";
import routes from "../../../routes/routes";

const HeaderLink = styled("a")`
  text-decoration: none;
  position: relative;
  color: graytext;

  &:hover {
    color: black;
  }
`;

const StyledDrawer = styled(Drawer)({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "300px",
    boxSizing: "border-box",
    backgroundColor: Colors.WHITE,
    padding: "20px",
    "& .MuiListItemButton-root:hover": {
      backgroundColor: Colors.WHITE,
      color: Colors.WHITE,
    },
  },
});

const StyledButton = styled(CustomButton)({
  borderRadius: "5px",
  fontSize: "22px",
  fontWeight: 600,
  padding: "16px 30px",
  textTransform: "none",
  whiteSpace: "nowrap",
  fontFamily: `"ProximaNovaSemibold", sans-serif !important`,
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

  function clearCaches() {
    if ("caches" in window) {
      caches.keys().then(function (cacheNames) {
        cacheNames.forEach(function (cacheName) {
          caches.delete(cacheName);
          console.log(`${cacheName} cache cleared`);
        });
      });
    }
  }

  return (
    <StyledDrawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      // onEscapeKeyDown={onClose}
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
              fontSize="22px"
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              fontWeight={500}
              padding={2}
              color={Colors.BLACK}
            >
              {service.linkname}
            </Typography>
          </HeaderLink>
        ))}
      </List>
      <Stack direction={"column"} spacing={3} alignItems="start">
        <HeaderLink
          href={routes.ROOT}
          onClick={() => handleMenuClick(routes.ROOT)}
          className="service-item"
        >
          <Typography
            fontSize="22px"
            fontFamily={`"ProximaNovaMedium", sans-serif`}
            fontWeight={500}
            padding={2}
            color={Colors.BLACK}
          >
            get in touch
          </Typography>
        </HeaderLink>

        <HeaderLink
          // href={routes.SCHEDULE_REPAIR}
          className="service-item"
          style={{ marginTop: 0 }}
        >
          <Typography
            fontSize="22px"
            fontFamily={`"ProximaNovaMedium", sans-serif`}
            fontWeight={500}
            padding={2}
            color={Colors.BLACK}
          >
            button 1
          </Typography>
        </HeaderLink>
      </Stack>
    </StyledDrawer>
  );
}

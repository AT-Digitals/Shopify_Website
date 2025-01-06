import { Box, Stack } from "@mui/material";
import React, { useCallback } from "react";

import AppDrawer from "./AppDrawer";
import Colors from "../../Colors";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import routes from "../../../routes/routes";

interface MobileHeaderProps {
  setActiveTab: (event: any) => void;
  activeTab: string;
}
export default function MoblieHeader({
  activeTab,
  setActiveTab,
}: Readonly<MobileHeaderProps>) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = useCallback(() => setOpen(true), []);
  const handleDrawerClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <Box
        alignItems="center"
        display={{ lg: "flex", xl: "none" }}
        paddingY={3}
        paddingX={3}
        width="100%"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Link to={routes.ROOT}>
            <img width={170} src={"Alterknit"} alt="alterknit" height={55} />
          </Link>
          <IconButton size="large" onClick={handleDrawerOpen}>
            <DragHandleIcon style={{ fontSize: 40, color: Colors.BLACK }} />
          </IconButton>
        </Stack>
      </Box>

      <AppDrawer
        open={open}
        onClose={handleDrawerClose}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </>
  );
}

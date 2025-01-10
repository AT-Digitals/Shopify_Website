import {
  Box,
  Button,
  Drawer,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

interface DrawerProps {
  open: boolean;
  toggleDrawer: any;
}

export default function GetinTouch({
  open,
  toggleDrawer,
}: Readonly<DrawerProps>) {
  return (
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
            onClick={toggleDrawer}
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
              stroke="currentColor"
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
              <img
                alt=""
                src="https://cdn.sanity.io/images/jtds2dzp/production/e87794c1e41e235f3fbd66ca59c4b0f6201adc84-21x20.svg"
              />{" "}
            </IconButton>
            <IconButton
              sx={{
                background: "lightgray",
              }}
            >
              <img
                alt=""
                src="https://cdn.sanity.io/images/jtds2dzp/production/3a0ab00e64b1473ee9c529cf7e608555d203ce33-21x20.svg"
              />{" "}
            </IconButton>
            <IconButton
              sx={{
                background: "lightgray",
              }}
            >
              <img
                alt=""
                src="https://cdn.sanity.io/images/jtds2dzp/production/a892d584e01ac539891e17a42214cb4760cd6eda-22x20.svg"
              />{" "}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

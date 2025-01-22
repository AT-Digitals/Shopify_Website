import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import React from "react";
import ReportSharpIcon from "@mui/icons-material/ReportSharp";
import styled from "@emotion/styled";

const MyForm = () => {
  // Separate useState hooks for each field

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:");
  };

  // Styled component for TextField
  const StyledTextField = styled(TextField)({
    color: "white",
    fontFamily: "'Codec pro', sans-serif",
    fontWeight: 400,
    "& .MuiInputBase-root": {
      color: "white", // Input text color
    },
    "& .MuiInputBase-input::placeholder": {
      color: "white", // Placeholder text color
      opacity: 0.7,
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white", // Bottom border color
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white", // Focused bottom border color
    },
    "& .MuiFormLabel-root": {
      color: "white", // Label color if used
    },
  });

  return (
    <Box
      sx={{
        mx: "auto",
        padding: { xs: "20px", sm: "20px", md: "80px" },
        background: "rgb(37, 37, 37)",
        borderRadius: "30px",
        color: "white",
      }}
    >
      <Typography
        fontFamily={"'Codec pro', sans-serif"}
        fontSize={"30px"}
        gutterBottom
      >
        Let’s launch and grow your <br /> Shopify store together
      </Typography>

      <Box
        padding={"10px 0"}
        display={"flex"}
        gap={"10px"}
        alignItems={"center"}
      >
        <Typography fontFamily={"'Codec pro', sans-serif"}>
          {" "}
          ✅ No Strings Attached{" "}
        </Typography>
        <Typography fontFamily={"'Codec pro', sans-serif"}> ✅ NDA</Typography>
      </Box>

      <form
        style={{
          marginTop: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2} rowSpacing={2} rowGap={3}>
          <Grid item xs={12}>
            <StyledTextField
              placeholder="Full Name"
              fullWidth
              required
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              placeholder="Email"
              required
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              placeholder="Website link (Leave if blank)"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              required
              placeholder="Message"
              multiline
              rows={4}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{
                background: "rgb(184, 0, 64)",
                textTransform: "none",
              }}
              type="submit"
              variant="contained"
            >
              Evaluate my project
            </Button>
            <Box mt={2} gap="10px" display={"flex"} alignItems={"center"}>
              <Typography
                fontFamily={"'Codec pro', sans-serif"}
                fontSize={"12px"}
              >
                We will get back to you within 24 hours
              </Typography>
              <ReportSharpIcon
                style={{
                  color: "rgb(184, 0, 64)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default MyForm;

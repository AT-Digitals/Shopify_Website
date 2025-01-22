import { Box, Button, Grow, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import ProjectData from "../Data/ProjectData";
import ProjectsComponent from "../Homepage/ProjectsComponent";

export default function WorkPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const [blur, setBlur] = useState(false); // State for blur animation

  const handleFilter = (category: string | null) => {
    setBlur(true); // Trigger blur effect
    setTimeout(() => {
      setFilter(category);
      setBlur(false); // Remove blur after animation
    }, 500); // Adjust duration to match animation timing
  };

  const navigate = useNavigate();

  const handleProjectClick = (id: string, type: string) => {
    navigate(`/project/${id}/${type}`);
  };

  const filteredData = filter
    ? ProjectData.filter(
        (project) =>
          project.bigChips.includes(filter) ||
          project.smallChips.includes(filter)
      )
    : ProjectData;

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setAnimate(true);
  }, []);

  return (
    <Box bgcolor={"black"}>
      <Grow in={animate} timeout={1000}>
        <Box padding={"20px"} maxWidth={1300} margin={"auto"}>
          <Typography
            mt="2rem"
            color={"#ffffff5e"}
            fontFamily={"'Codec pro', sans-serif"}
            fontSize={"70px"}
          >
            Our Works{" "}
          </Typography>

          <Typography
            mt="2rem"
            mb="2rem"
            color={"#ffffff5e"}
            fontFamily={"'Codec pro', sans-serif"}
            fontSize={"22px"}
            maxWidth={800}
          >
            We help you create a professional, fully functional Shopify store
            from scratch. Our team designs visually stunning, responsive, and
            user-friendly stores that reflect your brand's identity and engage
            your target audience.
          </Typography>
        </Box>
      </Grow>

      <Box bgcolor={"white"}>
        <Grow in={animate} timeout={2000}>
          <Box>
            <Typography
              fontFamily={"'Codec pro', sans-serif"}
              sx={{
                paddingTop: "20px",
                fontSize: { xs: "25px", sm: "30px", md: "50px" },
                fontWeight: "700",
              }}
              variant="h5"
              textAlign="center"
              gutterBottom
            >
              Projects by Category
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }} // Stack buttons in a column for xs screen size
              spacing={2}
              mb={4}
              justifyContent="center"
              mt="25px"
              alignItems={"center"}
            >
              <Button
                sx={{
                  border: "1px solid black",
                  fontFamily: "'Codec pro', sans-serif",
                  color: filter === "Health & Wellness" ? "white" : "black",
                  backgroundColor:
                    filter === "Health & Wellness"
                      ? "rgb(184, 0, 64)"
                      : "transparent",
                  fontWeight: "700",
                  fontSize: "16px",
                  padding: { xs: "10px 20px", sm: "8px 16px" }, // Adjust padding for smaller screens
                  "&:hover": {
                    backgroundColor: "rgb(184, 0, 64)",
                    color: "white",
                  },
                }}
                variant={
                  filter === "Health & Wellness" ? "contained" : "outlined"
                }
                onClick={() => handleFilter("Health & Wellness")}
              >
                Health & Wellness
              </Button>
              <Button
                sx={{
                  border: "1px solid black",
                  fontFamily: "'Codec pro', sans-serif",
                  color:
                    filter === "Beauty & Personal Care" ? "white" : "black",
                  backgroundColor:
                    filter === "Beauty & Personal Care"
                      ? "rgb(184, 0, 64)"
                      : "transparent",
                  fontWeight: "700",
                  fontSize: "16px",
                  padding: { xs: "10px 20px", sm: "8px 16px" }, // Adjust padding for smaller screens
                  "&:hover": {
                    backgroundColor: "rgb(184, 0, 64)",
                    color: "white",
                  },
                }}
                variant={
                  filter === "Beauty & Personal Care" ? "contained" : "outlined"
                }
                onClick={() => handleFilter("Beauty & Personal Care")}
              >
                Beauty & Personal Care
              </Button>
              <Button
                sx={{
                  border: "1px solid black",
                  fontFamily: "'Codec pro', sans-serif",
                  color: "black", // Ensure it is not pre-selected
                  backgroundColor: "transparent", // Always transparent on load
                  fontWeight: "700",
                  fontSize: "16px",
                  padding: { xs: "10px 20px", sm: "8px 16px" }, // Adjust padding for smaller screens
                  "&:hover": {
                    backgroundColor: "rgb(184, 0, 64)",
                    color: "white",
                  },
                }}
                variant="outlined" // Always outlined unless explicitly selected
                onClick={() => handleFilter(null)} // Reset filter to show all
              >
                Show All
              </Button>
            </Stack>

            {/* Projects Display with Blur Effect */}
            <Box
              sx={{
                transition: "filter 0.5s ease", // Smooth transition
                filter: blur ? "blur(5px)" : "none", // Apply blur when state is true
              }}
            >
              {filteredData.map((project, index) => (
                <ProjectsComponent
                  key={index}
                  flexDirection={project.flexDirection}
                  Bigimg={project.Bigimg}
                  Smallimg={project.Smallimg}
                  altText={project.altText}
                  title1={project.title1}
                  title2={project.title2}
                  rating={project.rating}
                  status1={project.status1}
                  status2={project.status2}
                  bigChips={project.bigChips}
                  smallChips={project.smallChips}
                  BigProjectClick={() =>
                    handleProjectClick(project.id, project.title1)
                  }
                  smallProjectClick={() =>
                    handleProjectClick(project.id, project.title2)
                  }
                />
              ))}
            </Box>
          </Box>
        </Grow>
      </Box>
    </Box>
  );
}

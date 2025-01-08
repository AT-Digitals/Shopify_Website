import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import ProjectsComponent from "../Homepage/ProjectsComponent";
import { useState } from "react";

const projectData = [
  {
    id: "1",
    flexDirection: "row-reverse" as "row-reverse",
    Bigimg:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/663af09b40262b45c1563c88_Frame%2012352%20copy.webp",
    Smallimg:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/635b5c4b26c897e86ed3a95d_Frame%201198(2).jpg",
    altText: "",
    title1: "Nupure",
    title2: "Ingarden",
    rating: 5,
    status1: "Ongoing",
    status2: "Pending",
    bigChips: ["Health & Wellness", "Shopify Plus"],
    smallChips: ["Health & Wellness"],
  },
  {
    id: "2",
    flexDirection: "row" as "row",
    Bigimg:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/62d749256bb311283bed562d_607d8f9932261b46db184cdc_Frame%20181(1).webp",
    Smallimg:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/65fcffb8d4eef1ebc6bb64dd_Frame%2012349%20copy.webp",
    altText: "",
    title1: "DS Laboratories",

    title2: "Aware Nutrition",
    rating: 5,
    status1: "Ongoing",
    status2: "Completed",
    bigChips: ["Beauty & Personal Care", "Shopify Plus"],
    smallChips: ["Beauty & Personal Care", "Shopify Plus"],
  },
];

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
    ? projectData.filter(
        (project) =>
          project.bigChips.includes(filter) ||
          project.smallChips.includes(filter)
      )
    : projectData;

  return (
    <Box>
      <Typography
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
            color: filter === "Health & Wellness" ? "white" : "black",
            backgroundColor:
              filter === "Health & Wellness" ? "black" : "transparent",
            fontWeight: "700",
            fontSize: "16px",
            padding: { xs: "10px 20px", sm: "8px 16px" }, // Adjust padding for smaller screens
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
          variant={filter === "Health & Wellness" ? "contained" : "outlined"}
          onClick={() => handleFilter("Health & Wellness")}
        >
          Health & Wellness
        </Button>
        <Button
          sx={{
            border: "1px solid black",
            color: filter === "Beauty & Personal Care" ? "white" : "black",
            backgroundColor:
              filter === "Beauty & Personal Care" ? "black" : "transparent",
            fontWeight: "700",
            fontSize: "16px",
            padding: { xs: "10px 20px", sm: "8px 16px" }, // Adjust padding for smaller screens
            "&:hover": {
              backgroundColor: "black",
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
            color: filter === null ? "black" : "black", // Ensure it is not pre-selected
            backgroundColor: "transparent", // Always transparent on load
            fontWeight: "700",
            fontSize: "16px",
            padding: { xs: "10px 20px", sm: "8px 16px" }, // Adjust padding for smaller screens
            "&:hover": {
              backgroundColor: "black",
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
  );
}

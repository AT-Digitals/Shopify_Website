import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import { useParams } from "react-router-dom";

// Sample data for projects (you can replace this with an API call or context)
const projectData = [
  {
    id: "1",
    type: "big",
    title: "Nupure",
    description:
      "Nupure is a health and wellness brand that focuses on creating sustainable solutions for modern lifestyles.",
    image:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/663af09b40262b45c1563c88_Frame%2012352%20copy.webp",
    tags: ["Health & Wellness", "Shopify Plus"],
  },
  {
    id: "1",
    type: "small",
    title: "Ingarden",
    description:
      "Ingarden specializes in hydroponic gardening systems designed for homes, enabling fresh produce year-round.",
    image:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/635b5c4b26c897e86ed3a95d_Frame%201198(2).jpg",
    tags: ["Health & Wellness"],
  },
  {
    id: "2",
    type: "big",
    title: "DS Laboratories",
    description:
      "A leader in beauty and personal care, DS Laboratories delivers cutting-edge hair and skincare solutions.",
    image:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/62d749256bb311283bed562d_607d8f9932261b46db184cdc_Frame%20181(1).webp",
    tags: ["Beauty & Personal Care", "Shopify Plus"],
  },
  {
    id: "2",
    type: "small",
    title: "Aware Nutrition",
    description:
      "Aware Nutrition offers personalized nutrition products crafted to meet individual dietary needs.",
    image:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/65fcffb8d4eef1ebc6bb64dd_Frame%2012349%20copy.webp",
    tags: ["Beauty & Personal Care"],
  },
  // 3

  {
    id: "3",
    type: "small",
    title: "Lakanto",
    description:
      "Aware Nutrition offers personalized nutrition products crafted to meet individual dietary needs.",
    image:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/65811b35ec3819bfd7b85f96_Frame%202563.webp",
    tags: ["Beauty & Personal Care"],
  },
  {
    id: "3",
    type: "big",
    title: "Avon",
    description:
      "Aware Nutrition offers personalized nutrition products crafted to meet individual dietary needs.",
    image:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/663c5601bef4c956d4ac7aa1_Frame%2012353%20copy.webp",
    tags: ["Beauty & Personal Care"],
  },
];

const ProjectDetailPage = () => {
  const { id, type } = useParams<{ id: string; type: string }>(); // Extract ID and type from URL
  const projectIndex = projectData.findIndex(
    (p) => p.id === id && p.title === type
  );

  if (projectIndex === -1) {
    return (
      <Box sx={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Project Not Found
        </Typography>
        <Typography variant="body1">
          The project you are looking for does not exist. Please try another.
        </Typography>
      </Box>
    );
  }

  const project = projectData[projectIndex]; // Access the project using its index

  const handleNext = () => {
    const nextIndex = (projectIndex + 1) % projectData.length;
    const nextProject = projectData[nextIndex];
    window.location.href = `/project/${nextProject.id}/${nextProject.title}`;
  };

  const handlePrev = () => {
    const prevIndex =
      (projectIndex - 1 + projectData.length) % projectData.length;
    const prevProject = projectData[prevIndex];
    window.location.href = `/project/${prevProject.id}/${prevProject.title}`;
  };
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <img
          height={500}
          style={{
            objectFit: "cover",
          }}
          width="100%"
          src={project.image}
          alt="projectbanner"
        />
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: "absolute",
            bottom: "10%", // Adjust distance from the bottom
            left: "8%", // Adjust distance from the left
          }}
        >
          {project.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              color="default"
              sx={{
                border: "1px solid white",
                fontSize: "16px",
                padding: "10px 0",
                background: "white",
              }}
            />
          ))}
        </Stack>
      </Box>
      <Box padding={"2rem 0"}>
        <Typography
          fontSize={"60px"}
          fontFamily={"robato"}
          textAlign={"center"}
        >
          {project.title}{" "}
        </Typography>
      </Box>
      <Box sx={{ padding: "20px" }}>
        <Card sx={{ maxWidth: 900, margin: "0 auto", boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {project.title}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              {project.description}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        maxWidth={"1400px"}
        margin={"auto"}
      >
        <Button onClick={handlePrev}>prev</Button>
        <Button onClick={handleNext}>next</Button>
      </Box>
    </Box>
  );
};

export default ProjectDetailPage;

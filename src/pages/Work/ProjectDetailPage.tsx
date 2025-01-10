import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

import routes from "../../routes/routes";
import { useEffect } from "react";

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
    siteLink: "https://www.upure.com",
    location: "San fransico,US",
    Technology: "Shopify Plus",
    subImage1:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/660f8a30d085aac8281aae2a_image-final-3-1%20copy.webp",
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
    siteLink: "https://www.Ingarden.com",
    location: "San fransico,US",
    Technology: "Shopify Plus",
    subImage1:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/63522a7ced30bfda3d4f745a_title-image%20copy.webp",
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
    siteLink: "https://www.DS Laboratories.com",
    location: "San fransico,US",
    Technology: "Shopify ",
    subImage1:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/60aba81c6c028daeef36004a_title-image.jpg",
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
    siteLink: "https://www.AwareNutrition.com",
    location: "San fransico,US",
    Technology: "Shopify Plus",
    subImage1:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/65fd00661d264d1857909790_title-image%20copy.webp",
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
    siteLink: "https://www.Lakanto.com",
    location: "San fransico,US",
    Technology: "Shopify ",
    subImage1:
      "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/658124e023f87c32766f4f59_title-image.webp",
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
    siteLink: "https://www.Avon.com",
    location: "San fransico,US",
    Technology: "Shopify Plus",
    subImage1: "https://cssnectar.com/wp-content/uploads/2019/09/avone.jpg",
  },
];

const ProjectDetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
  const prevProject =
    projectData[(projectIndex - 1 + projectData.length) % projectData.length];
  const nextProject = projectData[(projectIndex + 1) % projectData.length];

  return (
    <Box>
      <Box sx={{ position: "relative", marginBottom: "-10px" }}>
        <img
          style={{
            objectFit: "cover",
            height: "auto", // Default to auto for responsiveness
            maxHeight: 500,
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

      <Box bgcolor={"black"}>
        <Box
          maxWidth={1350}
          margin={"auto"}
          padding={{ xs: "2rem ", sm: "2rem ", md: "2rem 0" }}
        >
          <Typography
            mb={2}
            fontSize={"60px"}
            fontFamily={"robato"}
            textAlign={"start"}
            color={"white"}
          >
            {project.title}{" "}
          </Typography>
          <Typography
            mb={2}
            fontSize={"40px"}
            fontFamily={"robato"}
            textAlign={"start"}
            color={"white"}
          >
            End-to-end Shopify Plus solution with a <br /> custom iOS & Android
            App
          </Typography>
          <Button
            sx={{
              borderRadius: "50px",
              textTransform: "capitalize",
              color: "white",
              padding: "10px",
              border: "1px solid white",
              display: "flex",
              alignItems: "center",
              gap: "8px", // Space between icon and text
              maxWidth: 220,

              width: "100%",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                border: "1px solid white",
              },
              "&:hover .MuiSvgIcon-root": {
                transform: "scale(1.2) translateX(20px)", // Move icon to the right and scale
                transition: "all 1s ease", // Smooth transition for the icon
              },
            }}
            variant="outlined"
          >
            Visit the website
            <ArrowForward /> {/* Right Arrow Icon */}
          </Button>
          <Divider
            orientation="horizontal"
            sx={{
              background: "white",
              width: "100%", // Use 'width' instead of 'maxWidth'
              margin: "2rem auto", // Centers the divider
            }}
          />
        </Box>
        <Box
          maxWidth={1350}
          margin={"2rem auto"}
          padding={"20px 0"}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ xs: "column", sm: "column", md: "row" }}
          gap="2rem"
          paddingBottom={"2rem"}
        >
          <Box>
            <Typography
              fontSize={"18px"}
              fontFamily={"robato"}
              textAlign={"center"}
              color={"white"}
            >
              Brand Name{" "}
            </Typography>
            <Typography
              fontSize={"16px"}
              fontFamily={"robato"}
              textAlign={"center"}
              color={"white"}
            >
              {project.title}
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize={"18px"}
              fontFamily={"robato"}
              textAlign={"center"}
              color={"white"}
            >
              Partnering since
            </Typography>
            <Typography
              fontSize={"16px"}
              fontFamily={"robato"}
              textAlign={"center"}
              color={"white"}
            >
              2018
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize={"18px"}
              fontFamily={"robato"}
              textAlign={"center"}
              color={"white"}
            >
              Projects completed
            </Typography>
            <Typography
              fontSize={"16px"}
              fontFamily={"robato"}
              textAlign={"center"}
              color={"white"}
            >
              40+{" "}
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize={"18px"}
              fontFamily={"robato"}
              textAlign={"center"}
              color={"white"}
            >
              Location{" "}
            </Typography>
            <Typography
              fontSize={"16px"}
              fontFamily={"robato"}
              textAlign={"center"}
              color={"white"}
            >
              {project.location}
            </Typography>
          </Box>

          <Box>
            <Typography
              fontSize={"18px"}
              fontFamily={"robato"}
              textAlign={"center"}
              color={"white"}
            >
              Technology{" "}
            </Typography>
            <Typography
              fontSize={"16px"}
              fontFamily={"robato"}
              textAlign={"center"}
              color={"white"}
            >
              {project.Technology}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <img
          style={{
            objectFit: "cover",
            height: "auto", // Default to auto for responsiveness
            // maxWidth: 1000,
          }}
          width="100%"
          src={project.subImage1}
          alt="siteImage"
        />
      </Box>

      <Box bgcolor={"white"}>
        <Box
          display={"flex"}
          maxWidth={1300}
          margin={"auto"}
          justifyContent={"space-between"}
          padding={{ xs: "2rem ", sm: "2rem ", md: "3rem 0" }}
          flexWrap={"wrap"}
        >
          <Typography fontFamily={"Robato"} color={"black"} fontSize={"45px"}>
            Context
          </Typography>
          <Box
            maxWidth={600}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Typography fontFamily={"Robato"} fontSize={"16px"} color={"black"}>
              In 2018, Nicole reached craftberry to rebuild and redesign her
              Shopify store. <br />
            </Typography>

            <Typography fontFamily={"Robato"} fontSize={"16px"} color={"black"}>
              In 2024, the Nicole Rose brand gained popularity and had a
              significant amount of loyal customers. <br />
            </Typography>
            <Typography fontFamily={"Robato"} fontSize={"16px"} color={"black"}>
              Still, the design was outdated and the store needed refreshments
              for easier management and conversion rate optimization.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider
        orientation="horizontal"
        sx={{
          background: "black",
          width: "90%", // Use 'width' instead of 'maxWidth'
          margin: "2rem auto", // Centers the divider
        }}
      />
      <Box bgcolor={"white"}>
        <Box
          display={"flex"}
          maxWidth={1300}
          margin={"auto"}
          justifyContent={"space-between"}
          padding={{ xs: "2rem ", sm: "2rem ", md: "3rem 0" }}
          flexWrap={"wrap"}
        >
          <Typography fontFamily={"Robato"} color={"black"} fontSize={"45px"}>
            The Design Process
          </Typography>
          <Box
            maxWidth={600}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Typography fontFamily={"Robato"} fontSize={"16px"} color={"black"}>
              To create a store that matched Nicole Rose’s commitment to quality
              gemstones, we started with rebranding.
            </Typography>

            <Typography fontFamily={"Robato"} fontSize={"16px"} color={"black"}>
              Our partners CreativeCorner developed a sophisticated, soft-toned
              brand book, which served as our guide throughout the design
              process.
            </Typography>
            <Typography fontFamily={"Robato"} fontSize={"16px"} color={"black"}>
              We set out to create a data-driven design and implement tailored
              strategies best suited to Nicole Rose’s audience.
            </Typography>
            <Typography fontFamily={"Robato"} fontSize={"16px"} color={"black"}>
              To achieve this, we leveraged GA4 and Mouseflow and conducted
              thorough research.
            </Typography>

            <Typography fontFamily={"Robato"} fontSize={"16px"} color={"black"}>
              Based on the data, we identified conversion blockers and applied
              proven CRO strategies.
            </Typography>
            <Typography fontFamily={"Robato"} fontSize={"16px"} color={"black"}>
              The result: an elegant, feminine, and vibrant Shopify store.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider
        orientation="horizontal"
        sx={{
          background: "black",
          width: "90%", // Use 'width' instead of 'maxWidth'
          margin: "2rem auto", // Centers the divider
        }}
      />

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        maxWidth={"1350px"}
        margin={" 2rem auto"}
        flexDirection={"column"}
        gap={"2rem"}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography fontSize={"30px"} fontFamily={"Robato"} color={"black"}>
            Related case studies{" "}
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Typography fontSize={"22px"} fontFamily={"Robato"} color={"black"}>
              View all case studies{" "}
            </Typography>
            <Link to={routes.WORK}>
              <IconButton
                style={{
                  background: "lightgray",
                }}
              >
                <ArrowForward />
              </IconButton>
            </Link>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          // flexWrap={"wrap"}
          gap={"2rem"}
          flexDirection={{ xs: "column", sm: "column", md: "row" }}
        >
          <Box sx={{ position: "relative", marginBottom: "-10px" }}>
            <img
              style={{
                objectFit: "cover",
                height: "auto", // Default to auto for responsiveness
                maxHeight: 600,
              }}
              width="100%"
              src={prevProject.image}
              alt="projectbanner"
            />
            <Stack
              direction="row"
              spacing={1}
              sx={{
                position: "absolute",
                bottom: "10%", // Adjust distance from the bottom
                left: { xs: "20%", sm: "20%", md: "8%" }, // Adjust distance from the left
              }}
            >
              <Button
                sx={{
                  borderRadius: "50px",
                  textTransform: "capitalize",
                  color: "white",
                  border: "1px solid black",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "black",

                  gap: "8px", // Space between icon and text
                  minWidth: 250,
                  width: "100%",
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid black",
                  },
                  "&:hover .MuiSvgIcon-root": {
                    transform: "scale(1.2) translateX(-20px)", // Move icon to the right and scale
                    transition: "all 1s ease", // Smooth transition for the icon
                  }, // Smooth transition for the icon
                }}
                variant="outlined"
                onClick={handlePrev}
              >
                <ArrowBack /> {/* Left Arrow Icon */}
                {prevProject.title}
              </Button>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img
              style={{
                objectFit: "cover",
                height: "auto", // Default to auto for responsiveness
                maxHeight: 600,
              }}
              width="100%"
              src={nextProject.image}
              alt="projectbanner"
            />
            <Stack
              direction="row"
              spacing={1}
              sx={{
                position: "absolute",
                bottom: "10%", // Adjust distance from the bottom
                right: { xs: "20%", sm: "20%", md: "8%" }, // Adjust distance from the left
              }}
            >
              <Button
                sx={{
                  borderRadius: "50px",
                  textTransform: "capitalize",
                  color: "white",
                  padding: "10px",
                  border: "1px solid black",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px", // Space between icon and text
                  minWidth: 250,
                  width: "100%",
                  backgroundColor: "black",

                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid black",
                  },
                  "&:hover .MuiSvgIcon-root": {
                    transform: "scale(1.2) translateX(20px)", // Move icon to the right and scale
                    transition: "all 1s ease", // Smooth transition for the icon
                  },
                }}
                variant="outlined"
                onClick={handleNext}
              >
                {nextProject.title}
                <ArrowForward /> {/* Right Arrow Icon */}
              </Button>
            </Stack>
          </Box>
        </Box>

        {/* <img width={"50%"} src={prevProject.image} alt="" />
        <img width={"50%"} src={nextProject.image} alt="" /> */}

        {/* <Button
          sx={{
            borderRadius: "50px",
            textTransform: "capitalize",
            color: "black",
            padding: "10px",
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            gap: "8px", // Space between icon and text
            maxWidth: 220,
            width: "100%",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
              border: "1px solid black",
            },
            "&:hover .MuiSvgIcon-root": {
              transform: "scale(1.2) translateX(20px)", // Move icon to the right and scale
              transition: "all 1s ease", // Smooth transition for the icon
            },
          }}
          variant="outlined"
          onClick={handleNext}
        >
          {nextProject.title}
          <ArrowForward /> {/* Right Arrow Icon */}
        {/* </Button> */}
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        maxWidth={"1350px"}
        margin={" 2rem auto"}
      ></Box>
    </Box>
  );
};

export default ProjectDetailPage;

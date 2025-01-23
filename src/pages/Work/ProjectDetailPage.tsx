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

import { useEffect } from "react";
import routes from "../../routes/routes";

// Sample data for projects (you can replace this with an API call or context)
const projectData = [
  // 1
  {
    id: "1",
    type: "small",
    title: "pmdbeauty",
    description:
      "Aware Nutrition offers personalized nutrition products crafted to meet individual dietary needs.",
    image:
      "https://pmdbeauty.com/cdn/shop/files/Banner.png?v=1726594526&width=1500",
    tags: ["Beauty & Personal Care"],
    siteLink: "https://pmdbeauty.com",
    location: "San fransico,US",
    Technology: "Shopify Plus",
    subImage1: "https://atdigitals.com/wp-content/uploads/2024/07/PD1.png",
    context: `<ul style="list-style-type: none; display: flex; flex-direction: column; gap: 13px;"><li  >AlterKnit New York stands as a premier online destination offering a wide array of services, including sweater repairs, invisible mending, French reweaving, knit alterations, suit reparation, shoe and bag repair, knit restyling, and beyond.</li>
                <li>Operating within both the B2C and B2B spheres, our platform caters to discerning customers seeking bespoke tailoring solutions.</li>
                <li>AlterKnit aspired to pioneer the next frontier in traditional tailoring by launching an innovative E-commerce application</li>
                <li>For their distinctive services and offerings, including their groundbreaking re-knitting technique—harvesting yarn from existing garments.</li></ul>`,
    design: `<ul style="list-style-type: none; display: flex; flex-direction: column; gap: 13px;"><li  >With the ambitious goal of expanding their services nationwide, Miriam Mades, the founder of AlterKnit New York LLC, envisions reaching every city across the United States</li>
                <li>In alignment with AlterKnit's philosophy of prioritizing organic growth over paid advertising, the team sought to cultivate a strong online presence.</li>
                <li>AT Digitals was enlisted to leverage their expertise in crafting an unparalleled user experience for the web application, ensuring seamless navigation and customer engagement.</li>
                <li>AlterKnit's transition from a longstanding offline establishment to a digital platform marks a significant milestone in its evolution. </li>
                <li>We take great pride in facilitating this transformation, ushering a century-old traditional company into the digital era.</li>
                </ul>`,
  },
  {
    id: "1",
    type: "big",
    title: "pinkanee",
    description:
      "Aware Nutrition offers personalized nutrition products crafted to meet individual dietary needs.",
    image:
      "https://www.pinkanee.com/cdn/shop/files/banner-02_7a823ae0-506e-4f2e-ab50-933e77d18228.jpg?v=1657186662&width=2000",
    tags: ["Beauty & Personal Care"],
    siteLink: "https://www.Avon.com",
    location: "San fransico,US",
    Technology: "Shopify Plus",
    subImage1: "https://atdigitals.com/wp-content/uploads/2024/07/PD4.png",
    context: `<ul style="list-style-type: none; display: flex; flex-direction: column; gap: 13px;"><li  >AlterKnit New York stands as a premier online destination offering a wide array of services, including sweater repairs, invisible mending, French reweaving, knit alterations, suit reparation, shoe and bag repair, knit restyling, and beyond.</li>
                <li>Operating within both the B2C and B2B spheres, our platform caters to discerning customers seeking bespoke tailoring solutions.</li>
                <li>AlterKnit aspired to pioneer the next frontier in traditional tailoring by launching an innovative E-commerce application</li>
                <li>For their distinctive services and offerings, including their groundbreaking re-knitting technique—harvesting yarn from existing garments.</li></ul>`,
    design: `<ul style="list-style-type: none; display: flex; flex-direction: column; gap: 13px;"><li  >With the ambitious goal of expanding their services nationwide, Miriam Mades, the founder of AlterKnit New York LLC, envisions reaching every city across the United States</li>
                <li>In alignment with AlterKnit's philosophy of prioritizing organic growth over paid advertising, the team sought to cultivate a strong online presence.</li>
                <li>AT Digitals was enlisted to leverage their expertise in crafting an unparalleled user experience for the web application, ensuring seamless navigation and customer engagement.</li>
                <li>AlterKnit's transition from a longstanding offline establishment to a digital platform marks a significant milestone in its evolution. </li>
                <li>We take great pride in facilitating this transformation, ushering a century-old traditional company into the digital era.</li>
                </ul>`,
  },
  // 2

  {
    id: "3",
    type: "big",
    title: "Gunner",
    description:
      "Aware Nutrition offers personalized nutrition products crafted to meet individual dietary needs.",
    image:
      "https://gunnar.com/cdn/shop/files/DUME_Desktop_Banner_ENGLISH_1920x.jpg?v=1736318735",
    tags: ["Health &Wellnes"],
    siteLink: "https://www.Avon.com",
    location: "San fransico,US",
    Technology: "Shopify Plus",
    subImage1: "https://atdigitals.com/wp-content/uploads/2024/07/PD2.png",
    context: `<ul style="list-style-type: none; display: flex; flex-direction: column; gap: 13px;"><li  >AlterKnit New York stands as a premier online destination offering a wide array of services, including sweater repairs, invisible mending, French reweaving, knit alterations, suit reparation, shoe and bag repair, knit restyling, and beyond.</li>
                <li>Operating within both the B2C and B2B spheres, our platform caters to discerning customers seeking bespoke tailoring solutions.</li>
                <li>AlterKnit aspired to pioneer the next frontier in traditional tailoring by launching an innovative E-commerce application</li>
                <li>For their distinctive services and offerings, including their groundbreaking re-knitting technique—harvesting yarn from existing garments.</li></ul>`,
    design: `<ul style="list-style-type: none; display: flex; flex-direction: column; gap: 13px;"><li  >With the ambitious goal of expanding their services nationwide, Miriam Mades, the founder of AlterKnit New York LLC, envisions reaching every city across the United States</li>
                <li>In alignment with AlterKnit's philosophy of prioritizing organic growth over paid advertising, the team sought to cultivate a strong online presence.</li>
                <li>AT Digitals was enlisted to leverage their expertise in crafting an unparalleled user experience for the web application, ensuring seamless navigation and customer engagement.</li>
                <li>AlterKnit's transition from a longstanding offline establishment to a digital platform marks a significant milestone in its evolution. </li>
                <li>We take great pride in facilitating this transformation, ushering a century-old traditional company into the digital era.</li>
                </ul>`,
  },
  // 2
  {
    id: "3",
    type: "small",
    title: "indulgentfoods",
    description:
      "Aware Nutrition offers personalized nutrition products crafted to meet individual dietary needs.",
    image:
      "https://indulgentfoods.com/cdn/shop/files/mobile-home-image.webp?v=1682715631&width=900",
    tags: ["Beauty & Personal Care"],
    siteLink: "https://www.Avon.com",
    location: "San fransico,US",
    Technology: "Shopify Plus",
    subImage1: "https://atdigitals.com/wp-content/uploads/2024/07/PD3.png",
    context: `<ul style="list-style-type: none; display: flex; flex-direction: column; gap: 13px;"><li  >AlterKnit New York stands as a premier online destination offering a wide array of services, including sweater repairs, invisible mending, French reweaving, knit alterations, suit reparation, shoe and bag repair, knit restyling, and beyond.</li>
    <li>Operating within both the B2C and B2B spheres, our platform caters to discerning customers seeking bespoke tailoring solutions.</li>
    <li>AlterKnit aspired to pioneer the next frontier in traditional tailoring by launching an innovative E-commerce application</li>
    <li>For their distinctive services and offerings, including their groundbreaking re-knitting technique—harvesting yarn from existing garments.</li></ul>`,
    design: `<ul style="list-style-type: none; display: flex; flex-direction: column; gap: 13px;"><li  >With the ambitious goal of expanding their services nationwide, Miriam Mades, the founder of AlterKnit New York LLC, envisions reaching every city across the United States</li>
    <li>In alignment with AlterKnit's philosophy of prioritizing organic growth over paid advertising, the team sought to cultivate a strong online presence.</li>
    <li>AT Digitals was enlisted to leverage their expertise in crafting an unparalleled user experience for the web application, ensuring seamless navigation and customer engagement.</li>
    <li>AlterKnit's transition from a longstanding offline establishment to a digital platform marks a significant milestone in its evolution. </li>
    <li>We take great pride in facilitating this transformation, ushering a century-old traditional company into the digital era.</li>
    </ul>`,
  },

  // 3

  {
    id: "2",
    type: "big",
    title: "AlterKnit",
    description:
      "Aware Nutrition offers personalized nutrition products crafted to meet individual dietary needs.",
    image:
      "https://alterknitnewyork.com/wp-content/uploads/2024/10/subwaygirl-darkened-1-min.jpg",
    tags: ["Style & Clothing"],
    siteLink: "https://www.Avon.com",
    location: "San fransico,US",
    Technology: "Shopify Plus",
    subImage1: "https://atdigitals.com/wp-content/uploads/2024/07/PD5.png",
    context: `<ul style="list-style-type: none; display: flex; flex-direction: column; gap: 13px;"><li  >AlterKnit New York stands as a premier online destination offering a wide array of services, including sweater repairs, invisible mending, French reweaving, knit alterations, suit reparation, shoe and bag repair, knit restyling, and beyond.</li>
                <li>Operating within both the B2C and B2B spheres, our platform caters to discerning customers seeking bespoke tailoring solutions.</li>
                <li>AlterKnit aspired to pioneer the next frontier in traditional tailoring by launching an innovative E-commerce application</li>
                <li>For their distinctive services and offerings, including their groundbreaking re-knitting technique—harvesting yarn from existing garments.</li></ul>`,
    design: `<ul style="list-style-type: none; display: flex; flex-direction: column; gap: 13px;"><li  >With the ambitious goal of expanding their services nationwide, Miriam Mades, the founder of AlterKnit New York LLC, envisions reaching every city across the United States</li>
                <li>In alignment with AlterKnit's philosophy of prioritizing organic growth over paid advertising, the team sought to cultivate a strong online presence.</li>
                <li>AT Digitals was enlisted to leverage their expertise in crafting an unparalleled user experience for the web application, ensuring seamless navigation and customer engagement.</li>
                <li>AlterKnit's transition from a longstanding offline establishment to a digital platform marks a significant milestone in its evolution. </li>
                <li>We take great pride in facilitating this transformation, ushering a century-old traditional company into the digital era.</li>
                </ul>`,
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
        <Typography
          fontFamily={"'Codec pro', sans-serif"}
          variant="h4"
          gutterBottom
        >
          Project Not Found
        </Typography>
        <Typography fontFamily={"'Codec pro', sans-serif"} variant="body1">
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
          padding={{ xs: "2rem ", sm: "2rem ", md: "2rem" }}
        >
          <Typography
            mb={2}
            // fontSize={"60px"}
            fontSize={{ xs: "45px", sm: "45px", md: "60px" }}
            fontFamily={"'Codec pro', sans-serif"}
            textAlign={"start"}
            color={"white"}
          >
            {project.title}{" "}
          </Typography>
          <Typography
            mb={2}
            fontSize={{ xs: "25px", sm: "40px", md: "40px" }}
            fontFamily={"'Codec pro', sans-serif"}
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
              fontFamily: "'Codec pro', sans-serif",
              width: "100%",
              "&:hover": {
                backgroundColor: "rgb(184, 0, 64)",
                color: "white",
                border: "1px solid rgb(184, 0, 64)",
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
          padding={"20px"}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ xs: "column", sm: "column", md: "row" }}
          gap="2rem"
          paddingBottom={"2rem"}
        >
          <Box>
            <Typography
              fontSize={"18px"}
              fontFamily={"'Codec pro', sans-serif"}
              textAlign={"center"}
              color={"white"}
            >
              Brand Name{" "}
            </Typography>
            <Divider
              orientation="horizontal"
              sx={{
                background: "white",
                margin: "10px auto",
                width: { xs: "70%", sm: "70%", md: "100%" }, // Use 'width' instead of 'maxWidth'
              }}
            />
            <Typography
              fontSize={"16px"}
              fontFamily={"'Codec pro', sans-serif"}
              textAlign={"center"}
              color={"white"}
            >
              {project.title}
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize={"18px"}
              fontFamily={"'Codec pro', sans-serif"}
              textAlign={"center"}
              color={"white"}
            >
              Partnering since
            </Typography>
            <Divider
              orientation="horizontal"
              sx={{
                background: "white",
                margin: "10px auto",
                width: { xs: "70%", sm: "70%", md: "100%" }, // Use 'width' instead of 'maxWidth'
              }}
            />
            <Typography
              fontSize={"16px"}
              fontFamily={"'Codec pro', sans-serif"}
              textAlign={"center"}
              color={"white"}
            >
              2018
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize={"18px"}
              fontFamily={"'Codec pro', sans-serif"}
              textAlign={"center"}
              color={"white"}
            >
              Projects completed
            </Typography>
            <Divider
              orientation="horizontal"
              sx={{
                background: "white",
                margin: "10px auto",
                width: { xs: "70%", sm: "70%", md: "100%" }, // Use 'width' instead of 'maxWidth'
              }}
            />
            <Typography
              fontSize={"16px"}
              fontFamily={"'Codec pro', sans-serif"}
              textAlign={"center"}
              color={"white"}
            >
              40+{" "}
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize={"18px"}
              fontFamily={"'Codec pro', sans-serif"}
              textAlign={"center"}
              color={"white"}
            >
              Location{" "}
            </Typography>
            <Divider
              orientation="horizontal"
              sx={{
                background: "white",
                margin: "10px auto",
                width: { xs: "70%", sm: "70%", md: "100%" }, // Use 'width' instead of 'maxWidth'
              }}
            />
            <Typography
              fontSize={"16px"}
              fontFamily={"'Codec pro', sans-serif"}
              textAlign={"center"}
              color={"white"}
            >
              {project.location}
            </Typography>
          </Box>

          <Box>
            <Typography
              fontSize={"18px"}
              fontFamily={"'Codec pro', sans-serif"}
              textAlign={"center"}
              color={"white"}
            >
              Technology{" "}
            </Typography>
            <Divider
              orientation="horizontal"
              sx={{
                background: "white",
                margin: "10px auto",
                width: { xs: "70%", sm: "70%", md: "100%" }, // Use 'width' instead of 'maxWidth'
              }}
            />
            <Typography
              fontSize={"16px"}
              fontFamily={"'Codec pro', sans-serif"}
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
          padding={{ xs: "2rem ", sm: "2rem ", md: "3rem" }}
          flexWrap={"wrap"}
        >
          <Typography
            fontFamily={"'Codec pro', sans-serif"}
            color={"black"}
            fontSize={"45px"}
          >
            Context
          </Typography>
          <Box
            maxWidth={600}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Typography
              fontFamily={"'Codec pro', sans-serif"}
              fontSize={"16px"}
              color={"black"}
              dangerouslySetInnerHTML={{ __html: project["context"] }}
            />
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
          padding={{ xs: "2rem ", sm: "2rem ", md: "3rem " }}
          flexWrap={"wrap"}
        >
          <Typography
            fontFamily={"'Codec pro', sans-serif"}
            color={"black"}
            fontSize={"45px"}
          >
            The Design Process
          </Typography>
          <Box
            maxWidth={600}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Typography
              fontFamily={"'Codec pro', sans-serif"}
              fontSize={"16px"}
              color={"black"}
            >
              <Typography
                fontFamily={"'Codec pro', sans-serif"}
                fontSize={"16px"}
                color={"black"}
                dangerouslySetInnerHTML={{ __html: project["design"] }}
              />
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
        p={"0 2rem"}
      >
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={{
            xs: "center",
            sm: "space-between",
            md: "space-between",
          }}
        >
          <Typography
            fontSize={"30px"}
            fontFamily={"'Codec pro', sans-serif"}
            color={"black"}
          >
            Related case studies{" "}
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Typography
              fontSize={"22px"}
              fontFamily={"'Codec pro', sans-serif"}
              color={"black"}
            >
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

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button
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
            onClick={handlePrev}
          >
            <ArrowBack /> {/* Left Arrow Icon */}
            {prevProject.title}
          </Button>

          <Button
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
          </Button>
        </Stack>

        {/* <img width={"50%"} src={prevProject.image} alt="" />
        <img width={"50%"} src={nextProject.image} alt="" /> */}
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

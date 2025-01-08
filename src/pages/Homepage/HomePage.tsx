import { Box, IconButton, Typography } from "@mui/material";

import AppContainer from "../../Shared-fronend/AppContainer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import MasonryImageList from "../CaseStudy/MasinoryImageList";
import ProjectsComponent from "./ProjectsComponent";
import ReviewsSection from "./ReviewsSection";
import ServiceSection from "./ServiceSection";
import routes from "../../routes/routes";
import { useState } from "react";

export default function Homepage() {
  const [backgroundPosition, setBackgroundPosition] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 100; // Normalize to percentage (left/right)
    const y = (clientY / window.innerHeight) * 100; // Normalize to percentage (up/down)
    setBackgroundPosition({ x, y });
  };
  return (
    <>
      <div
        className="container"
        onMouseMove={handleMouseMove}
        style={{
          backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
        }}
      >
        <Typography
          lineHeight={1.2}
          fontSize={"50px"}
          textAlign={"center"}
          fontWeight={"700"}
        >
          Transforming Ideas <br />
          into Shopify Success.{" "}
        </Typography>
        <p
          style={{
            maxWidth: 500,
            textAlign: "center",
          }}
        >
          Shopify developers, designers, and e-commerce experts leveraging
          strategic solutions to launch and grow your Shopify Plus store.
        </p>
        <Box p={"1rem 0"}>
          <img
            style={{
              width: 100,
            }}
            src="https://cdn.sanity.io/images/jtds2dzp/production/d387941232f09d59bea5d44b811ab743679739a4-80x23.svg"
            alt=""
          />
        </Box>
      </div>
      <Box bgcolor={"black"}>
        <ReviewsSection />
      </Box>

      <Box
        margin={"auto"}
        display={"flex"}
        gap={"20px"}
        textAlign={"start"}
        flexDirection={"column"}
        padding={"2rem 0"}
      ></Box>
      <AppContainer padding={"20px !important"} maxWidth={1350}>
        <Typography
          paddingLeft={{ xs: "0px", sm: "30px", lg: "0px" }}
          fontFamily={"Robato"}
          fontSize={"22px"}
          lineHeight={1.2}
        >
          Our work
        </Typography>
        <Box
          mt={"0px !important"}
          display={"flex"}
          justifyContent={{
            xs: "space-between",
            sm: "space-around",
            lg: "space-between",
          }}
          alignItems={"baseline"}
          flexDirection={{ xs: "column", sm: "row", lg: "row" }}
        >
          <Box display={"flex"} gap={"20px"}>
            <Box
              display={"flex"}
              alignItems={"baseline"}
              flexDirection={{ xs: "column", lg: "row" }}
              gap={"20px"}
            >
              <Typography
                fontFamily={"Robato"}
                fontSize={"70px"}
                maxWidth={700}
              >
                <CountUp start={0} end={700} duration={10} />
              </Typography>
              <Typography
                fontFamily={"Robato"}
                fontSize={"22px"}
                textAlign={"center"}
                maxWidth={700}
              >
                Completed projects
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={{ xs: "column", lg: "row" }}
              alignItems={"baseline"}
              gap={"20px"}
            >
              <Typography
                fontFamily={"Robato"}
                fontSize={"70px"}
                maxWidth={700}
              >
                <CountUp start={0} end={65} duration={10} />
              </Typography>
              <Typography
                fontFamily={"Robato"}
                fontSize={"22px"}
                textAlign={"center"}
                maxWidth={700}
              >
                Clients
              </Typography>
            </Box>
          </Box>
          <Box
            display={"flex"}
            padding={{ xs: "20px", lg: "0px" }}
            alignItems={"center"}
            gap={"10px"}
          >
            <Typography fontSize={"18px"} fontFamily={"Robato"}>
              View all case studies
            </Typography>
            <Link to={routes.WORK}>
              <IconButton
                sx={{
                  background: "lightgray",
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </AppContainer>
      <ProjectsComponent
        flexDirection="row"
        Bigimg={
          "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/663c5601bef4c956d4ac7aa1_Frame%2012353%20copy.webp"
        }
        Smallimg={
          "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/65811b35ec3819bfd7b85f96_Frame%202563.webp"
        }
        altText={""}
        bigChips={["Beauty & Personal Care", "Shopify Plus"]}
        title1={"Avon"}
        title2={"Lakanto"}
        rating={5}
        status1={"Ongoing"}
        status2={""}
        smallChips={["Food & Beverage", "Shopify Plus"]}
      />
      <ProjectsComponent
        flexDirection="row-reverse"
        Bigimg={
          "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/663af09b40262b45c1563c88_Frame%2012352%20copy.webp"
        }
        Smallimg={
          "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/635b5c4b26c897e86ed3a95d_Frame%201198(2).jpg"
        }
        altText={""}
        title1={"Nupure"}
        title2={"Ingarden"}
        rating={5}
        status1={"Ongoing"}
        status2={"Ongoing"}
        bigChips={["Health & Wellness", "Shopify Plus"]}
        smallChips={["Food & Beverage"]}
      />
      <ProjectsComponent
        flexDirection="row"
        Bigimg={
          "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/62d749256bb311283bed562d_607d8f9932261b46db184cdc_Frame%20181(1).webp"
        }
        Smallimg={
          "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/65fcffb8d4eef1ebc6bb64dd_Frame%2012349%20copy.webp"
        }
        altText={""}
        title1={"DS Labaratories"}
        title2={"Aware Nutrition"}
        rating={5}
        status1={""}
        status2={""}
        bigChips={["Beauty & Personal Care", "Shopify Plus"]}
        smallChips={["Health & Wellness", "Shopify Plus"]}
      />

      <Box
        textAlign={"start"}
        padding={"2rem 0"}
        width={"100%"}
        bgcolor={"black"}
      >
        <ServiceSection />
      </Box>

      <AppContainer maxWidth={1350}>
        <Typography
          padding={"2rem 0"}
          fontFamily={"Robato"}
          fontSize={{ xs: "25px", sm: "30px", md: "60px" }}
          textAlign={"center"}
        >
          Gallery of Innovation and Creativity
        </Typography>
      </AppContainer>
      <Box
        sx={{
          overflowY: "scroll", // Enable scrolling
          scrollbarWidth: "none",
        }}
      >
        {/* Text Overlay */}
        <Box
          sx={{
            position: "sticky",
            top: "40%", // Keeps the text at the top
            zIndex: 2,

            maxWidth: 600,
            margin: "auto",
            backdropFilter: "blur(5px)", // Applies blur effect
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with transparency
            padding: "1rem",
            color: "white",
            textAlign: "center",
            borderRadius: "50px",
          }}
        >
          <Typography
            variant="h6"
            padding={"1rem 0"}
            color="white"
            textAlign="center"
          >
            Scroll to see the images below
          </Typography>
        </Box>

        {/* Masonry Image List */}
        <MasonryImageList />
      </Box>
    </>
  );
}

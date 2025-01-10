import { Box, Divider, IconButton, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import AppContainer from "../../Shared-fronend/AppContainer";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CountUp from "react-countup";
import FaqAccordion from "../Faq/Faq";
import MasonryImageList from "../CaseStudy/MasinoryImageList";
import ProjectData from "../Data/ProjectData";
import ProjectsComponent from "./ProjectsComponent";
import ReviewsSection from "./ReviewsSection";
import ServiceSection from "./ServiceSection";
import routes from "../../routes/routes";

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

  const navigate = useNavigate();

  const handleProjectClick = (id: string, type: string) => {
    navigate(`/project/${id}/${type}`);
  };

  // Reference for "Our Work" section
  const ourWorkRef = useRef<HTMLDivElement>(null);

  // Scroll to "Our Work" section
  const scrollToOurWork = () => {
    if (ourWorkRef.current) {
      ourWorkRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(10px);
            }
          }

          .bounce:hover {
            animation: bounce 0.6s ease-in-out infinite;
          }
        `}
      </style>
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

        {/* Down Arrow */}
        <Box textAlign="center" mt={3}>
          <IconButton
            onClick={scrollToOurWork}
            className="bounce"
            sx={{
              color: "black",
              background: "lightgray",
              "&:hover": {
                background: "transparent",
                color: "white",
              },
            }}
          >
            <ArrowDownwardIcon />
          </IconButton>
        </Box>
      </div>
      <Box bgcolor={"black"}>
        <ReviewsSection />
      </Box>
      {/* Our Work Section */}
      <div ref={ourWorkRef}>
        <AppContainer mt={"20px"} padding={"0px !important"} maxWidth={1350}>
          <Box padding={"0 20px"}>
            <Typography
              paddingLeft={{ xs: "0px", sm: "30px", lg: "0px" }}
              fontFamily={"Robato"}
              fontSize={"28px"}
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
          </Box>
        </AppContainer>
      </div>
      {ProjectData.map((project, index) => (
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
          BigProjectClick={() => handleProjectClick(project.id, project.title1)}
          smallProjectClick={() =>
            handleProjectClick(project.id, project.title2)
          }
        />
      ))}
      <Box
        textAlign={"start"}
        padding={"2rem 0"}
        width={"100%"}
        bgcolor={"black"}
      >
        <ServiceSection />
      </Box>
      <Box
        bgcolor={"black"}
        sx={{
          overflowY: "scroll", // Enable scrolling
          scrollbarWidth: "none",
        }}
        padding={"0 20px"}
      >
        <Divider
          orientation="horizontal"
          sx={{
            background: "white",
            width: "90%", // Use 'width' instead of 'maxWidth'
            margin: "2rem auto", // Centers the divider
          }}
        />
        <Typography
          padding={"2rem 0"}
          color={"white"}
          fontFamily={"Robato"}
          fontSize={{ xs: "25px", sm: "30px", md: "60px" }}
          textAlign={"center"}
        >
          Gallery of Innovation and Creativity
        </Typography>
        <MasonryImageList />
      </Box>
      <Box bgcolor={"black"}>
        <FaqAccordion />
      </Box>
    </>
  );
}

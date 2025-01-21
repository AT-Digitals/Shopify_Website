import { Box, IconButton, Stack, Typography } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect } from "react";

const careers = [
  {
    heading: "The Role",
    task1: " • Write structured, well-organized and reusable code",
    task2:
      " • Work closely with fast-growing boutique brands on refining the layout of their Shopify stores",
    task3:
      " • Support technically the Shopify stores we have already built for key clients",
    task4: " • Upgrade and extend the storefront of existing Shopify stores",
    task5:
      " • Migrate from other platforms or build Shopify stores from scratch",
    task6:
      " • Learn and implement best practices from more senior members of the team",
    task7: "",
    task8: "",
    task9: "",
    task10: "",
  },
  {
    heading: "Required skills",
    task1: " • Some professional experience in web development",
    task2: " • Expertise in HTML, SASS/SCSS, Javascript, JSON",
    task3: " • Good command of written and spoken English",
    task4: " • High attention to detail",
    task5: " • Experience with a modern JS framework ( like React JS )",
    task6: " • Ability to communicate freely, clearly and constructively",
    task7:
      " • Professional attitude and inner willingness to take responsibility",
    task8: "",
    task9: "",
    task10: "",
  },
  {
    heading: "Warmly welcomed skills",
    task1: " • Experience with Shopify ( strong bonus )",
    task2: " • Main knowledge of LIQUID (Shopify’s templating language)",
    task3: " • Experience with E-commerce",
    task4:
      " • Knowledge of Ruby / Node.js or any other modern back end technology",
    task5: "",
    task6: "",
    task7: "",
    task8: "",
    task9: "",
    task10: "",
  },
  {
    heading: "Benefits",
    task1: " • Highly competitive salary",
    task2: " • Office based in the city center of Varna",
    task3: " • Christmas 13th salary",
    task4:
      " • Opportunity to develop your professional and business skills further",
    task5: " • Opportunity to progressively grow with the company",
    task6: " • Technology allowance",
    task7:
      " • Young, vibrant, and motivating culture - you will come to work with joy and passion",
    task8: " • Additional health insurance ( coming soon )",
    task9: " • Non-working team meetings and adventures",
    task10: " • Multisport",
  },
];

export default function JuniorDeveloperPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      sx={{
        background: "black",
        width: "100%",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid lightgrey",
          paddingBottom: "80px",
        }}
      >
        <Box padding={"20px 30px"}>
          <Typography
            fontFamily="Roboto"
            sx={{
              color: "white",
              fontSize: "20px",
            }}
          >
            Full time | Varna, Bulgaria
          </Typography>
          <Typography
            fontFamily="Roboto"
            sx={{
              fontSize: "50px",
              fontWeight: "400",
              color: "white",
            }}
          >
            Junior Front End Developer
          </Typography>
          <Typography
            fontFamily="Roboto"
            sx={{
              fontSize: "20px",
              fontWeight: "400",
              color: "white",
              width: "100%",
              maxWidth: "650px",
            }}
          >
            CraftBerry is looking for a motivated Front-End Developer to join
            our growing team of ambitious folks.
          </Typography>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"80px 30px"}
        sx={{
          borderBottom: "1px solid lightgrey",
          paddingBottom: "120px",
        }}
      >
        <Typography
          fontFamily="Roboto"
          sx={{
            fontSize: "50px",
            fontWeight: "400",
            color: "white",
          }}
        >
          Summary
        </Typography>
        <Stack
          flexDirection={"column"}
          gap={"30px"}
          sx={{ width: "100%", maxWidth: "850px" }}
        >
          <Typography
            fontFamily="Roboto"
            sx={{
              fontSize: "20px",
              color: "white",
            }}
          >
            Are you a developer with a passion for clean and efficient code?
            Would you enjoy building complex Shopify stores for internationally
            recognized, sustainable, and ethical brands?
          </Typography>
          <Typography
            fontFamily="Roboto"
            sx={{
              fontSize: "20px",
              color: "white",
            }}
          >
            At CraftBerry, we elevate premium eCommerce brands by designing and
            building remarkable e-commerce experiences. We deliver modern-day
            craftsmanship for international e-commerce brands that want to stand
            out.
          </Typography>
          <Typography
            fontFamily="Roboto"
            sx={{
              fontSize: "20px",
              color: "white",
            }}
          >
            We are looking for a bright, easygoing person who will join our
            young and ambitious team and bring their energy and technical
            knowledge to the company.
          </Typography>
          <Typography
            fontFamily="Roboto"
            sx={{
              fontSize: "20px",
              color: "white",
            }}
          >
            The ideal candidate should have some front-end experience.
          </Typography>
        </Stack>
      </Box>
      {careers.map((task) => (
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          padding={"80px 30px"}
          sx={{
            borderBottom: "1px solid lightgrey",
            paddingBottom: "120px",
          }}
        >
          <Typography
            fontFamily="Roboto"
            sx={{
              fontSize: "50px",
              fontWeight: "400",
              color: "white",
            }}
          >
            {task.heading}
          </Typography>
          <Stack
            flexDirection={"column"}
            gap={"30px"}
            sx={{ width: "100%", maxWidth: "850px" }}
          >
            <Typography
              fontFamily="Roboto"
              sx={{ fontSize: "20px", color: "white" }}
            >
              {task.task1}
            </Typography>
            <Typography
              fontFamily="Roboto"
              sx={{ fontSize: "20px", color: "white" }}
            >
              {task.task2}
            </Typography>
            <Typography
              fontFamily="Roboto"
              sx={{ fontSize: "20px", color: "white" }}
            >
              {task.task3}
            </Typography>
            <Typography
              fontFamily="Roboto"
              sx={{ fontSize: "20px", color: "white" }}
            >
              {task.task4}
            </Typography>
            <Typography
              fontFamily="Roboto"
              sx={{ fontSize: "20px", color: "white" }}
            >
              {task.task5}
            </Typography>
            <Typography
              fontFamily="Roboto"
              sx={{ fontSize: "20px", color: "white" }}
            >
              {task.task6}
            </Typography>
            <Typography
              fontFamily="Roboto"
              sx={{ fontSize: "20px", color: "white" }}
            >
              {task.task7}
            </Typography>
            <Typography
              fontFamily="Roboto"
              sx={{ fontSize: "20px", color: "white" }}
            >
              {task.task8}
            </Typography>
            <Typography
              fontFamily="Roboto"
              sx={{ fontSize: "20px", color: "white" }}
            >
              {task.task9}
            </Typography>
            <Typography
              fontFamily="Roboto"
              sx={{ fontSize: "20px", color: "white" }}
            >
              {task.task10}
            </Typography>
          </Stack>
        </Box>
      ))}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"80px 30px"}
        sx={{
          borderBottom: "1px solid lightgrey",
          paddingBottom: "120px",
        }}
      >
        <Typography
          fontFamily="Roboto"
          sx={{
            fontSize: "50px",
            fontWeight: "400",
            color: "white",
          }}
        >
          What’s next?
        </Typography>
        <Stack
          flexDirection={"column"}
          gap={"30px"}
          sx={{ width: "100%", maxWidth: "850px" }}
        >
          <Typography
            fontFamily="Roboto"
            sx={{
              fontSize: "20px",
              color: "white",
            }}
          >
            If you are willing to work full-time mainly from our office in Varna
            or remotely and see your profile as a good match for us even if you
            do not cover all skill requirements, please send us your resume and
            motivational letter to hello@craftberry.co.
          </Typography>
          <Typography
            fontFamily="Roboto"
            sx={{
              fontSize: "20px",
              color: "white",
            }}
          >
            CraftBerry is an equal opportunity employer that supports diversity
            and looks for professionals with cutting-edge skills and various
            backgrounds. All applications will be treated in strict
            confidentiality and without any form of discrimination.
          </Typography>
          <Typography
            fontFamily="Roboto"
            display={"flex"}
            gap={"15px"}
            sx={{
              fontSize: "20px",
              color: "white",
            }}
          >
            Email-us
            <IconButton
              sx={{
                background: "rgb(184, 0, 64)",
                color: "white",
                width: "31px",
                height: "31px",
                transition: "width 0.3s ease",
                ":hover": {
                  background: "rgb(184, 0, 64)",
                  width: "51px",
                  borderRadius: "30px",
                },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

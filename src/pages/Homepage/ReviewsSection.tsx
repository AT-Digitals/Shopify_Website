import { Box } from "@mui/material";

export default function ReviewsSection() {
  return (
    <Box
      padding={"2rem 0"}
      display={"flex"}
      justifyContent={"space-between"}
      maxWidth={1000}
      margin={"auto"}
    >
      <Box
        display={"flex"}
        gap={"10px"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <img
          src="https://mmshopydevs.com/wp-content/uploads/Google-logo-white.png"
          alt=""
          width={126}
        />
        <img
          src="https://mmshopydevs.com/wp-content/cache/seraphinite-accelerator/s/m/d/img/a1443469285783687707dbaa471e8d7c.5c6.png"
          alt="star"
          width={60}
        />
      </Box>
      <Box
        display={"flex"}
        gap={"10px"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        {" "}
        <img
          src="https://mmshopydevs.com/wp-content/uploads/shopify-logo-300x77.png.png"
          alt=""
          width={126}
        />
        <img
          src="https://mmshopydevs.com/wp-content/cache/seraphinite-accelerator/s/m/d/img/a1443469285783687707dbaa471e8d7c.5c6.png"
          alt="star"
          width={60}
        />
      </Box>
      <Box
        display={"flex"}
        gap={"10px"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        {" "}
        <img
          src="https://mmshopydevs.com/wp-content/uploads/facebook-logo-300x77.png.png"
          alt=""
          width={126}
        />
        <img
          src="https://mmshopydevs.com/wp-content/cache/seraphinite-accelerator/s/m/d/img/a1443469285783687707dbaa471e8d7c.5c6.png"
          alt="star"
          width={60}
        />
      </Box>
    </Box>
  );
}

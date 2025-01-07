import { Box, Typography } from "@mui/material";

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
  );
}

import { Box, Typography } from "@mui/material";

import ProjectsComponent from "./ProjectsComponent";
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

      <Box maxWidth={1350} margin={"auto"} padding={"2rem 0"}>
        <Typography
          fontFamily={"Robato"}
          fontSize={"50px"}
          textAlign={"center"}
          lineHeight={1.2}
        >
          Crafting Shopify <br /> Solutions for Success
        </Typography>
        <Typography
          fontFamily={"Robato"}
          fontSize={"16px"}
          textAlign={"center"}
        >
          From bespoke e-commerce designs to seamless Shopify integrations, our
          team specializes in crafting tailored solutions for businesses of all
          sizes. Whether it's enhancing store functionality, optimizing user
          experience, or implementing custom Shopify apps, we bring expertise
          and creativity to every project. Our proven track record of working
          with industry-leading brands ensures that your Shopify store not only
          meets but exceeds expectations, empowering your business to scale and
          thrive in the digital marketplace.
        </Typography>
      </Box>
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
    </>
  );
}

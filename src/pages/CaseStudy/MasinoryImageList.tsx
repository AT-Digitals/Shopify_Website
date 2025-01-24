import * as React from "react";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import alter1 from "../../assets/PD2.png";
import alter2 from "../../assets/PD4.png";
import alter3 from "../../assets/PD5.png";
import gunner1 from "../../assets/GunnerPDVIEW-1536x997.png";
import gunner2 from "../../assets/GunnerPD1.png";
import gunner3 from "../../assets/GunnerPD2.png";
import gunner4 from "../../assets/GunnerPD3.png";
import pink1 from "../../assets/PMDPD1.png";
import pmd1 from "../../assets/PMD_BANNER-1-1536x292.png";
import pmd2 from "../../assets/PinkPD1 (1).png";
import pmd3 from "../../assets/PinkPD2.png";
import pmd4 from "../../assets/PinkPD4.png";

export default function MasonryImageList() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 400, sm: 400, md: 1100 },
        overflowY: "scroll",
        scrollbarWidth: "none",
      }}
      // marginTop={{ xs: 0, sm: 0, md: "-80px" }}
    >
      <ImageList
        variant="masonry"
        cols={3}
        gap={10}
        style={{
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              width={"100%"}
              style={{
                borderRadius: "20px",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: gunner1,
    title: "gunner1",
  },
  {
    img: alter1,
    title: "Sink",
  },
  {
    img: pmd2,
    title: "Beauty",
  },
  {
    img: gunner2,
    title: "Blinds",
  },
  {
    img: "https://indulgentfoods.com/cdn/shop/files/FrySauce_20-10-21_1.png?v=1729195913&width=600",
    title: "food",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1789/7273/files/shopify-shop-her-one.png?v=1723556161",
    title: "Clothing",
  },
  {
    img: "https://www.pinkanee.com/cdn/shop/files/section-07-new.jpg?v=1654779857&width=2000",
    title: "coffee",
  },
  {
    img: gunner3,
    title: "Coffee",
  },
  //   2

  {
    img: pink1,
    title: "Coffee",
  },
  {
    img: alter3,
    title: "Coffee",
  },
  {
    img: "  https://a.storyblok.com/f/156985/1268x712/7f5f8e1b06/chubbies-shopify-store-clothing-example.webp",
    title: "Coffee",
  },
  {
    img: pmd4,
    title: "Coffee",
  },
  {
    img: "https://indulgentfoods.com/cdn/shop/files/Chkn.jpg?v=1629319454&width=900",
    title: "Coffee",
  },

  {
    img: gunner4,
    title: "Coffee",
  },

  {
    img: alter2,
    title: "Coffee",
  },
  {
    img: " https://indulgentfoods.com/cdn/shop/files/Fry_Sauce.jpg?v=1629239222&width=1000",
    title: "Coffee",
  },
  {
    img: pmd3,
    title: "Coffee",
  },
];

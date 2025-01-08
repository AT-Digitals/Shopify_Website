import * as React from "react";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function MasonryImageList() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 400, sm: 400, md: 1100 },
        overflowY: "scroll",
        scrollbarWidth: "none",
      }}
      marginTop={{ xs: 0, sm: 0, md: "-80px" }}
    >
      <ImageList
        variant="masonry"
        cols={3}
        gap={5}
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
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "https://cdn.prod.website-files.com/6033a387edbf91dc8a542135/62d749256bb311283bed562d_607d8f9932261b46db184cdc_Frame%20181(1).webp",
    title: "Bed",
  },
  {
    img: "https://shopidevs.com/wp-content/uploads/2022/05/opi-beauty-stores.jpg",
    title: "Books",
  },
  {
    img: "https://www.fatbit.com/fab/wp-content/uploads/2017/08/Perfect-Solution-for-Online-Grocery-Store.png",
    title: "Sink",
  },
  {
    img: "https://cosmoprofnorthamerica.com/wp-content/uploads/Single-Dose-Beauty.jpg",
    title: "Beauty",
  },
  {
    img: "https://essential-addons.com/wp-content/uploads/2021/05/Banner-2.jpg",
    title: "Blinds",
  },
  {
    img: "https://printify.com/wp-content/uploads/2023/10/Best-Shopify-Store-Examples-to-Learn-From.png",
    title: "Chairs",
  },
  {
    img: "https://agentestudio.com/uploads/ckeditor/pictures/1807/atterley.jpg",
    title: "Clothing",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0070/7032/files/shopify-store-verve.png?v=1694804615",
    title: "coffee",
  },
  {
    img: "https://a.storyblok.com/f/156985/1292x641/fa8fc8eb0e/haus-shopify-store-example.webp/m/",
    title: "Coffee",
  },
  //   2

  {
    img: "https://genovawebart.com/hubfs/img/webp/blog-article-best-shopify-clothing-stores-modcloth-online-clothing-store-on-shopify-homepage-and-navigation-menu-screenshot.webp",
    title: "Coffee",
  },
  {
    img: "https://www.optimonk.com/wp-content/uploads/mott-and-bow.png",
    title: "Coffee",
  },
  {
    img: "  https://a.storyblok.com/f/156985/1268x712/7f5f8e1b06/chubbies-shopify-store-clothing-example.webp",
    title: "Coffee",
  },
  {
    img: " https://a.storyblok.com/f/156985/1284x651/4c4618307e/bombas-shopify-store-example.png/m/",
    title: "Coffee",
  },
  //   {
  //     img: "https://cdn.shopify.com/s/files/1/1789/7273/files/shopify-shop-her-one.png?v=1723556161",
  //     title: "Coffee",
  //   },
  //   3

  {
    img: "https://cdn.shopify.com/s/files/1/0070/7032/files/shopify-store-kulala.png?v=1694802725",
    title: "Coffee",
  },

  {
    img: "  https://www.digitalsilk.com/wp-content/uploads/2024/09/DryRobe.jpg",
    title: "Coffee",
  },
  {
    img: "  https://www.shipbob.com/wp-content/uploads/2019/01/Screen-Shot-2020-01-06-at-10.10.33-AM.png",
    title: "Coffee",
  },
  {
    img: "  https://cdn.shopify.com/s/files/1/0070/7032/files/shopify-store-blkbold.png?v=1694804551",
    title: "Coffee",
  },
];

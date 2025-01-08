import { Box } from "@mui/material";
import ProjectsComponent from "../Homepage/ProjectsComponent";

export default function WorkPage() {
  return (
    <Box>
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
    </Box>
  );
}

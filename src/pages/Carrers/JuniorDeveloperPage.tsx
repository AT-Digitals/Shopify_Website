import { useEffect } from "react";
import CustomDeveloperComponent from "../../Shared-fronend/CustomDeveloperComponent";

export default function JuniorDeveloperPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <CustomDeveloperComponent jobTitle="Junior Front-end Developer" />;
}

import { useEffect } from "react";
import CustomDeveloperComponent from "../../Shared-fronend/CustomDeveloperComponent";

export default function SeniorDeveloperPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <CustomDeveloperComponent jobTitle="Mid Front-end Developer" />;
}

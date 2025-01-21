import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Aboutpage from "../pages/About/About";
import CareersPage from "../pages/Carrers/Carrers";
import JuniorDeveloperPage from "../pages/Carrers/JuniorDeveloperPage";
import SeniorDeveloperPage from "../pages/Carrers/SeniorDeveloperPage";
import HomePage from "../pages/Homepage/HomePage";
import ServicePage from "../pages/Service/ServicePage";
import PrivacyPolicy from "../pages/Terms&Conditions/Privacy";
import TermsandConditions from "../pages/Terms&Conditions/TermsandConditions";
import ProjectDetailPage from "../pages/Work/ProjectDetailPage";
import WorkPage from "../pages/Work/Works";
import AppLayout from "../Shared-fronend/AppLayout";
import routes from "./routes";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.ROOT} element={<AppLayout />}>
          <Route path={routes.ROOT} element={<HomePage />} />
          <Route path={routes.ABOUT} element={<Aboutpage />} />
          <Route path={routes.WORK} element={<WorkPage />} />
          <Route path="/project/:id/:type" element={<ProjectDetailPage />} />
          <Route path={routes.SERVICE} element={<ServicePage />} />
          <Route path={routes.TERMS} element={<TermsandConditions />} />
          <Route path={routes.PRIVACY} element={<PrivacyPolicy />} />
          <Route path={routes.CARRERS} element={<CareersPage />} />
          <Route path={routes.SENIOR} element={<SeniorDeveloperPage />} />
          <Route path={routes.JUNIOR} element={<JuniorDeveloperPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

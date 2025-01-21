import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Aboutpage from "../pages/About/About";
import AppLayout from "../Shared-fronend/AppLayout";
import CareersPage from "../pages/Carrers/Carrers";
import HomePage from "../pages/Homepage/HomePage";
import PrivacyPolicy from "../pages/Terms&Conditions/Privacy";
import ProjectDetailPage from "../pages/Work/ProjectDetailPage";
import ServicePage from "../pages/Service/ServicePage";
import TermsandConditions from "../pages/Terms&Conditions/TermsandConditions";
import WorkPage from "../pages/Work/Works";
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
        </Route>
      </Routes>
    </Router>
  );
}

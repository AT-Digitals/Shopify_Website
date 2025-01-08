import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Aboutpage from "../pages/About/About";
import AppLayout from "../Shared-fronend/AppLayout";
import HomePage from "../pages/Homepage/HomePage";
import ProjectDetailPage from "../pages/Work/ProjectDetailPage";
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
        </Route>
      </Routes>
    </Router>
  );
}

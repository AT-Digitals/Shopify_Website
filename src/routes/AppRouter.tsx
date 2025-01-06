import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Aboutpage from "../pages/About/About";
import AppLayout from "../Shared-fronend/AppLayout";
import HomePage from "../pages/Homepage/HomePage";
import routes from "./routes";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.ROOT} element={<AppLayout />}>
          <Route path={routes.ROOT} element={<HomePage />} />
          <Route path={routes.ABOUT} element={<Aboutpage />} />
        </Route>
      </Routes>
    </Router>
  );
}

import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const routes = [
  {
    component: <Home />,
    name: "Home",
    path: "/",
    visible: false,
  },
];

const Routes = () => (
  <BrowserRouter>
    <Navbar title="Users CRUD" routes={routes} />
    <RouterRoutes>
      {routes.map(({ path, component }) => (
        <Route exact key={path} path={path} element={component} />
      ))}
    </RouterRoutes>
  </BrowserRouter>
);

export default Routes;

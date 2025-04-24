import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import List from "./pages/List";
import GetById from "./pages/GetById";
import Delete from "./pages/Delete";
import Update from "./pages/Update";

const routes = [
  {
    component: <Home />,
    name: "Home",
    path: "/",
    visible: false,
  },
  {
    component: <Create />,
    name: "Create User",
    path: "/create",
  },
  {
    component: <List />,
    name: "List Users",
    path: "/list",
  },
  {
    component: <GetById />,
    name: "Get User by Id",
    path: "/get",
  },
  {
    component: <Delete />,
    name: "Delete User",
    path: "/delete",
  },
  {
    component: <Update />,
    name: "Update User Data",
    path: "/update",
  },
];

const Routes = () => (
  <BrowserRouter>
    <Navbar title="User Management" routes={routes} />
    <RouterRoutes>
      {routes.map(({ path, component }) => (
        <Route exact key={path} path={path} element={component} />
      ))}
    </RouterRoutes>
  </BrowserRouter>
);

export default Routes;

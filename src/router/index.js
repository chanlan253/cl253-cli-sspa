import { lazy } from "react";
export default [
  {
    path: "/home",
    name: "home",
    component: lazy(() => import("pages/home"))
  },
  {
    path: "/list",
    name: "list",
    component: lazy(() => import("pages/list"))
  },
  {
    path: "/product_list",
    name: "list",
    component: lazy(() => import("pages/productList"))
  }
];

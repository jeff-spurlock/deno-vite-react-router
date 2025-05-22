import React from "react";
import { Link, Outlet } from "react-router";
import navigationConfig from "../../navigation-config.json";

export default function RootLayout() {
  return (
    <div>
      <nav>
        {navigationConfig.routes.map((route) => (
          <Link key={route.path} to={route.path}>{route.name}</Link>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}
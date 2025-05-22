import React from "react";
import { Link, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/example">Example</Link>
      </nav>
      <Outlet />
    </div>
  )
}
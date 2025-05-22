import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/layouts/RootLayout";
import App from "./Home";
import ExamplePage from "./components/views/ExamplePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/example" element={<ExamplePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
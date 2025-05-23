import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/layouts/RootLayout";
import { Home } from "./Home";
import navigationConfig from "./navigation-config.json";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          {navigationConfig.routes.map((route) => {
            const Component = route.component === "Home" 
              ? Home 
              : React.lazy(() => import(`./components/views/${route.component}.tsx`));
            
            return (
              <Route 
                key={route.path} 
                path={route.path} 
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                  </Suspense>
                } 
              />
            );
          })}    
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

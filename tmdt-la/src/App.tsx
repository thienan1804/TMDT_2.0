import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";

function App() {
  return (
    <div>
      <Routes>
        {publicRoutes.map((publicRoute, i) => {
          const Page = publicRoute.component;
          return <Route key={i} path={publicRoute.path} element={<Page />} />;
        })}
        {privateRoutes.map((privateRoute, i) => {
          const Page = privateRoute.component;
          return <Route key={i} path={privateRoute.path} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;

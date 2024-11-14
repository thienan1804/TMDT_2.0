import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PublicRoute path="/" />}>
          {publicRoutes.map((publicRoute, i) => {
            const Page = publicRoute.component;
            return <Route key={i} path={publicRoute.path} element={<Page />} />;
          })}
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          {privateRoutes.map((privateRoute, i) => {
            const Page = privateRoute.component;
            return (
              <Route key={i} path={privateRoute.path} element={<Page />} />
            );
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

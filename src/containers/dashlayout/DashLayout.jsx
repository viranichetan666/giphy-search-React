import React from "react";
import dashRoutes from "routes/dashRoutes";
// import ProtectedRoute from "routes/protectedRoute";
import { Route, Switch } from "react-router-dom";

const DashLayout = () => {
  return (
    <section className="home-layout">
      <main className="main-content">
        <Switch>
          {/* <ProtectedRoute> */}
          {dashRoutes.map((prop, key) => {
            return (
              <Route
                exact
                path={prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
          {/* </ProtectedRoute> */}
        </Switch>
      </main>
    </section>
  );
};

export default DashLayout;

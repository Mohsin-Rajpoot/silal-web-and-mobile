import React, { Suspense } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import routes from "./Routes";

const loading = (
  <div className="" style={{ height: "100vh" }}>
    <div className="d-flex my-5 pt-3 justify-content-center">Loading...</div>
  </div>
);

const Content = ({ setSideBar , sideBar }) => {
  return (
    <div class="px-3 flex-1">
      <React.Fragment>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <route.component {...props} setSideBar={setSideBar} sideBar={sideBar} />
                    )}
                  />
                )
              );
            })}
            <Route path="*" render={() => <Redirect to="/404" />} />
          </Switch>
        </Suspense>
      </React.Fragment>
    </div>
  );
};

export default React.memo(Content);

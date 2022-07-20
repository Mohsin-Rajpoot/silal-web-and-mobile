import React, { Suspense } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import routes from "./routes/Routes";

// const Loginpage = React.lazy(() =>
//   import("./views/pages/Login/Loginpage/Loginpage")
// );
// const Otppage = React.lazy(() => import("./views/pages/Login/Otppage/Otppage"));
// const Verificationpage = React.lazy(() =>
//   import("./views/pages/Login/Verificationpage/Verificationpage")
// );
// const Resetpass = React.lazy(() =>
//   import("./views/pages/Login/Resetpassword/Resetpass")
// );
// const Emailverifycode = React.lazy(() =>
//   import("./views/pages/Login/Emailverifycode/Emailverifycode")
// );
// const Createnewpassword = React.lazy(() =>
//   import("./views/pages/Login/Createnewpassword/Createnewpassword")
// );
// const Splashpage = React.lazy(() =>
//   import("./views/pages/Login/Splashpage/Splashpage")
// );
// const routes = [
//   { path: "/", exact: true, name: "Loginpage", component: Loginpage },
//   { path: "/otp", exact: true, name: "Otppage", component: Otppage },
//   {
//     path: "/verification",
//     exact: true,
//     name: "Verificationpage",
//     component: Verificationpage,
//   },
//   {
//     path: "/resetpassword",
//     exact: true,
//     name: "Resetpass",
//     component: Resetpass,
//   },
//   {
//     path: "/emailverifycode",
//     exact: true,
//     name: "Emailverifycode",
//     component: Emailverifycode,
//   },
//   {
//     path: "/createnewpassword",
//     exact: true,
//     name: "Createnewpassword",
//     component: Createnewpassword,
//   },
//   { path: "/splash", exact: true, name: "Splashpage", component: Splashpage },
// ];
const loading = (
  <div className="" style={{ height: "100vh" }}>
    <div className="d-flex my-5 pt-3 justify-content-center">Loading...</div>
  </div>
);

const AuthLayout = ({ setSideBar, sideBar }) => {
  return (
    <div className="main-content px-3 flex-1">
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
                      <route.component
                        {...props}
                        setSideBar={setSideBar}
                        sideBar={sideBar}
                      />
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

export default React.memo(AuthLayout);

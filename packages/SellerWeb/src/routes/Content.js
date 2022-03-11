import React, { Suspense } from 'react'
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import routes from './Routes'

const loading = (
  <div className="" style={{ height: "100vh" }}>
    <div className="d-flex my-5 pt-3 justify-content-center">
      Loading...
    </div>
  </div>
)

const Content = ({ setSideBar }) => {
  return (
    <React.Fragment>
      <Suspense fallback={loading}>
        <Switch>
          {routes.map((route, idx) => {
            return route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (

                  <route.component
                    {...props}
                    setSideBar={setSideBar}
                  />

                )} />
            )
          })}
          <Route path='*' render={() =>
          (
            <Redirect to="/404" />
          )
          } />
        </Switch>
      </Suspense>

    </React.Fragment>
  )
}

export default React.memo(Content)

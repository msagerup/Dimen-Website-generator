import React, { Suspense, Fragment, lazy } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import HomeView from '../views/homepage'
import WebPageLayout from "../layouts/WebPageLayout";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<h2>Loading</h2>}>
    <Switch>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Layout>
                {route.routes ? (
                  renderRoutes(route.routes)
                ) : (
                  <Component {...props} />
                )}
              </Layout>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: "/404",
		layout: WebPageLayout,
    component: lazy(() => import("../views/errors/NotFoundView")),
  },
  {
    path: "*",
    routes: [
      {
        exact: true,
        path: "/",
				layout: WebPageLayout,
        component: HomeView,
      },
      // {
      //   exact: true,
      //   // layout: MainPageTopBar,
      //   path: "/about",
      //   component: lazy(() => import("src/views/HomePage/About")),
      // },
      {
        component: () => <Redirect to='/404' />,
      },
    ],
  },
];

export default routes;

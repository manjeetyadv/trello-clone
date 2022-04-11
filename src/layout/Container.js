import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import routes from '../routes';

const TheContent = () => {
  return (
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={() => <route.component />}
                  />
                )
              );
            })}
          </Switch>
  );
};

export default React.memo(TheContent);

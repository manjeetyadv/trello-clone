import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { LoginContext } from './loginContext';
import './assets/scss/index.scss';
import { getItemFromSessionStore } from './helpers/utils.js';
const Login = React.lazy(() => import('./components/Auth/login'));
const Register = React.lazy(() => import('./components/Auth/register'));
const Layout = React.lazy(() => import('./layout'));

function App() {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedIn = getItemFromSessionStore('employeeId');
    if (loggedIn) {
      setAuthed(true);
    }
    setLoading(false);
  }, []);
  return loading ? (
    'loading...'
  ) : (
    <LoginContext.Provider value={{ authed, setAuthed }}>
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/' name='Board' component={authed ? Layout : Login} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;

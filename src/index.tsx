import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './css/index.css';

import { ROUTES } from './constants/routes';
import Spinner from './components/Spinner';
import reportWebVitals from './reportWebVitals';

const Home = lazy(() => import('./screens/Home'));
const Login = lazy(() => import('./screens/Login'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={ROUTES.LOGIN}>
            <Login />
          </Route>
          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

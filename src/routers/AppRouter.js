import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import MainDashboardPage from '../components/MainDashbaordPage';
import CreateExamPage from '../components/CreateExamPage';
import TakeExamPage from '../components/TakeExamPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={MainDashboardPage}/>
        <PrivateRoute path="/create_exam" component={CreateExamPage}/>
        <PrivateRoute path="/take_exam" component={TakeExamPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
 
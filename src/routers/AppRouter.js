import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import CreateExamPage from '../components/CreateExamPage';
import AddQuestionPage from '../components/AddQuestionPage';
import EditQuestionPage from '../components/EditQuestionPage';
import ExamNamePage from '../components/ExamNamePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import TakeExamPage from '../components/TakeExamPage';
import AvailableExamsPage from '../components/AvailableExamsPage';
import MainDashboardPage from '../components/MainDashboardPage';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={MainDashboardPage} />
        <PrivateRoute path="/exam_name" component={ExamNamePage} exact={true}/>
        <PrivateRoute path="/create_exam" component={CreateExamPage} />
        <PrivateRoute path="/create" component={AddQuestionPage} />
        <PrivateRoute path="/edit/:id" component={EditQuestionPage} />
        <PrivateRoute path="/available_exams" component={AvailableExamsPage}/>
        <PrivateRoute path="/take_exam" component={TakeExamPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
 
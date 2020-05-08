import React from 'react';
import QuestionList from './QuestionList';
import QuestionListFilters from './QuestionListFilters';
import QuestionsSummary from './QuestionsSummary';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

const CreateExamPage = () => (
  <div>
    <QuestionsSummary />
    <QuestionList />
  </div>
);

export default CreateExamPage;
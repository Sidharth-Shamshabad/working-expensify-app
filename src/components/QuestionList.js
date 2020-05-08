import React from 'react';
import { connect } from 'react-redux';
import QuestionListItem from './QuestionListItem';
import selectQuestions from '../selectors/questions';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

export const QuestionList = (props) => (
  <div className="content-container">
  <div className="list-header">
    <div className="show-for-mobile">Questions</div>
    <div className="show-for-desktop">Questions</div>
    
  </div>
    <div className="list-body">
      {
        props.questions.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No questions</span>
          </div>
        ) : (
            props.questions.map((question) => {
              // console.log(question.id)   
              return <QuestionListItem key={question.id} {...question} />;
            })
          )
      }
    <div className="list-item">
      <Link className="button" to="/create">Add New Question</Link>
      <Link className="button" to="/dashboard">Submit Exam</Link>
    </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    questions: selectQuestions(state.questions, state.filters)
  };
};

export default connect(mapStateToProps)(QuestionList);

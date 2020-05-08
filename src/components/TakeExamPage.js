import React from 'react';
import { connect } from 'react-redux';
import QuestionListItem from './QuestionListItem';
import selectQuestions from '../selectors/questions';
import StudentQuestionListItem from '../components/StudentQuestionListItem';

export const TakeExamPage = (props) => (
    <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Questions</div>
      <div className="show-for-desktop">Question</div>
      <div className="show-for-desktop">Amount</div>
    </div>
      <div className="list-body">
        {
          props.questions.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No questions</span>
            </div>
          ) : (
              props.questions.map((question) => {
                return <StudentQuestionListItem key={question.id} {...question} />;
              })
            )
        }
      </div>
    </div>
  );
  
  const mapStateToProps = (state) => {
    return {
      questions: selectQuestions(state.questions, state.filters)
    };
  };
  
  export default connect(mapStateToProps)(TakeExamPage);
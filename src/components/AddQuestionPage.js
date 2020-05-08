import React from 'react';
import { connect } from 'react-redux';
import QuestionForm from './QuestionForm';
import { startAddQuestion } from '../actions/questions';

export class AddQuestionPage extends React.Component {
  onSubmit = (question) => {
    console.log(question)
    this.props.startAddQuestion(question);
    this.props.history.push('/create_exam');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Question</h1>
          </div>
        </div>
        <div className="content-container">
          <QuestionForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddQuestion: (question) => dispatch(startAddQuestion(question))
});

export default connect(undefined, mapDispatchToProps)(AddQuestionPage);
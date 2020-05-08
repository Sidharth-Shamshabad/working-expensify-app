import React from 'react';
import { connect } from 'react-redux';
import QuestionForm from './QuestionForm';
import { startEditQuestion, startRemoveQuestion } from '../actions/questions';

export class EditQuestionPage extends React.Component {
  onSubmit = (question) => {
    this.props.startEditQuestion(this.props.question.id, question);
    this.props.history.push('/create_exam');
  };
  onRemove = () => {
    // console.log(this.props.question.examName)
    this.props.startRemoveQuestion({ id: this.props.question.id, examName: this.props.question.examName });
    this.props.history.push('/create_exam');
  };
  render() {
    return (
      <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Question</h1>
        </div>
      </div>
        <div className="content-container">
          <QuestionForm
            question={this.props.question}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Question</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  question: state.questions.find((question) => question.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditQuestion: (id, question) => dispatch(startEditQuestion(id, question)),
  startRemoveQuestion: (data) => dispatch(startRemoveQuestion(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionPage);
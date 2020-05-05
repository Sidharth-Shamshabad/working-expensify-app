import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import MultipleChoiceQuestionForm from './MultipleChoiceQuestionForm';
import {addQuestion} from '../actions/questions';

export class CreateExamPage extends React.Component {
    onSubmit = (question) => {
        this.props; //add action here
    }
    onQuestionSubmit = (e) => {
        console.log('test');
        if(e) {
            console.log('test 2');
            <div><MultipleChoiceQuestionForm /></div>
        }
    }
    render () {
        return (
            <div>
                <h1>Create exam page</h1>
                
                <MultipleChoiceQuestionForm />
                <button onClick={this.onQuestionSubmit}>Add Question</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddQuestion: (question) => dispatch(addQuestion(question))
  });

export default connect(undefined, mapDispatchToProps)(CreateExamPage);
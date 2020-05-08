import React from 'react';
import CreateExamPage from './CreateExamPage';

export default class QuestionForm extends React.Component {
  constructor(props) {
        super(props);

        this.state = {
            examName: props.questions ? props.questions.examName : '',
            userQuestion: props.questions ? props.questions.userQuestion : '',
            optionOne: props.questions ? props.questions.optionOne : '',
            optionTwo: props.questions ? props.questions.optionTwo : '',
            optionThree: props.questions ? props.questions.optionThree : '',
            optionFour: props.questions ? props.questions.optionFour : '',
            answer: props.questions ? props.questions.answer : ''
        }
    }
    onExamNameChange = (e) => {
        const examName = e.target.value;
        this.setState(() => ({ examName }));
    };
    onQuestionChange = (e) => {
        const userQuestion = e.target.value;
        this.setState(() => ({ userQuestion }));
    };
    onOptionOneChange = (e) => {
        const optionOne = e.target.value;
        this.setState(() => ({ optionOne }));
    };
    onOptionTwoChange = (e) => {
        const optionTwo = e.target.value;
        this.setState(() => ({ optionTwo }));
    };
    onOptionThreeChange = (e) => {
        const optionThree = e.target.value;
        this.setState(() => ({ optionThree }));
    };
    onOptionFourChange = (e) => {
        const optionFour = e.target.value;
        this.setState(() => ({ optionFour }));
    };
    onAnswerChange = (e) => {
        const answer = e.target.value;
        this.setState(() => ({ answer }));
    };
    onSubmit = (e) => {
        e.preventDefault();
    
        if (!this.state.examName || !this.state.userQuestion || !this.state.optionOne || !this.state.optionTwo || !this.state.optionThree || !this.state.optionFour || !this.state.answer) {
          this.setState(() => ({ error: 'Please dont leave anything blank.' }));
        } else {
          this.setState(() => ({ error: '' }));
          this.props.onSubmit({
            examName: this.state.examName,
            userQuestion: this.state.userQuestion,
            optionOne: this.state.optionOne,
            optionTwo: this.state.optionTwo,
            optionThree: this.state.optionThree,
            optionFour: this.state.optionFour,
            answer: this.state.answer,
          });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Exam Name * Case Sensitive! *"
                    autoFocus
                    className="text-input"
                    value={this.state.examName}
                    onChange={this.onExamNameChange}
                />
                <input
                    type="text"
                    placeholder="Question"
                    autoFocus
                    className="text-input"
                    value={this.state.userQuestion}
                    onChange={this.onQuestionChange}
                />
                <input 
                    type="text"
                    placeholder="Option A"
                    className="text-input"
                    value={this.state.optionOne}
                    onChange={this.onOptionOneChange}
                />
                <input 
                    type="text"
                    placeholder="Option B"
                    className="text-input"
                    value={this.state.optionTwo}
                    onChange={this.onOptionTwoChange}
                />
                <input 
                    type="text"
                    placeholder="Option C"
                    className="text-input"
                    value={this.state.optionThree}
                    onChange={this.onOptionThreeChange}
                />
                <input 
                    type="text"
                    placeholder="Option D"
                    className="text-input"
                    value={this.state.optionFour}
                    onChange={this.onOptionFourChange}
                />
                <input 
                    type="text"
                    placeholder="Answer (Type 1, 2, 3, or 4)"
                    className="text-input"
                    value={this.state.answer}
                    onChange={this.onAnswerChange}
                />
                <div className="list-item">
                    <button className="button">Save Question</button>
                    
                </div>
            </form>
        )
    }
}

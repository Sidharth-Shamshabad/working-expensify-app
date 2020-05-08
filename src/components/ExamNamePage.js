import React from 'react';
import database from '../firebase/firebase'
import ExamNameForm from './ExamNameForm';
import configureStore from '../store/configureStore';
import {startSetQuestions} from '../actions/questions';

export default class ExamNamePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            passedExamName: this.onSubmit.finalExamName
        }
    }
    onSubmit = (examNameObject) => {
        const store = configureStore();
        const finalExamName = examNameObject.examName
        console.log(finalExamName);
        store.dispatch(startSetQuestions(finalExamName));
        this.props.history.push('/create_exam');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <ExamNameForm onSubmit={this.onSubmit} />
                    </div>
                    
                </div>
            </div>     
        )  
    }
}
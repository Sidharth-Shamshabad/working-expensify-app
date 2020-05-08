import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import selectQuestions from '../selectors/questions';
import selectQuestionsTotal from '../selectors/expenses-total';

export const QuestionsSummary = ({questionCount, questionsTotal}) => {
    const questionWord = questionCount === 1 ? ' Question' : ' Questions';
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Create Exam Page</h1>
                <h1 className="page-header__title">Total Questions Created: <span>{questionCount}</span> 
                {console.log(questionCount)}
                {questionWord}</h1>
                <p className="form__changepageinfo">Click on a question to edit or remove question.</p>
                <div className="page-header__actions">
                    
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleQuestions = selectQuestions(state.questions, state.filters);
    
    return {
        questionCount: visibleQuestions.length,
        questionsTotal: selectQuestionsTotal(visibleQuestions)
    }
};

export default connect(mapStateToProps)(QuestionsSummary);
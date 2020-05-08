import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TakeExamPage from './TakeExamPage.js';

const AvailableExamsPage = () => (
    <div>
        <h1>Available Exams</h1>
        <Link className="list-item" to="take_exam">Take Exam</Link>
    </div>
);

export default AvailableExamsPage;
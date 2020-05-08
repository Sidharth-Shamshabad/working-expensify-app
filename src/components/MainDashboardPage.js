import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const MainDashboardPage = () => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <div className="list-item">
                    <Link className="button" to="/exam_name">Create / Edit an Exam</Link>
                    <Link className="button" to="/available_exams">Take an Exam</Link>
                </div>
            </div>
        </div>
    </div>
);
export default MainDashboardPage;
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const DecidePage = () => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <div>
                    <Link className="button" to="/create_exam">Create an Exam</Link>
                    <Link className="button" to="/take_exam">Take an Exam</Link>
                </div>
            </div>
        </div>
    </div>
);

export default DecidePage;
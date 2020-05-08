import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const StudentQuestionListItem = ({ id, examName, userQuestion, optionOne, optionTwo, optionThree, optionFour, answer }) => (
//   <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{userQuestion}</h3>
        <p><button className="button">A)</button> {optionOne}</p>
        <p><button className="button">B)</button> {optionTwo}</p>
        <p><button className="button">C)</button> {optionThree}</p>
        <p><button className="button">D)</button> {optionFour}</p>
    </div>
//   </Link>

);

export default StudentQuestionListItem;

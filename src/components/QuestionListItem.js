import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const QuestionListItem = ({ id, examName, userQuestion, optionOne, optionTwo, optionThree, optionFour, answer }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{userQuestion}</h3>
      <p>A) {optionOne}</p>
      <p>B) {optionTwo}</p>
      <p>C) {optionThree}</p>
      <p>D) {optionFour}</p>
      <p>Answer: {answer}</p>
    </div>
  </Link>

);

export default QuestionListItem;

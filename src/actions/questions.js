import { v4 as uuidv4 } from 'uuid';

/**component calls action generator
 * acion generator returns object
 * component dispatches object
 * redux store changes
 * 
 * components calls action generator
 * action generator returns function
 * component dispatches function (?)
 * function runs (has the ability to dispatch other actions and do whatever it wants)
 */

import database from '../firebase/firebase';

export const addQuestion = (question) => ({
  type: 'ADD_QUESTION',
  question
});

export const startAddQuestion = (questionData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      examName = '',
      userQuestion = '',
      optionOne = '',
      optionTwo = '',
      optionThree = '',
      optionFour = '',
      answer = ''
    } = questionData;
    const finalQuestionData = {examName, userQuestion, optionOne, optionTwo, optionThree, optionFour, answer};
    return database.ref(`exams/${examName}/`).push(finalQuestionData).then((ref) => {
      dispatch(addQuestion({
        id: ref.key,
        ...finalQuestionData
      }));
      // const newFinalData = {userQuestion, optionOne, optionTwo, optionThree, optionFour, answer}
      // database.ref(`exams/${examName}/${ref.key}`).set(newFinalData)
    });
  };
};

export const removeQuestion = ({ id } = {}) => ({
  type: 'REMOVE_QUESTION',
  id
});

export const startRemoveQuestion = ({id, examName} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`exams/${examName}/${id}`).remove().then(() => {
      dispatch(removeQuestion({id}));
    });
  };
};

export const editQuestion = (id, updates) => ({
  type: 'EDIT_QUESTION',
  id,
  updates
});

export const startEditQuestion = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const newExamName = updates.examName;
    return database.ref(`exams/${newExamName}/${id}`).update(updates).then(() => {
      dispatch(editQuestion(id, updates));
    });
  };
};

export const setQuestions = (questions) => ({
  type: 'SET_QUESTIONS',
  questions
});

export const startSetQuestions = (getExamName) => {
  // console.log(getExamName);
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const getNewExamName = getExamName
    console.log(getNewExamName);
    return database.ref(`exams/${getExamName}`).push('false').once('value').then((snapshot) => {
      const questions = [];

      snapshot.forEach((childSnapshot) => {
        console.log(childSnapshot.key)
        questions.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setQuestions(questions));
    });
  };
};

export const getExamName = (examName) => {
  type: 'GET_EXAM_NAME'
  examName
}

export const startGetExamName = (examName) => {
  return (dispatch, getState) => {
    return database.ref(`exams/`).push(examName).then((ref) => {
      dispatch()
    })
  }
}
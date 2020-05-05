import database from '../firebase/firebase';

export const addQuestion = (question) => ({
    type: 'ADD_QUESTION',
    question
  });

  export const startAddQuestion = (questionData = {}) => {
    return (dispatch, getState) => {

    }
  }
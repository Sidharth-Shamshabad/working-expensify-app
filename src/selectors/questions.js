import moment from 'moment';

export default (questions, { text, sortBy, startDate, endDate }) => {
  return questions.filter((question) => {
    const createdAtMoment = moment(question.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    // const textMatch = question.userQuestion.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch// && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

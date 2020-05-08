export default (questions) => {
    return questions
        .map((question) => question.amount)
        .reduce((sum, value) => sum + value , 0);
};
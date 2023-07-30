import React from "react";

const QuestionItem = ({ question }) => {
  return (
    <div>
      <h3>{question.question}</h3>
      <p>{question.answer}</p>
    </div>
  );
};

export default QuestionItem;

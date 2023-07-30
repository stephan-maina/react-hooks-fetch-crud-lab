import React, { useState, useEffect } from "react";

const QuestionList = ({ questions }) => {
  return (
    <ul>
      {questions.map((question) => (
        <li key={question.id}>
          <h3>{question.question}</h3>
          <p>{question.answer}</p>
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
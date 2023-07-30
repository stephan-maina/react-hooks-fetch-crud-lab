import React, { useState, useEffect } from "react";

const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newQuestion = {
      question,
      answer,
    };

    // TODO: Send the question to the server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Question</label>
      <input
        type="text"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
      />
      <label>Answer</label>
      <input
        type="text"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionForm;
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import QuestionForm from "./questionform";
import QuestionList from "./questionlist";
import AdminNavbar from "./adminnavbar";

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.github.com/users/octocat`;
      const response = await fetch(url);
      const data = await response.json();

      setQuestions(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <QuestionForm />
      <QuestionList questions={questions} />
    </div>
  );
};

export default App;
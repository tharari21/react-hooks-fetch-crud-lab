import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState();
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setQuestions(questions));
  }, []);
  const onAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };
  const onDeleteQuestion = (deletedQuestionId) => {
    setQuestions(
      questions.filter((question) => question.id !== deletedQuestionId)
    );
  };
  const onUpdateQuestion = (updatedQuestion) => {
    setQuestions(
      questions.map((question) => {
        if (question.id === updatedQuestion.id) {
          return updatedQuestion;
        }
        return question;
      })
    );
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={onAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          onDeleteQuestion={onDeleteQuestion}
          onUpdateQuestion={onUpdateQuestion}
        />
      )}
    </main>
  );
}

export default App;

import React from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questions ? (
          questions.map((question) => (
            <QuestionItem
              key={question.id}
              question={question}
              onDeleteQuestion={onDeleteQuestion}
              onUpdateQuestion={onUpdateQuestion}
            ></QuestionItem>
          ))
        ) : (
          <p>Getting Questions...</p>
        )}
      </ul>
    </section>
  );
}

export default QuestionList;

import { useState } from "react";
import ReactEditor from "./CodeEditor";

const QuestionContent = ({ currentQuestion, answerState }) => {



  return (
    <>
    
      <div>
        {currentQuestion.type === "code" ? (
          <pre className="text-wrap">
            <code>
              <h1 className="text-center">{currentQuestion.title}</h1>
            </code>
            <code>{currentQuestion.question}</code>
            <ReactEditor/>
          </pre>
        ) : (
          <p className="text-center">{currentQuestion.question}</p>
        )}

        {answerState ? <p>{currentQuestion.answer}</p> : ""}
      </div>
    </>
  );
};

export default QuestionContent;

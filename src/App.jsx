import { useState } from "react";
import Button from "./components/Button";
import QuestionContent from "./components/QuestionContent";
import { questions } from "./constants/questions";

function App() {
  const [renderQuestion, setRenderQuestion] = useState(0);
  const [renderAnswer, setRenderAnswer] = useState(false)

  const nextQuestion = () => {
    setRenderQuestion((prevIndex) => (prevIndex + 1) % questions.length);
    setRenderAnswer(false)
  };

  const giveAnswer = () => {
    setRenderAnswer(true)
  }

  return (
    <div className="min-h-screen bg-gray-800">
      <header className="bg-white ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800">ReactDaily</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 min-h-[24rem] p-4 h-auto ">
              <p className=" text-gray-400 text-xl">
                <QuestionContent currentQuestion={questions[renderQuestion]} answerState={renderAnswer}/>
              </p>
            </div>
            <div className="flex justify-center space-x-4 mt-4 ">
              <Button
                className={
                  "bg-white rounded-lg p-2 font-mono text-gray-800 hover:bg-gray-300"
                }
                title={"Link to Question"}
              />
              <Button
                className={
                  "bg-white rounded-lg p-2 font-mono text-gray-800 hover:bg-gray-300"
                }
                title={"Answer"}
                onClick={giveAnswer}
              />

              <Button
                className={
                  "bg-white rounded-lg p-2 font-mono text-gray-800 hover:bg-gray-300"
                }
                title={"Next"}
                onClick={nextQuestion}
              />
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

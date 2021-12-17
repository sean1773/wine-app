import React, { useState } from "react";
import StartPage from "./components/StartPage/StartPage";
import Quiz from "./components/Quiz/Quiz";

const DUMMY_DATABASE = [
  {
    id: "1",
    question: "Where are Bordeaux wines produced?",
    answerOptions: ["Italy", "France", "Spain", "Chile"],
    correctAnswer: "France",
    optionalInfo: "",
  },
  {
    id: "2",
    question: "Which is NOT a style of Port?",
    answerOptions: ["Ruby", "Amontillado", "Colheita", "LBV"],
    correctAnswer: "Amontillado",
    optionalInfo: "Amontillado is a variety of Sherry",
  },
  {
    id: "3",
    question: "Malbec originated in what country",
    answerOptions: ["Austria", "Argentina", "Italy", "France"],
    correctAnswer: "France",
    optionalInfo:
      "While nearly 70% of Malbecs are produced in Argentina, it is not the original country of origin",
  },
  {
    id: "4",
    question:
      "Which Italian wine region is incorrectly paired with the grape varietal?",
    answerOptions: [
      "Tuscany - Sangiovese",
      "Piedmont - Nebbiolo",
      "Campania - Aglianico",
      "Lazio - Tempranillo",
    ],
    correctAnswer: "Lazio - Tempranillo",
    optionalInfo: "Tempranillo is most famously grown in Spain",
  },
];

const App = () => {
  const [startQuiz, setStartQuiz] = useState(true);

  const startQuizHandler = () =>{
    setStartQuiz(!startQuiz);
};

  return (
    <div>
      { startQuiz && <StartPage startQuiz={startQuizHandler} />}
      <Quiz questionInfo={DUMMY_DATABASE} />
    </div>
  );
};

export default App;

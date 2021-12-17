import React, { useState } from "react";
import AnswersCard from "./AnswersCard";
import QuestionCard from "./QuestionCard";
import Card from "../UI/Card";

const Quiz = (props) => {
  
    // let qIndex = 1;

    // const [currentQuestion, setCurrentQuestion] = useState(props);

    // const questionHandler = (props[0].id) => {
    //     setCurrentQuestion();
    // }

  return (
    <Card>
      <QuestionCard info={props} />
      <AnswersCard />
    </Card>
  );
};

export default Quiz;

import React, { useState } from "react";
import AnswersCard from "./AnswersCard";
import QuestionCard from "./QuestionCard";
import Card from "../UI/Card";

const Quiz = (props) => {
  
  const data = props;  



  return (
    <Card>
      <QuestionCard info={data} />
      <AnswersCard info={data} />
    </Card>
  );
};

export default Quiz;

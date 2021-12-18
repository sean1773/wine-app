import React from "react";
import Card from "../UI/Card";

const QuestionCard = (props) => {
    
   let question = props.info.questionInfo[0].question;


    return (
        <Card>
            <h2>{question}</h2>
        </Card>
    )
};

export default QuestionCard;

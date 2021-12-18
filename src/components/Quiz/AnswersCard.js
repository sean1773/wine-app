import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AnswersCard = (props) => {

    console.log('answerCard', props.info.questionInfo[0].answerOptions[0])
    const options = props.info.questionInfo[0].answerOptions.map(answer => <Button type={props.submit}>{answer}</Button>)
 return (  
 <Card>
     {options}
 </Card>
 );
};

export default AnswersCard;

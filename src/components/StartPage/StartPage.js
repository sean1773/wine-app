import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./StartPage.module.css";

const StartPage = (props) => {
  return (
    <div className={classes.backdrop}>
      <Card className={classes.start_menu}>
        <div>
          <h1 className={classes.header}>In Vino Veritas</h1>
          <p className={classes.content}>Grow your knowledge of wine</p>
        </div>
          <Button className={classes.actions}>Log In</Button>
          <Button className={classes.actions} onClick={props.startQuiz}>
            Start Quiz
          </Button>
      </Card>
    </div>
  );
};

export default StartPage;

import React, { useState } from "react";

const StartScreen = e => {
  const [screenStatus, closeStartScreen] = useState(
    "main_start__container visible"
  );
  return (
    <div className={screenStatus}>
      <div className="start_screen">
        <i className="logo_img" />
        <div className="all_info">
          <div className="start_screen_buttons">
            <button
              className="start_screen__button"
              s
              onClick={() => {
                closeStartScreen("start_screen hidden");
                e.changeHidden("");
              }}
            >
              Начать тест
            </button>
          </div>
          <div className="start_screen__container">
            <h1 className="hello_msg">привет!</h1>
            <p className="start_screen__text">
              Многие из нас в начале года составляется список желаний, которые
              он хочет реализовать за год. Но в ежедневной суете, мы забываем об
              этом и так много всего остается не исполненным…
            </p>
            <p className="start_screen__text">
              А что если взять и исполнить все в один вечер? Да-да, 25 декабря у
              тебя и твоих коллег будет шанс сделать все и даже больше,
              отрываясь по полной!
            </p>
            <p className="start_screen__text">
              Но для начала пройди тест, честно отвечай на вопросы и получай
              приглашение на самое отрывное, сумасшедшее событие этого года!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StartScreen;

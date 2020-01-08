/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */

import React, { useState } from "react";

import questions from "./mock/questions";
import StartScreen from "./mock/startScreen";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [answerValue, setAnswerValue] = useState(0);
  const [hidden, changeHidden] = useState("hidden");
  const nextQuestion = e => {
    const newCount = count + 1;
    const newAnswerValue = answerValue + +e.target.value;
    setCount(newCount);
    setAnswerValue(newAnswerValue);
  };
  const backgroundImagePath = require(`./img/${
    count + 1 < 31 ? count + 1 : 1
  }.jpg`);
  if (count < 30) {
    return (
      <div className="question_container">
        <StartScreen changeHidden={changeHidden} />
        <div className={`logo_arts ${hidden}`}>
          <i className="main_logo" />
          <div className="all_info">
            <i
              className="main_photo"
              style={{ backgroundImage: `url(${backgroundImagePath})` }}
            />
          </div>
        </div>
        <div className={`questions_answers ${hidden}`}>
          <div className="questions">{questions(count)}</div>
          <div className="answers_container">
            <div className="answer_item">
              <div className="control-group">
                <label className="control control-radio answer_button">
                  Да
                  <input
                    type="radio"
                    name="radio"
                    onClick={nextQuestion}
                    value="1"
                  />
                  <div className="control_indicator"></div>
                </label>
                <label className="control control-radio answer_button">
                  А что, так можно было?
                  <input
                    type="radio"
                    name="radio"
                    onClick={nextQuestion}
                    value="0"
                  />
                  <div className="control_indicator"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  let finalWords;
  let recommendations;
  if (answerValue <= 5) {
    recommendations =
      "Ты скучно живёшь! Никому не показывай свой результат! Спокойную и уравновешенную атмосферу твоего мира срочно нужно разбавить дозой адреналина! Приди на новогоднее мероприятие в наряде, который тебе выберут твои самые сумасшедшие друзья!     ";
    finalWords = "Тихоня";
  } else if (answerValue <= 10) {
    recommendations =
      "Могло быть и хуже, но тебе тоже не хватает треша и ярких впечатлений! Пришла пора ослабить над собой контроль, и сделать то, на что давно не мог решиться! Приди на нашу вечеринку в костюме символа 20120 года, так ты точно окажешься в центре внимания и запомнишь этот день надолго!    ";
    finalWords = "Адекватный";
  } else if (answerValue <= 15) {
    recommendations =
      "Ты не так прост, как кажется! Самое время выпустить всех своих внутренних демонов, покажи своим коллегам, какой ты есть на самом деле. Иногда полезно идти на риск и открывать в себе неизведанное. Приходи на мероприятие на без нижнего белья, никто, конечно не узнает, но ты точно запомнишь это надолго!";
    finalWords = "В тижом омуте черти водятся";
  } else if (answerValue <= 20) {
    recommendations =
      "Ты обожаешь развлекаться! Всегда готов к неожиданным действиям и безбашенным поступкам, но тебе есть куда расти. Не переживай, после нашей вечеринки ты сможешь дополнить свой список трешовыми поступками. А пока укради морковку у ближайшего снеговика, надевай на нос и приходи на наше мероприятие!    ";
    finalWords = "Весельчак";
  } else {
    recommendations =
      "Конечно, с уверенностью можно сказать, что ты успел сделать в своей жизни все! И ты самая настоящая сорвиголова. Наша вечеринка точно для таких как ты, со своими историями ты будешь в центре внимания. Но пора всех удивить, приходи на нашу вечеринку в смокинге и первый час ни произноси ни слова, такого от тебя точно никто не ждет!    ";
    finalWords = "Сорвиголова";
  }
  return (
    <div className="final_container">
      <div className="start_screen">
        <i className="logo_img" />
        <div className="all_info ">
          <div className="start_screen__container final_info">
            <p className="start_screen__text final">{finalWords}</p>
            <p className="start_screen__text final_second recommendations">
              {recommendations}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

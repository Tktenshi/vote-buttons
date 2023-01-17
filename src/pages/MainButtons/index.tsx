import React, { memo, MouseEventHandler, useState } from 'react';

import * as Styled from './styled';

interface IMainButtonsProps {
}

const MainButtons: React.FC<IMainButtonsProps> = (props) => {
  const [redScore, setRedScore] = useState(0)
  const [blackScore, setBlackScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const onButtonClick = () => {
    window.navigator?.vibrate(100);
  };

  const onRedButtonClick = () => {
    onButtonClick();
    setRedScore(prev => prev + 1);
  };

  const onBlackButtonClick = () => {
    onButtonClick();
    setBlackScore(prev => prev + 1);
  };

  const onShowResultClick = (e: any) => {
    e.stopPropagation();
    setShowResult(!showResult);
  };

  const onFinishButtonClick = () => {
    setShowResult(!showResult);

    if (showResult) {
      setRedScore(0);
      setBlackScore(0);
    }
  };

  return (
    <Styled.MainButtons>
      <Styled.Menu>
        <button onClick={onShowResultClick}>
          {showResult ? "Скрывать " : "Отображать "}
          результат
        </button>
      </Styled.Menu>

      <Styled.ScoreButtons>
        <Styled.RedButton onClick={onRedButtonClick}>
          {showResult ? redScore : ""}
        </Styled.RedButton>

        <Styled.BlackButton onClick={onBlackButtonClick}>
          {showResult ? blackScore : ""}
        </Styled.BlackButton>
      </Styled.ScoreButtons>

      <Styled.FinishButton onClick={onFinishButtonClick}>
        {showResult ? "Начать заново" : "Показать итоги"}
      </Styled.FinishButton>
    </Styled.MainButtons>
  );
};

export default memo(MainButtons);

import React, { memo, useState } from 'react';

import * as Styled from './styled';

interface IMainButtonsProps {
}

const MainButtons: React.FC<IMainButtonsProps> = (props) => {
  const [redScore, setRedScore] = useState(0)
  const [blackScore, setBlackScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const onButtonClick = () => {
    window.navigator.vibrate(100);
  };

  const onRedButtonClick = () => {
    onButtonClick();
    setRedScore(prev => prev + 1);
  };

  const onBlackButtonClick = () => {
    onButtonClick();
    setBlackScore(prev => prev + 1);
  };

  const onFinishButtonClick = () => {
    setShowResult(!showResult);
  };

  return (
    <Styled.MainButtons>
      <Styled.ScoreButtons>
        <Styled.RedButton onClick={onRedButtonClick}>
          {showResult ? redScore : ""}
        </Styled.RedButton>

        <Styled.BlackButton onClick={onBlackButtonClick}>
          {showResult ? blackScore : ""}
        </Styled.BlackButton>
      </Styled.ScoreButtons>

      <Styled.FinishButton onClick={onFinishButtonClick}>
        {showResult ? "Начать заново" : "Показать результат"}
      </Styled.FinishButton>
    </Styled.MainButtons>
  );
};

export default memo(MainButtons);

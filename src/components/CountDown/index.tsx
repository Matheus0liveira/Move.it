import { ChallengeContext } from 'contexts/ChallengesContext';
import { useContext, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import * as S from './styles';

let countDownTimeout: NodeJS.Timeout

export default function CountDown(){

  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(0.1    * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);


  const minutes = Math.floor(time/60);

  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime((prevState) => prevState - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      setHasFinished(true);
      startNewChallenge();
    }
  }, [isActive, time]);


  const handleCountDown = () => {
    
    if(isActive){
      clearTimeout(countDownTimeout);
      setTime(0.1 * 60);
    }
    setIsActive(!isActive);

  };

  

  return (
    <div>
      <S.Container>
        <S.Timer>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </S.Timer>
        <span>:</span>
        <S.Timer>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </S.Timer>
      </S.Container>

      <S.Button
        type="button"
        disabled={!!hasFinished}
        isActive={!!isActive}
        onClick={handleCountDown}
      >
        {hasFinished ? (
          <>
            Ciclo encerrado
            <ReactSVG src="icons/check.svg" />
          </>
        ) : isActive ? (
          <>
            Abandonar ciclo
            <ReactSVG src="icons/x.svg" className="x-icon"/>
          </>
        ) : (
          <>
            Iniciar um ciclo
            <ReactSVG src="icons/play.svg" />
          </>
        )}
      </S.Button>
    </div>
  );
}
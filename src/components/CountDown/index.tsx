import { CountDowContext } from 'contexts/CountDownContext';
import { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import * as S from './styles';


export default function CountDown(){

  const {
    minutes, 
    seconds, 
    isActive, 
    hasFinished,
    startCountdown,
    resetCountdown
    } = useContext(CountDowContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  

  

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
        onClick={!isActive ? startCountdown : resetCountdown}
      >
        {hasFinished ? (
          <>
            Ciclo encerrado
            <ReactSVG src="icons/check.svg" />
          </>
        ) : isActive ? (
          <>
            Abandonar ciclo
            <ReactSVG src="icons/x.svg" className="x-icon" />
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
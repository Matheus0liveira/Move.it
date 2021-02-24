import { useEffect, useState } from 'react';
import * as S from './styles';

export default function CountDown(){

  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time/60);

  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountDown = () => {
    setActive(true)
  };

  useEffect(() => {

    if(active && time > 0){
      setTimeout(() => {
        setTime(prevState => prevState - 1);
      }, 1000);
    }

  }, [active, time]);

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

      <S.Button type="button" onClick={startCountDown}>Iniciar um ciclo</S.Button>
    </div>
  );
}
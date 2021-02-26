import { createContext, useContext, useEffect, useState } from 'react';
import { ChallengeContext } from './ChallengesContext';

export type CountDowContextDataProps = {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
};
export type CountDownProviderProps = {
  children: React.ReactNode;
};

export const CountDowContext = createContext({} as CountDowContextDataProps);

let countDownTimeout: NodeJS.Timeout;

export default function CountDownProvider({children}: CountDownProviderProps) {

  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);

  const seconds = time % 60;


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

  const startCountdown = () => {
    setIsActive(true);
    
  };
  
  const resetCountdown = () => {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(25 * 60);
    

  }

  return (
    <CountDowContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountDowContext.Provider>
  );
}
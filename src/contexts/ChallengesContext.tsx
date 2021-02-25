import { createContext, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

export type ChallengeProps = {

  type: 'body' | 'eye';
  description: string;
  amount: number;

}

export type ChallengeContextDataProps = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: ChallengeProps;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completedChallenge: () => void;
};

export const ChallengeContext = createContext({} as ChallengeContextDataProps);

type ChallengeProviderProps = {
  children: React.ReactNode;
}


export default function ChallengeProvider({ children }: ChallengeProviderProps) {

  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);


  useEffect(() => {

    Notification.requestPermission();
  }, [])


  const levelUp = () => {
    setLevel(prevState => prevState + 1);
  };

  const startNewChallenge = () => {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengesIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted'){

      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`
      });
    }
  };  

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const completedChallenge = () => {
    if(!activeChallenge){
      return;
    }

    const  { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(prevState => prevState + 1);
  };


  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completedChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}
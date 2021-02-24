import { createContext, useState } from 'react';
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

  const levelUp = () => {
    console.log('Level Up');
  };

  const startNewChallenge = () => {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengesIndex];

    setActiveChallenge(challenge);
  };  

  const resetChallenge = () => {
    setActiveChallenge(null)
  }


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
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}
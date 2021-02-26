import { createContext, useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from 'components/LevelUpModal';

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
  closeLevelUpModal: () => void;
};

export const ChallengeContext = createContext({} as ChallengeContextDataProps);

type ChallengeProviderProps = {
  children: React.ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function ChallengeProvider({ 
  children, 
  ...rest 
}: ChallengeProviderProps) {
  console.log(rest)
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);


  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);


  useEffect(() => {

    Notification.requestPermission();
  }, [])


  useEffect(() => {
    Cookie.set('level', String(level));
    Cookie.set('currentExperience', String(currentExperience));
    Cookie.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  const levelUp = () => {
    setLevel(prevState => prevState + 1);
    setIsLevelUpModalOpen(true);
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

  const closeLevelUpModal = () => {
    setIsLevelUpModalOpen(false);
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
        completedChallenge,
        closeLevelUpModal,
      }}
    >
      {children}

      <LevelUpModal isLevelUpModalOpen={isLevelUpModalOpen} />
    </ChallengeContext.Provider>
  );
}
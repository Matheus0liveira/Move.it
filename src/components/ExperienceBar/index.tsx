import { ChallengeContext } from 'contexts/ChallengesContext';
import { useContext } from 'react';
import * as S from './styles';

export default function ExperienceBar(){

  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;


  return (
    <S.Header experienceLevel={percentToNextLevel}>
      <span>0 xp</span>
      <div>
        <div>
          <span>{currentExperience}xp</span>
        </div>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </S.Header>
  );
  
};
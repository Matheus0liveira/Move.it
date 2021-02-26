import ChallengeBox from 'components/ChallengeBox';
import { CompletedChallenges } from 'components/CompletedChallenges';
import CountDown from 'components/CountDown';
import ExperienceBar from 'components/ExperienceBar';
import Profile from 'components/Profile';
import ChallengeProvider from 'contexts/ChallengesContext';
import CountDownProvider from 'contexts/CountDownContext';
import { GetServerSideProps } from 'next';
import { Container } from 'styles/global';
import * as S from 'styles/pages/Home';

export type HomeProps = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
};

export default function Home({level, currentExperience, challengesCompleted}: HomeProps) {
  return (
    <ChallengeProvider 
    level={level} 
    currentExperience={currentExperience} 
    challengesCompleted={challengesCompleted}
    >
      <Container>
        <ExperienceBar />

        <CountDownProvider>
          <S.Section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </S.Section>
        </CountDownProvider>
      </Container>
    </ChallengeProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({req: { cookies }}) => {

  const {level, currentExperience, challengesCompleted } = cookies;

 return {
   props: {
     level: Number(level),
     currentExperience: Number(currentExperience),
     challengesCompleted: Number(challengesCompleted),
   },
 };
};
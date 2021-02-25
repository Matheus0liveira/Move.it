import ChallengeBox from 'components/ChallengeBox';
import { CompletedChallenges } from 'components/CompletedChallenges';
import CountDown from 'components/CountDown';
import ExperienceBar from 'components/ExperienceBar';
import Profile from 'components/Profile';
import CountDownProvider from 'contexts/CountDownContext';
import { Container } from 'styles/global';
import * as S from 'styles/pages/Home';

export default function Home() {
  return (
      <Container>
        <ExperienceBar />

        <CountDownProvider>

          <S.Section> 
            <div>

            <Profile/>
            <CompletedChallenges/>
            <CountDown/>
            
            </div>

            <div>
              <ChallengeBox/>
            </div>
            
          </S.Section>

        </CountDownProvider>

      </Container>
  );
};

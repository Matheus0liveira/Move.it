import { CompletedChallenges } from 'components/CompletedChallenges';
import CountDown from 'components/CountDown';
import ExperienceBar from 'components/ExperienceBar';
import Profile from 'components/Profile';
import { Container } from 'styles/global';
import * as S from 'styles/pages/Home';

export default function Home() {
  return (
      <Container>
        <ExperienceBar />

        <S.Section>
          <div>

          <Profile/>
          <CompletedChallenges/>
          <CountDown/>
          
          </div>
        </S.Section>

      </Container>
  );
};

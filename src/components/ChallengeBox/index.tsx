import { ChallengeContext } from 'contexts/ChallengesContext';
import { CountDowContext } from 'contexts/CountDownContext';
import { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import * as S from './styles';

export default function ChallengeBox(){

  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengeContext);
  const { startCountdown, resetCountdown } = useContext(CountDowContext);


  const handleChallengeSucceeded = () => {
    completedChallenge();
    resetCountdown();
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };

  return (
    <S.Container>
      {activeChallenge ? (
        <S.Active>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <ReactSVG src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <S.FailedButton type="button" onClick={handleChallengeFailed}>
              Falhei
            </S.FailedButton>

            <S.SucceededButton type="button" onClick={handleChallengeSucceeded}>Completei</S.SucceededButton>
          </footer>
        </S.Active>
      ) : (
        <S.NotActive>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <ReactSVG src="icons/level-up.svg " />
            Complete-os e ganhe experiência e avance de leve.
          </p>
        </S.NotActive>
      )}
    </S.Container>
  );

}
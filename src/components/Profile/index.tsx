import * as S from './styles';
import { ReactSVG } from 'react-svg';
import { useContext } from 'react';
import { ChallengeContext } from 'contexts/ChallengesContext';
export default function Profile(){

  const { level } = useContext(ChallengeContext);

  return (
    <S.Container>
      <img
        src="https://github.com/Matheus0liveira.png"
        alt="Foto de perfil de Matheus Oliveira Santos"
      />

      <S.Content>
        <strong>Matheus Oliveira</strong>
        <p>
          <ReactSVG src="icons/level.svg" />
          Level {level}
        </p>
      </S.Content>
    </S.Container>
  );
}
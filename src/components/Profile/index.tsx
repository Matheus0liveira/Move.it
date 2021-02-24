import * as S from './styles';
import { ReactSVG } from 'react-svg';
export default function Profile(){

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
          Level 1
        </p>
      </S.Content>
    </S.Container>
  );
}
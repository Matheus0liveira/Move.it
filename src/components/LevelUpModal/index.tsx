import { ChallengeContext } from 'contexts/ChallengesContext';
import { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import * as S from './styles';

type LevelUpModalProps = {
  isLevelUpModalOpen: boolean;
};

export function LevelUpModal({ isLevelUpModalOpen }: LevelUpModalProps) {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);

  return (
    <S.Overlay isHide={isLevelUpModalOpen}>
      <S.Container isHide={isLevelUpModalOpen}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <ReactSVG src="/icons/close.svg" />
        </button>
      </S.Container>
    </S.Overlay>
  );
};


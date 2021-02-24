import * as S from './styles';

export default function ExperienceBar(){

  return (

    <S.Header experienceLevel={50}>
      <span>0 xp</span>
      <div>
        <div>
          <span>
            300xp
          </span>
        </div>
      </div>
      <span>600 xp</span>

    </S.Header>
    

  );
  
};
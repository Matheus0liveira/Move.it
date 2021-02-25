import styled, { css } from 'styled-components';

type HeaderProps = {

  experienceLevel: number
}

export const Header = styled.header<HeaderProps>`
  ${({ theme, experienceLevel }) => css`
    display: flex;
    align-items: center;

    span {
      font-size: 1rem;
    }

    & > div {
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background-color: ${theme.colors.grayLine};

      margin: 0 1.5rem;
      position: relative;

      & > div {
        width: ${experienceLevel}%;
        height: 100%;
        border-radius: 4px;
        background-color: ${theme.colors.green};

        transition: all 1s ease-in;

        span{
          position: absolute;

          top: 12px;
          left: ${experienceLevel}%;

          transform: translateX(-50%);


          transition: all 1.1s ease-in;
          
        }
      }
    }
  `}
`;
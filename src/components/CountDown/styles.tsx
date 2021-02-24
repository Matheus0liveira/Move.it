import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    font-family: Rajdhani;
    font-weight: 600;

    color: ${theme.colors.title};

    & > span{
      font-size: 6.25rem;
      margin: 0 0.5rem;
    }

  `}
`;
export const Timer = styled.div`
  ${({ theme }) => css`
    
      
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      background: ${theme.colors.white};

      box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

      border-radius: 5px;
      
      font-size: 8.5rem;
      text-align: center;

      span{
        flex: 1;  
      }

      span:first-child{
        border-right: 1px solid #F0F1F3;
      }
      span:last-child{
        border-left: 1px solid #F0F1F3;
      }
    
  `}
`;

type ButtonProps = {
  isActive?: boolean;
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, isActive = false }) => css`
    width: 100%;
    height: 80px;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;

    border: 0;
    border-radius: 5px;

    background: ${isActive ? theme.colors.white : theme.colors.blue};
    color: ${isActive ? theme.colors.title : theme.colors.white};

    font-size: 1.25rem;
    font-weight: 600;

    transition: all 0.2s ease-in;

    &:not(:disabled):hover {
      background-color: ${isActive ? theme.colors.red : theme.colors.blueDark};
      color: ${isActive && theme.colors.white};
    }

    &:disabled {
      background: ${theme.colors.white};
      color: ${theme.colors.text};
      cursor: not-allowed;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
        
      div svg {
      }
    }
  `}
`;
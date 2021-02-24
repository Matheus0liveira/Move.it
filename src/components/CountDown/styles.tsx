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

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 80px;

    margin-top: 2rem; 

    display: flex;
    align-items: center;
    justify-content: center; 

    border: 0;
    border-radius: 5px;

    background: ${theme.colors.blue};
    color: ${theme.colors.white};

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color .2s ease-in;

    &:hover{
      background-color: ${theme.colors.blueDark}; 
    }
  `}
`;
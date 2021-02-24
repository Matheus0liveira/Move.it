import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;

    background: ${theme.colors.white};
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);


    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 1.5rem 2rem;

    text-align: center;    
  `};

`;
export const NotActive = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  strong{
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;

  }

  p{
    display: flex;
    align-items: center;
    flex-direction: column;

    line-height: 1.4;

    max-width: 70%;

    margin-top: 3rem;

  }
`;


export const Active = styled.div`
${({ theme }) => css`
    height: 100%;

    display: flex;
    flex-direction: column;

    header{
      color: ${theme.colors.blue};

      font-size: 1.25rem;
      font-weight: 600;
      
      padding: 0 2rem 1.5rem;

      border-bottom: 1px solid ${theme.colors.grayLine};

    }

    main{

      flex: 1;
      display:flex;
      align-items: center; 
      justify-content: center;
      flex-direction: column;

      strong{

        font-size: 2rem;
        font-weight: 600;

        color: ${theme.colors.title};

        margin: 1.5rem 0 1rem;
      }

      p{
        line-height: 1.5;
      }
    }

    footer{

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  `};
`;
export const Button = styled.button`
  ${({ theme }) => css`
    height: 3rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    color: ${theme.colors.white};

    font-size: 1rem;
    font-weight: 600;

    transition: filter .2s ease-in;

    &:hover{
      filter: brightness(0.9);
    }
  
  `};
`;
export const FailedButton = styled(Button)`
${({ theme }) => css`
    background: ${theme.colors.red};
`};
`;
export const SucceededButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.colors.green};
  `}
`;
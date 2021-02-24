import styled, { createGlobalStyle, css } from 'styled-components'


const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`


    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box; 
    }

    @media (max-width: 1080px){
      html{
        font-size: 93.75%;
      }
    }

    @media (max-width: 720px){
      html{
        font-size: 87.5%;
      }
    }
  
    body{
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
    }

    body, input, textarea, button { 
      font: 400 1rem 'Inter', sans-serif;
    }

    button{
      cursor: pointer;
    }

    a{
      text-decoration: none;
      color: inherit;
    }
  `}
  
`;

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;

  padding: 2.5rem 2rem;

  display:flex;
  flex-direction: column;
  
`;


export default GlobalStyles;

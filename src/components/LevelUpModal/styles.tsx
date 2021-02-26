import styled, { css } from 'styled-components';

type Props = {
  isHide: boolean;
}

export const Overlay = styled.div<Props>`
  ${({ isHide }) => css`
    background: rgba(242, 243, 245, 0.8);

    position: fixed;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: ${isHide ? 1 : 0};

    pointer-events: ${isHide ? 'all' : 'none'};

    transition: all 0.5 s ease-in;
  `}
`;

export const Container = styled.div<Props>`
  ${({ theme, isHide }) => css`
    position: relative;

    background: ${theme.colors.white};

    width: 100%;
    max-width: 400px;

    padding: 2rem 3rem;

    border-radius: 5px;

    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    text-align: center;

    opacity: ${isHide ? 1 : 0};

    pointer-events: ${isHide ? 'all' : 'none'};

    transform: ${isHide ? 'translateY(0rem)' : 'translateY(4rem)'};

    transition: all 0.4s ease-in;

    header {
      font-size: 8.75rem;
      font-weight: 600;

      color: ${theme.colors.blue};
      background: url('/icons/levelup.svg') no-repeat center;
      background-size: contain;
    }

    strong {
      font-size: 2.25rem;
      color: ${theme.colors.text};
      margin-top: 0.25rem;
    }

    p {
      font-size: 1.25rem;
      color: ${theme.colors.text};
      margin-top: 0.25rem;
    }

    button {
      position: absolute;

      top: 0.5rem;
      right: 0.5rem;

      background: transparent;

      border: 0;

      font-size: 0;
    }
  `}
`;
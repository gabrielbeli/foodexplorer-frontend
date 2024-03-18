import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled.div(Dialog.Content)`
  
    position: sticky;
    background-color: ${({ theme }) => theme.DARK[400]};
    height: 100vh;
    position: fixed;
    inset: 0;
     z-index: 3;

  > header {
    background-color: ${({ theme }) => theme.DARK[700]};
    padding: 6rem 2.8rem 2.8rem;
    height: 11.4rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    button {
      background-color: transparent;
    }

    > h2 {
      font-size: 2.1rem;
    }
  }

  > .menu-content {
    
    width: min(75%, 1122px);
    margin: 0 auto 0;
    background-color: ${({ theme }) => theme.DARK[400]};
    height: 100%;
    height: calc(100vh - 18.2rem);
    padding-top: 3.6rem;

    animation: tilt-in-tl 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  
    > div {
      margin-bottom: 3.6rem;
    }
    > ul {
      list-style: none;
      > li {
        border-bottom: 1px solid ${({ theme }) => theme.DARK[1000]};
        > a {
          width: fit-content;
          font-size: clamp(2rem, 1.7143rem + 0.8929vw, 2.4rem);
          font-weight: 300;
          padding: 1rem;
          &:not(:hover) {
            color: ${({ theme }) => theme.LIGHT[300]};
          }
        }
      }
    }
  }

  @keyframes tilt-in-tl {
    0% {
      transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px)
        skew(12deg, 15deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`
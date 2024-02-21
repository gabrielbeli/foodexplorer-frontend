import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.DARK[700]};
  color: ${({ theme }) => theme.LIGHT[100]};

  > div {
    width: min(90%, 1122px);
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    >div:first-of-type {
      display: flex;
      align-items: center;
      gap: clamp(0.8rem, 0.6rem + 0.625vw, 1rem);
      margin: 0 auto;
      
      h1 {
        font-weight: 700;
      }
      
      > span {
        color: ${({ theme }) => theme.TINTS.CAKE[200]};
        font-size: 1.2rem;
        font-weight: 400;
      }
    }

    @media (max-width: 640px) {
      padding: 5.6rem 0 2.4rem;

      > #search {
        margin: 0 auto;
      }
      > button {
        background-color: transparent;
      }
      > button:last-child {
        position: relative;

        > span {
          color: ${({ theme }) => theme.LIGHT[100]};
          background-color: ${({ theme }) => theme.TINTS.TOMATO[200]};
          font-family: 'Poppins', sans-serif;
          font-size: 1.4rem;
          font-weight: 500;
          line-height: 0;

          width: 2rem;
          height: 2rem;
          border-radius: 50%;

          position: absolute;
          top: -1rem;
          right: -1rem;

          display: grid;
          place-content: center;
        }
      }
    
      > #search,
      > svg,
      button:nth-child(4) {
        display: none;
      }
    }

    @media (min-width: 641px) {
      gap: clamp(1.5rem, -5.3rem + 10.625vw, 3.2rem);
      padding-block: 2.4rem;

      > button:first-child,
      > button:last-child {
        display: none;
      }

      > div > h1 {
        font-size: clamp(1.6rem, -0.4571rem + 2.871vw, 2.4rem);
      }

      > #search {
        background-color: ${({ theme }) => theme.DARK[900]};

        border-radius: 5px;

        display: flex;
        align-items: center;
        flex: 2;
        padding-left: 1.2rem;

        > div {
          width: 100%;

          > label {
            display: none;
          }

          > input:focus {
            outline: none;
          }
        }
      }

      > button {
        max-width: 216px;
        flex: 1;

        > img {
          width: 2rem;
        }
      }

      > svg {
        width: clamp(2.5rem, -0.3rem + 4.375vw, 3.2rem);
        height: clamp(2.5rem, -0.3rem + 4.375vw, 3.2rem);
        cursor: pointer;
      }

      @media (max-width: 711px) {
        > div > h1 {
          display: none;
        }
      }
    }
  }
`;
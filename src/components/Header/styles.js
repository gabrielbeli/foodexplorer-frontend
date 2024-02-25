import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  background-color: ${({ theme }) => theme.DARK[700]};
  color: ${({ theme }) => theme.LIGHT[100]};

  .hide {
    display: none !important;
  }

  #search {
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

  > header {
    width: min(90%, 1122px);
    margin: 0 auto;

    display: flex;
    align-items: center;

    > h2 {
      margin-left: 1.6rem;
      font-size: 2.1rem;
    }

    > #logo {
      display: flex;
      align-items: center;
      gap: clamp(0.8rem, 0.6rem + 0.625vw, 1rem);
      margin: 0 auto;
      
      > h1 {
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
      > button#receipt {
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
      > #logout,
      > #redBtn {
        display: none;
      }
    }

    @media (min-width: 641px) {
      gap: clamp(1.5rem, -5.3rem + 10.625vw, 3.2rem);
      padding-block: 2.4rem;

      > #menuBurguer,
      > button#receipt {
        display: none !important;
      }

      > #logo > h1 {
        font-size: clamp(1.6rem, -0.4571rem + 2.8571vw, 2.4rem);
      }

      > button#redBtn {
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
        > #logo > h1 {
          display: none;
        }
      }
    }
  }
`;
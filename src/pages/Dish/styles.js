import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-areas: 
    'header'
    'main'
    'footer';

  grid-template-rows: 11.4rem auto 7.7rem;

  > main {
    grid-area: main;
    width: min(75%, 1122px);
    margin: 0 auto;
  }

  @media (min-width: 641px) {
    grid-template-rows: 9.3rem auto 7.7rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  > div:first-child {
    > a {
      font-size: clamp(1.4rem, 0.7333rem + 2.0833vw, 2.4rem);
      > img {
        width: clamp(0.9rem, 0.7rem + 0.625vw, 1.2rem);
      }
    }
    
    > picture > img {
      margin: 0 auto;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    
    > h2,
    > p {
      font-family: 'Poppins', sans-serif;
      text-align: center;
    }
    
    > h2 {
      font-weight: 500;
      font-size: clamp(2.7rem, 1.4rem + 4.0625vw, 4rem);
    }

    > p {
      font-size: clamp(1.6rem, 1.0667rem + 1.6667vw, 2.4rem);
      line-height: clamp(2.2rem, 1.1rem + 3.4375vw, 3.3rem);
    }
  }

    @media (max-width:640px) {
      > div:first-child > picture > img {
        margin: 1.6rem auto;
      }
    }

    @media (min-width: 641px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;

      > div:last-child {
        width: fit-content;
        align-items: flex-start;
        background-color: yellow;
        max-width: 666px;

        > h2 {
          font-size: clamp(2.4rem, -0.4568rem + 4.568, 4rem);
        }

        > p {
          background-color: red;
          text-align: start;
          font-size: 1.4rem;
        }
      }
    }
  `;
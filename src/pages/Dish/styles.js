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
  padding-top: 3.6rem;

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
      line-height: 2.2rem;
      max-width: 29ch;
      margin: 0 auto;
    }

    > ul {
      columns: 3;
      text-align: center;
      gap: 1rem;

      > li {
        margin-bottom: 1rem;
      }

      @media (max-width: 400px) {
        columns: 2;
      }
    }
  }

    @media (max-width:640px) {
      > div:first-child > picture > img {
        margin: 1.6rem auto;
      }
    }

    @media (min-width: 641px) {
      padding-top: 2.4rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: clamp(2rem, -1.571rem + 5.571vw, 4rem);

      > div:first-child {
        > a {
          margin-bottom: 4rem;
        }
      }

      > div:last-child {
        width: fit-content;
        align-items: flex-start;
        max-width: 666px;

        > h2 {
          font-size: clamp(2.4rem, -0.4568rem + 4.568, 4rem);
        }

        > p {
          text-align: start;
          font-size: clamp(1.4rem, -0.3855rem + 2.7855vw, 2.4rem);
          line-height: clamp(2.2rem, 0.2359 + 3.0641vw, 3.3rem);
          max-width: none;
        }

        > ul {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;

          > li {
            margin-bottom: 0;
          }
        }
      }
    }
  `;
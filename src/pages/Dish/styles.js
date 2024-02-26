import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  > header {
    position: sticky;
    z-index: 2;
    top: 0;
  }
  
  display: grid;
  grid-template-areas: 
    'header'
    'back'
    'main'
    'footer';

  grid-template-rows: 11.4rem 7rem auto 7.7rem;

  > a,
  > main {
    width: min(75%, 1122px);
    margin: 0 auto;
  }

  > a {
    grid-area: back;
    font-size: clamp(1.4rem, 0.7333rem + 2.0833vw, 2.4rem);
  }

  > main {
    grid-area: main;
  }

  @media (min-width: 641px) {
    grid-template-rows: 9.3rem 9rem auto 7.7rem;
    > a {
      align-self: start;
      padding-top: 2.4rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2.4rem;

  
    
  > img {
    margin: 0 auto;
    width: 26.4rem;
    border-radius: 50%;
  }
  
  > div {
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
      margin-top: 1.6rem;
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
  

    > div {
      display: grid;
      justify-items: center;
      grid-template-columns: ${({ isAdmin }) => (isAdmin ? '1fr' : '1fr 2fr')};
      gap: clamp(1rem, -8.2723rem + 14.4654vw, 3.3rem);

      margin-top: 2rem;

      > a {
        width: 100%;
      }
      > a > button {
        font-size: clamp(1rem, 0.6632rem + 1.0526vw, 1.4rem);
      }
    }
  }  

    @media (min-width: 641px) {
      flex-direction: row;
      gap: clamp(2rem, -1.571rem + 5.571vw, 4rem);

      > img {
        width: clamp(26.4rem, 20.4518rem + 9.2796vw, 39.011rem);
        height: clamp(26.4rem, 20.5041rem + 9.1979vw, 38.9rem);
      }

      > div {
        width: fit-content;
        align-items: flex-start;
        align-self: center;
        max-width: 666px;

        > h2 {
          font-size: clamp(2.4rem, -0.4568rem + 4.568, 4rem);
          margin: 0;
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

        > div > a > button {
          padding-inline: ${({ isAdmin }) => (isAdmin ? '2.4rem' : '0')};
        }
      }
    }
  `;
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
    'main'
    'footer';
  
  grid-template-rows: 11.4rem auto 7.7rem;

  > main {
    grid-area: main;
    width: min(89%, 1122px);
    margin: 0 auto;
    padding: 4.4rem 0 2.5rem;

    > div:first-child {
      background: ${({ theme }) => theme.GRADIENTS[200]};

      height: 12rem;
      border-radius: 3px;
      
      display: flex;
      justify-content: space-between;
      position: relative;

      > picture > img {
        position: absolute;
        top: -3rem;
        left: -3rem;
        bottom: 0;
      }

      padding-right: clamp(0rem, -5.5556rem + 13.8889vw, 10rem);
      > div {
        font-family: 'Poppins', sans-serif;
        width: 21.5rem;
        padding-top: 3.6rem;

        > h2 {
          font-size: 1.8rem;
          font-weight: 600;
          line-height: 2.5rem;
          margin-bottom: 3px;
        }

        > p {
          font-size: 1.2rem;
          line-height: 1.7rem;
        }
      }
    }
  }

  @media (max-width: 399px) {
    > main > div:first-child {
      justify-content: center;
      align-items: center;

      > picture > img {
        display: none;
      }
      > div {
        padding-top: 0;
      }
    }
  }

  @media (min-width: 641px) {
    grid-template-rows: 9.3rem auto 7.7rem;
    
    > main {
      padding-top: 16rem;
      > div:first-child {
        height: 26rem;

        > picture {
          background-color: red;
          > img {
            position: relative;
            bottom: 0;
          }
        }
      }
    }
  }
`;
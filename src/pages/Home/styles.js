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
    width: min(75%, 1122px);
    margin: 0 auto;
    padding-bottom: 3.2rem;
  }

  @media (min-width: 641px) {
    grid-template-rows: 9.3rem auto 7.7rem;
  }
`;
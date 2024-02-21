import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-areas: 
    'header'
    'main'
    'footer';

  grid-template-rows: 9.6rem auto 7.7rem;

  > main {
    grid-area: main;
  }
`;
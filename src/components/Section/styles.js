import styled from "styled-components";

export const Container = styled.section`
  width: min(89vw, 1122px);
  margin: 0 auto;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.5rem;
    margin-bottom: 2.4rem;
  }

  .carousel {
    gap: 2.7rem;
    overflow: auto;
    display: flex;

    > div {
      flex-shrink: 0;
    }
  }
`;
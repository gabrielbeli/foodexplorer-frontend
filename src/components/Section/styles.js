import styled from "styled-components";

export const Container = styled.section`
  /* width: min(100vw, 1122px); */
  max-width: 94.5vw;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.5rem;
    margin-bottom: 2.4rem;
  }

  .carousel {
    cursor: grab;
    overflow: hidden;
  }

  .inner {
    display: flex;
    gap: 1.6rem;
  }

  /* .item {
    min-height: 200px;
    min-width: 400px;
    padding: 14px;
  }

  .item:last-child {
    margin-right: 6rem;
  }

  .item img {
    width: 100%;
    height: 90%;
    border-radius: 12px;
    pointer-events: none;
  } */
`;
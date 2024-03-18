import styled from "styled-components"

export const Container = styled.main`
  padding: 3.2rem 0;

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(2.4rem, 1.8286rem + 1.7857vw, 3.2rem);
    line-height: 4.5rem;

    margin-bottom: 3.2rem;
  }
  > ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
    gap: 3.2rem;
  }

  @media (min-width: 992px) {
    > ul {
      gap: 4.8rem;
    }
  }
`
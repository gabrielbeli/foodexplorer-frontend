import styled from "styled-components"

export const Container = styled.div`
  > .wrapper {
    padding: 3rem 0;
    > a {
      font-size: clamp(1.4rem, 0.7333rem + 2.0833vw, 2.4rem);
    }
  }
`

export const Content = styled.div`
  padding-bottom: 3.2rem;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(2.4rem, 1.8286rem + 1.7857vw, 3.2rem);
    line-height: 4.5rem;

    margin-bottom: 3.2rem;
  }

  > #payment {
    > div {
      margin: 0 auto;
    }
  }
`
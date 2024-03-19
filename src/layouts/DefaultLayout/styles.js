import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 7.7rem;

  > div {
    width: min-content(90%, 1122px);
    margin: 0 auto;
  }

  > Footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
`
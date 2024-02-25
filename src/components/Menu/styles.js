import styled from 'styled-components';

export const Container = styled.div`
  &.menu {
    position: sticky;
    background-color: ${({ theme }) => theme.DARK[400]};
    height: 100vh;
    display: none;
  }
  &.menu.show {
    display: block;
  }
  > .menu-content {
    -webkit-animation: tilt-in-tl 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: tilt-in-tl 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    width: min(75%, 1122px);
    margin: 0 auto 0;
    background-color: ${({ theme }) => theme.DARK[400]};
    height: 100%;
    height: calc(100vh - 18.2rem);
    padding-top: 3.6rem;
    > div {
      margin-bottom: 3.6rem;
    }
    > ul {
      list-style: none;
      > li {
        border-bottom: 1px solid ${({ theme }) => theme.DARK[1000]};
        > a {
          width: fit-content;
          font-size: 2.4rem;
          font-weight: 300;
          padding: 1rem;
          &:not(:hover) {
            color: ${({ theme }) => theme.LIGHT[300]};
          }
        }
      }
    }
  }
  @-webkit-keyframes tilt-in-tl {
    0% {
      -webkit-transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px)
        skew(12deg, 15deg);
      transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px)
        skew(12deg, 15deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
        skew(0deg, 0deg);
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }
  @keyframes tilt-in-tl {
    0% {
      -webkit-transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px)
        skew(12deg, 15deg);
      transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px)
        skew(12deg, 15deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
        skew(0deg, 0deg);
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }
`;
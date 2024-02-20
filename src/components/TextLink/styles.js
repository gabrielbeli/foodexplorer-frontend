import styled from "styled-components";

export const Container = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.TINTS.CAKE[200]};
  }
`;
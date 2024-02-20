import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.TINTS.TOMATO[100]};

  display: flex;
  border-radius: 5px;
  padding: 1.2rem;

  cursor: pointer;

  > button {
    background-color: transparent;
    color: ${({ theme }) => theme.LIGHT[100]};
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;

    width: 100%;
  }
`;
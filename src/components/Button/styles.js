import styled from "styled-components";

export const Container = styled.button`
  
  background-color: ${({ theme }) => theme.TINTS.TOMATO[100]};
  color: ${({ theme }) => theme.LIGHT[100]};
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;

  display: flex;
  border-radius: 5px;
  padding: 1.2rem;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  cursor: pointer;
`;
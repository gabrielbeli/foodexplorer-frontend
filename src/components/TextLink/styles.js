import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  color: ${({ theme }) => theme.LIGHT[100]};
  
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;

  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 0.1667rem + 1.0417vw, 1rem);

  &:hover {
    color: ${({ theme }) => theme.TINTS.CAKE[200]};
  }
`;
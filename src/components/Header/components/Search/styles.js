import styled from 'styled-components'

export const SearchContainer = styled.div`
  background-color: ${({ theme }) => theme.DARK[900]};
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex: 2;
  padding-left: 1.2rem;
  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
  > svg {
    min-width: 1.54rem;
  }
  > div {
    width: 100%;
    > label {
      display: none;
    }
    > input:focus {
      outline: none;
    }
  }
`
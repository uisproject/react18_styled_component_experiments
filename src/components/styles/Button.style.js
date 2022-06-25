import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  /* background-color: ${({ backgroundColor }) => backgroundColor}; */
  background-color: ${({ theme }) => theme.color.button}; // using global style

  &:hover {
    background-color: blue;
    color: #fff;
  }
`;

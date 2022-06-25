import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: red;

  /* basically like css does and sass */
  h1 {
    color: green;
  }

  &:hover {
    background-color: blue;
  }

  @media (max-width: 400px) {
    background-color: purple;
  }
`;

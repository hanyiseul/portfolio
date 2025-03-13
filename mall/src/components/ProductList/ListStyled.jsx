import styled from "styled-components";

const commonStyles = `
  &[]
`;

export const StyledButton = styled.button`
  border: 10px solid blue;
  ${commonStyles}

`;

export const StyledLink = styled.a`
  ${commonStyles}
  text-decoration: none;
  color: inherit;
`;

export const ButtonGroupStyled = styled.div`
  ${commonStyles}
  display: flex;
  align-items: center;
`;

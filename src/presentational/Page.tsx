import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  height: 100vh;
`;

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Page({ children, className }: Props) {
  return (
    <StyledContainer
      fluid
      className={`justify-content-center align-items-center ${className}`}
    >
      {children}
    </StyledContainer>
  );
}

export default Page;

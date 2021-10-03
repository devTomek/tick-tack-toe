import React, { ReactNode } from "react";
import styled from "styled-components";
import { animatedGradient } from "./styleUtils";

const P = styled("p")`
  ${animatedGradient}
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  min-height: 10px;
`;

interface Props {
  children: ReactNode;
  className?: string;
}

function Text({ children, className }: Props) {
  return <P className={className}>{children}</P>;
}

export default Text;

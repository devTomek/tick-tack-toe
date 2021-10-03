import { css } from "styled-components";

export const animatedGradient = css`
  background: -webkit-linear-gradient(
    rgba(255, 0, 251, 1) 0%,
    rgba(162, 41, 225, 1) 51%,
    rgba(71, 197, 255, 1) 100%
  );
  background-size: 400% 400%;
  animation: gradient 3s ease-in-out infinite;

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;
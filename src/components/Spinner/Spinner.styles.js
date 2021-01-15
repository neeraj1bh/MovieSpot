import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: 70vh;
  align-items: center;
  justify-content: center;
`;

export const SpinnerStyle = styled.div`
  border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--medGrey);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

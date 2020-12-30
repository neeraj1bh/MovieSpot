import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.5s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumbs 0.5s;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumbs {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

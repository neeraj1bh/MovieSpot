import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  width: 20%;
  min-width: 200px;
  height: 70px;
  color: var(--white);
  border: 0;
  font-size: var(--fontBig);
  margin: 30px auto;
  transition: all 0.5s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;

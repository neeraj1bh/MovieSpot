import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  width: 20%;
  min-width: 200px;
  margin: 3.7rem auto;
  /* padding: 1rem 2rem; */
  /* font-size: var(--fontMed); */
  font-size: var(--fontSmall);
  padding: 0.5rem 2rem;
  background: black;
  color: var(--white);
  border-color: black;
  letter-spacing: 3px;
  cursor: pointer;
  font-weight: 900;
  text-transform: uppercase;
  outline: none;
  transition: all 0.7s ease;
  border-radius: 5px;

  /* font-family: "Source Code Pro", monospace; */
  /* margin: 4rem 0rem 2rem 0rem; */

  :hover {
    background: white;
    color: black;
    /* padding: 0.5rem 3rem; */
    /* background: #90ff54; */
  }
`;

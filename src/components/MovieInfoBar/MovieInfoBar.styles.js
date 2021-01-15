import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 50px;
  background: var(--darkGrey);
  padding: 0 20px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;
  font-weight: 600;
  font-size: var(--fontSmall);
  text-transform: uppercase;

  p {
    padding: 0.5rem;

    /* font-family: "Source Code Pro", monospace; */
    /* margin: 4rem 0rem 2rem 0rem; */
    transition: all 0.5s ease;

    :hover {
      background: white;
      color: black;
      border-radius: 5px;
    }
  }

  @media screen and (max-width: 1024px) {
    justify-content: space-around;
    align-items: center;
  }
`;

export const Similar = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  background: var(--darkGrey);
  padding: 0 20px;

  .similar {
    padding: 0.5rem 2rem;
    font-weight: 600;
    font-size: var(--fontSmall);
    text-transform: uppercase;
    background-color: white;
    color: black;
    border-radius: 5px;
    transition: all 0.5s ease;

    :hover {
      padding: 0.5rem 3rem;
      background: #90ff54;
      color: black;
      border-radius: 5px;
    }
  }
`;

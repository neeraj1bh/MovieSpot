import styled from "styled-components";

export const Image = styled.img`
  /* position: relative; */
  width: 100%;
  max-width: 720px;
  transition: all 0.5s;
  object-fit: cover;
  border-radius: 10px;
  animation: animateThumbs 0.5s;
  cursor: pointer;

  :hover {
    opacity: 0.7;
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

export const Controls = styled.div`
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  /* margin: 1.5rem; */
  /* border-radius: 10px; */

  .Buttons {
    /* background: var(--medGrey); */
    /* color: var(--white); */
    /* padding: 10px 10px;
    border-radius: 10px; */
    /* display: block; */
    /* width: 20%; */
    /* min-width: 200px; */
    /* margin: 3.7rem auto; */
    /* padding: 1rem 2rem; */
    /* font-size: var(--fontMed); */
    width: 100%;
    /* max-width: 720px; */

    font-size: 0.7rem;

    padding: 0.5rem 1rem;

    background: var(--black);
    color: var(--white);
    border-color: var(--black);
    letter-spacing: 3px;
    cursor: pointer;
    font-weight: 900;
    text-transform: uppercase;
    outline: none;
    transition: all 0.7s ease;
    /* border-radius: 5px; */

    /* font-family: "Source Code Pro", monospace; */
    /* margin: 4rem 0rem 2rem 0rem; */

    :disabled {
      color: var(--green);
      pointer-events: none;
      opacity: 0.9;
    }

    :hover {
      background: var(--black);
      color: var(--white);
      /* padding: 0.5rem 3rem; */
      /* background: #90ff54; */
    }
  }
  @media screen and (max-width: 770px) {
    height: 70px;
    flex-direction: column;
    .Buttons {
      margin: 0.1rem 0rem;
      font-size: 0.5rem;
    }
  }
`;

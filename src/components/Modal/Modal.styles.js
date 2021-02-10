import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: block;
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`;
export const Content = styled.div`
  margin: 7% auto;
  background: #b3ffab; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    45deg,
    #b3ffab,
    #12fff7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    45deg,
    #b3ffab,
    #12fff7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 1rem;
  width: 70vw;
  padding: 4rem;
  position: relative;
  z-index: 999;

  @media screen and (max-width: 768px) {
    margin: 25% auto;
    padding: 2rem;
  }

  .formWrapper {
    margin: 5% auto;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    background: var(--medGrey);
    align-items: center;
    justify-content: center;
  }
  .formInput {
    font-size: var(--fontSmall);
    padding: 15px;
    border: 1px solid var(--white);
    width: 80%;
    margin: 10px;
    text-align: center;
    background: var(--darkGrey);
    /* height: 40px; */
    border-radius: 10px;
    color: var(--white);
    outline: none;
    /* margin: 0; */
    @media screen and (max-width: 768px) {
      font-size: var(--fontVSmall);
    }

    @media screen and (max-width: 400px) {
      font-size: 0.7rem;
    }
  }

  .submitBtn {
    font-size: var(--fontSmall);
    font-weight: 600;
    padding: 0.7rem 2rem;
    background: var(--white);
    color: var(--black);
    border-color: var(--white);
    letter-spacing: 3px;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    transition: all 0.7s ease;
    border-radius: 5px;
    border: none;

    :hover {
      background: var(--black);
      color: var(--white);
      border-color: var(--white);
    }

    @media screen and (max-width: 768px) {
      font-size: var(--fontVSmall);
      padding: 0.5rem 1rem;
    }
  }
  .cancelBtn {
    padding: 5px 15px;
    font-size: var(--fontMed);
    font-weight: 900;

    cursor: pointer;
    color: var(--black);

    border-radius: 5rem;
    border: none;

    transition: all 0.5s ease;

    :hover {
      background: var(--black);
      color: var(--white);
      border-color: var(--white);
    }
  }
`;

export const WatchWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  button {
    background: grey;
    border-radius: 10px;
    cursor: pointer;
    padding: 15px 25px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 5px;
    color: var(--white);
    border: none;
    white-space: normal;
    word-wrap: wrap;
    display: inline-block;

    :disabled {
      color: var(--green);
      pointer-events: none;
      opacity: 0.9;
    }
  }
`;

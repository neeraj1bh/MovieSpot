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
  margin: 5% auto;
  background-color: white;
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
    font-size: var(--fontMed);
    padding: 15px;
    border: 1px solid var(--white);
    width: 90%;
    margin: 10px;
    text-align: center;
    background: transparent;
    /* height: 40px; */
    border-radius: 10px;
    color: var(--white);
    outline: none;
    /* margin: 0; */
    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }

    @media screen and (max-width: 400px) {
      font-size: 0.7rem;
    }
  }

  .submitBtn {
    padding: 15px 20px;
    font-size: var(--fontMed);
    font-weight: 900;
    text-align: center;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
      padding: 10px 15px;
    }
  }
  .cancelBtn {
    padding: 5px 15px;
    font-size: var(--fontMed);
    font-weight: 900;
    text-align: center;
    cursor: pointer;

    border: 2px solid var(--darkGrey);
    border-radius: 10px;
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

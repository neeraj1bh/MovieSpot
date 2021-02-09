import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background: var(--white);
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 20px 0px;
    height: 200px;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: 60%;
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 5px;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 7px;
    width: 40px;

    @media screen and (max-width: 400px) {
      left: 15px;
      top: 15px;
      width: 25px;
    }
  }

  input {
    font-size: var(--fontMed);
    margin: 8px 0;
    left: 0;
    position: absolute;
    padding: 0 0 0 60px;
    border: 0;
    width: 100%;
    text-align: center;
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }

    @media screen and (max-width: 300px) {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
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
  }
`;

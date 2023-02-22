import styled from "styled-components";

export const PersonlStyle = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 20px;
  height: 100%;
  position: relative;

  h2 {
    font-size: 1.8rem;
  }

  span {
    font-size: 0.8rem;
    opacity: 0.7;
    display: block;
    margin: 7px 0 30px;
  }

  label {
    display: table;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 3px;
  }

  input {
    width: 100%;
    padding: 10px 10px;
    margin-bottom: 25px;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
  }

  button {
    position: absolute;
    right: 20px;
    bottom: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 0.8rem;
    background-color: gray;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #022757;
    color: whitesmoke;
  }

  @media (max-width: 700px) {
    position: none;
    button {
      position: absolute;
      right: 0;
      bottom: -25%;
      border-radius: 5px;
      font-size: 0.8rem;
      background-color: gray;
      color: white;
      border: none;
      cursor: pointer;
    }
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 22px;
    }

    span {
      font-size: 12px;
    }

    label {
      font-size: 14px;
    }

    input {
      margin-bottom: 25px;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

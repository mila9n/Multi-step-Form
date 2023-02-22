import styled from "styled-components";

export const AddonsStyle = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 5px;
  height: 100%;
  position: relative;

  & > h2 {
    font-size: 1.8rem;
  }

  & > span {
    font-size: 0.8rem;
    opacity: 0.7;
    display: block;
    margin: 7px 0 30px;
  }

  .addonsBottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100%;
    bottom: 15px;
  }

  button {
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 500;
    background-color: gray;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #022757;
    color: whitesmoke;
  }

  a {
    text-decoration: none;
  }

  .addonsContainer {
    & > div {
      border: 1px solid black;
      border-radius: 8px;
      padding: 15px 20px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      cursor: pointer;

      & > input {
        width: 5%;
        height: 15px;
        cursor: pointer;
      }

      & > span {
        color: blue;
      }

      & > div {
        width: 70%;

        & > h3 {
          font-size: 1.1rem;
        }

        & > p {
          font-size: 1rem;
          opacity: 0.7;
        }
      }
    }
  }

  .selected {
    background-color: rgba(0, 76, 130, 0.05);
  }

  @media (max-width: 700px) {
    div.addonsBottom {
      bottom: -25%;
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    & > h2 {
      font-size: 22px;
    }
    & > span {
      font-size: 12px;
    }
    .addonsContainer {
      & > div {
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px 10px;
        margin-bottom: 10px;

        & > input {
          width: 5%;
          height: 15px;
        }
        & > span {
          color: blue;
          font-size: 12px;
        }

        & > div {
          width: 70%;

          & > h3 {
            font-size: 14px;
          }

          & > p {
            font-size: 12px;
            opacity: 0.7;
          }
        }
      }
    }
    .addonsBottom {
      button {
        font-size: 14px;
      }
      a {
        font-size: 14px;
      }
    }
  }
`;

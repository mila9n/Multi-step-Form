import styled from "styled-components";

export const PlanStyle = styled.div`
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

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;

    & > div {
      border: 1px solid rgba(0, 0, 0, 0.21);
      width: 30.2%;
      padding: 15px 10px;
      border-radius: 4px;
      cursor: pointer;
      position: relative;

      &:hover {
        border: 1px solid black;
      }

      img {
        margin-bottom: 35px;
      }

      h4 {
        font-size: 0.94rem;
        margin-bottom: 2px;
        display: table;
      }

      h5 {
        font-size: 0.8rem;
        opacity: 0.9;
        font-weight: 400;
        display: table;
      }

      & > div {
        position: absolute;
        inset: 0;
        width: 100%;
        border: none;
      }

      & > div:hover {
        border: none;
      }
    }
    .selected {
      background-color: rgba(0, 76, 130, 0.05);
    }
  }

  .planBottom {
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

  @media (max-width: 700px) {
    div.planBottom {
      bottom: -20%;
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 22px;
    }
    & > span {
      font-size: 12px;
    }
    & > div:nth-of-type(1) {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      row-gap: 14px;

      & > div {
        width: 48%;
        padding: 15px 10px;
        border-radius: 4px;
        cursor: pointer;
        position: relative;

        img {
          margin: 0 auto 30px;
        }

        h4 {
          font-size: 0.94rem;
          margin: 0 auto 2px;
        }

        h5 {
          font-size: 12px;
          margin: 0 auto;
        }
      }
    }
    .planBottom {
      button {
        font-size: 14px;
      }
      a {
        font-size: 14px;
      }
    }
  }
`;

export const ToggleStyle = styled.div`
  margin: 20px 0;
  background-color: #f8f9fe;
  padding: 10px;

  & > div:nth-of-type(1) {
    width: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & span {
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.4;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .cylinder {
    width: 30px;
    position: relative;
    height: 15px;
    margin: 0 20px;
    border-radius: 40px;
    background-color: black;
  }

  .ball {
    position: absolute;
    width: 11px;
    height: 11px;
    border-radius: 100px;
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    background-color: white;
    transition: left 200ms ease-in;
  }

  .yearly {
    left: 16px;
  }

  .bold {
    opacity: 1;
    font-weight: bolder;
  }
`;

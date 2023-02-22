import styled from "styled-components";

export const TotalStyle = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 5px;
  height: 100%;
  position: relative;

  h2 {
    font-size: 1.8rem;
  }

  & > span {
    font-size: 0.9rem;
    opacity: 0.7;
    display: block;
    margin: 7px 0 30px;
  }

  .totalBottom {
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
    background-color: #6259ff;
    color: whitesmoke;
  }

  a {
    text-decoration: none;
  }

  .plan-type {
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
    margin-top: 50px;

    & > div:nth-of-type(2) {
      font-size: 1.2rem;
      font-weight: 800;
    }

    & > div:nth-of-type(1) {
      font-size: 1.2rem;
      font-weight: 600;

      span {
        font-size: 1.07rem;
        margin: 3px 0 2px;
        cursor: pointer;
        color: blue;
        font-weight: 500;
        opacity: 0.8;
        display: table;
      }

      span:hover {
        text-decoration: underline;
      }
    }
  }

  .total-price {
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;

    & > h3 {
      font-size: 1rem;
      opacity: 0.5;
    }

    & > span {
      font-size: 1.4rem;
      color: blue;
      font-weight: 700;
    }
  }

  .addons {
    border: 1px solid gray;
    padding: 18px 15px;
  }

  .addons > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 0;

    & > h3 {
      font-size: 1rem;
      opacity: 0.5;
    }

    & > span {
      font-size: 0.9rem;
      opacity: 0.8;
      font-weight: 600;
    }
  }

  @media (max-width: 700px) {
    div.totalBottom {
      bottom: -25%;
      width: 100%;
    }
    .plan-type {
      margin-top: 30px;
    }
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 22px;
    }

    & > span {
      font-size: 12px;
      margin: 7px 0 10px;
    }
    .plan-type {
      padding: 15px 10px;
      margin-top: 20px;

      & > div:nth-of-type(2) {
        font-size: 14px;
        font-weight: 700;
      }

      & > div:nth-of-type(1) {
        font-size: 14px;
        font-weight: 600;

        span {
          font-size: 12px;
        }
      }
    }

    .total-price {
      padding: 15px 10px;

      & > h3 {
        font-size: 14px;
      }

      & > span {
        font-size: 16px;
      }
    }

    .addons {
      padding: 15px 10px;
    }

    .addons > div {
      & > h3 {
        font-size: 14px;
        opacity: 0.5;
      }

      & > span {
        font-size: 14px;
        font-weight: 600;
      }
    }
    .totalBottom {
      button {
        font-size: 14px;
      }
      a {
        font-size: 14px;
      }
    }
  }
`;

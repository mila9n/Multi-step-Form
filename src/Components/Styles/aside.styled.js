import styled from "styled-components";

export const AsideStyle = styled.aside`
  position: relative;
  color: #fff;

  & > div {
    position: absolute;
    width: 100%;
    left: 58%;
    transform: translateX(-50%);
    top: 50px;

    & > div {
      display: flex;
      margin-bottom: 30px;

      span {
        border: 1px solid #bae0ff;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        font-size: 16px;
        font-weight: 700;
        border-radius: 100px;
        margin-right: 15px;
      }
      h2 {
        font-size: 14px;
        font-weight: 400;
        opacity: 0.7;
      }
      h3 {
        font-size: 16px;
        font-weight: 700;
      }
    }
  }

  .selected {
    background-color: #bae0ff;
    color: #111;
    border: none;
  }

  @media (max-width: 700px) {
    & > div {
      width: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      top: 15%;
      left: 50%;
      transform: translateX(-50%);

      & > div {
        margin-bottom: 0px;

        span {
          margin-right: 0;
        }
      }

      h2 {
        display: none;
      }
      h3 {
        display: none;
      }
    }
  }
`;

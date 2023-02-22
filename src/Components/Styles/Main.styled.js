import styled from "styled-components";

export const MainStyle = styled.div`
  background-color: #fff;
  width: 70%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px lightgray;

  & > aside {
    width: 35%;
    border-radius: 10px;

    img {
      border-radius: 10px;
    }
  }

  & > section {
    width: 65%;
  }

  @media (max-width: 950px) {
    & {
      width: 90%;
      border-radius: 10px;
      border-radius: 10px;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    max-width: 900px;
    position: relative;
    z-index: 1;
    top: 0;
    left: 0;
    transform: translate(0, 0);
    display: flex;
    flex-direction: column;
    padding: 0;
    border-radius: 0px;
    background-color: #eef5ff;

    & > aside {
      width: 100%;
      border-radius: 0;

      img {
        border-radius: 0;
        width: 100%;
      }
    }

    & > section {
      width: 94%;
      padding: 30px 0 10px;
      /* position: absolute; */
      background-color: #fff;
      /* top: 20%; */
      /* left: 50%; */
      /* transform: translateX(-50%); */
      margin: -25% auto 300px;
      border-radius: 10px;
      z-index: 10;
      box-shadow: 2px 2px 10px lightgray;
    }
  }

  /* @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    padding: 0;

    aside {
      width: 100%;

      img {
        width: 100%;
        border-radius: 0;
      }
    }

    section {
      position: absolute;
      top: 80%;
      background-color: #fff;
      width: 94%;
      border-radius: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  } ; */
`;

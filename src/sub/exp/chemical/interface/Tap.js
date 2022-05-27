import styled from "styled-components";
import { ChemicalStore } from "../ChemicalStore";

const TapContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 100vh;
  right: 0px;
  z-index: 2;
  background-color: #000000cf;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px 0px 0px 10px;

  .title {
    margin: 5px 0px 5px 0px;
    font-size: 20px;
    color: white;
  }

  .itemBox {
    display: flex;
    width: 90%;
    height: 100px;
    //justify-content: space-between;
    background-color: #585858;
    margin-bottom: 10px;
    border-radius: 0px 20px 20px 0px;
    transition: 0.2s;

    :hover {
      background-color: #8b8b8b;
    }

    .image {
      width: 100px;
      margin: 2.5px 50px 2.5px 5px;
      border-radius: 50%;
      font-size: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        position: relative;
        top: 50%;
        transform: translateY(-53%);
      }
    }
    .infoBox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 30px;
      color: #dddddd;
    }
  }
  .hydrogen {
    background-color: #ffffff;
    color: #000000;
  }
  .carbon {
    background-color: #000000;
    color: white;
  }
  .nitrogen {
    background-color: #002fff;
    color: #ffffff;
  }
  .oxygen {
    background-color: #ff3333;
    color: #ffffff;
  }
`;

export const Tap = () => {
  return (
    <TapContainer>
      <div className="title">
        <b>원소</b>
      </div>
      <div
        className="itemBox"
        onClick={() => {
          ChemicalStore.setState({ pointerSelect: "hydrogen" });
        }}>
        <div className="image hydrogen">
          <div>H</div>
        </div>
        <div className="infoBox">
          <div>수소</div>
        </div>
      </div>
      <div
        className="itemBox"
        onClick={() => {
          ChemicalStore.setState({ pointerSelect: "carbon" });
        }}>
        <div className="image carbon">
          <div>C</div>
        </div>
        <div className="infoBox">
          <div>탄소</div>
        </div>
      </div>
      <div
        className="itemBox"
        onClick={() => {
          ChemicalStore.setState({ pointerSelect: "nitrogen" });
        }}>
        <div className="image nitrogen">
          <div>N</div>
        </div>
        <div className="infoBox">
          <div>질소</div>
        </div>
      </div>
      <div
        className="itemBox"
        onClick={() => {
          ChemicalStore.setState({ pointerSelect: "oxygen" });
        }}>
        <div className="image oxygen">
          <div>O</div>
        </div>
        <div className="infoBox">
          <div>산소</div>
        </div>
      </div>
    </TapContainer>
  );
};

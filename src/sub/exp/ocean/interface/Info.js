import styled from "styled-components";
import { OceanStore } from "../OceanStore";
import { ClickInfo } from "./ClickInfo";

const InfoContainer = styled.div`
  position: absolute;
  width: 300px;
  //height: 500px;
  top: 10%;
  left: 60%;
  //transform: translateY(-50%);
  z-index: 2;
  color: #ffffff;
  background-color: #353535bc;
  .box {
    div {
      padding-left: 5px;
    }
  }
  .item {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .info {
    outline: 0.1px white solid;
  }
  .characteristic {
    .title {
      padding: 0px;
      font-size: 20px;
    }
    outline: 0.1px white solid;
  }
`;

export const Info = () => {
  const oceanCameraTarget = OceanStore((state) => state.oceanCameraTarget);
  const oceanData = OceanStore.getState().oceanData;
  let select = oceanData[oceanCameraTarget];

  return (
    <InfoContainer>
      {!oceanCameraTarget ? null : (
        <div className="box">
          <div name="" className="info">
            <div className="item">이름: {select.name}</div>
            <div className="item">서식지: {select.habitat}</div>
          </div>
          <div name="" className="characteristic">
            <div className="title">특징</div>
            {select.characteristic.map((i, index) => (
              <div
                className="item"
                key={index}
                onMouseOver={(e) => {
                  OceanStore.setState({ oceanHoverData: i });
                  e.target.style.background = "DarkSlateGrey";
                }}
                onMouseOut={(e) => {
                  OceanStore.setState({ oceanHoverData: false });
                  e.target.style.background = "";
                }}>
                {i.name}
              </div>
            ))}
          </div>
        </div>
      )}
      <ClickInfo />
    </InfoContainer>
  );
};

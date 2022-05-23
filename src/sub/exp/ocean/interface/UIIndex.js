import styled from "styled-components";
import { SubStore } from "../../../../stores/SubStore";
import { ClickInfo } from "./ClickInfo";

const UIContainer = styled.div`
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

export const UIIndex = () => {
  const oceanData = SubStore((state) => state.oceanData);
  return (
    <UIContainer>
      {!oceanData ? null : (
        <div className="box">
          <div name="" className="info">
            <div className="item">이름: {oceanData.name}</div>
            <div className="item">서식지: {oceanData.habitat}</div>
          </div>
          <div name="" className="characteristic">
            <div className="title">특징</div>
            {oceanData.characteristic.map((i, index) => (
              <div
                className="item"
                key={index}
                onClick={(e) => {
                  const data = SubStore.getState().oceanHoverData;
                  SubStore.setState({ oceanHoverData: !data ? i : false });
                  e.target.style.background =
                    e.target.style.background === "" ? "DarkSlateGrey" : "";
                }}>
                {i.name}
              </div>
            ))}
          </div>
        </div>
      )}
      <ClickInfo />
    </UIContainer>
  );
};

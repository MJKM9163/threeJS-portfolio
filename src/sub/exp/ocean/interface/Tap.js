import styled from "styled-components";
import { OceanStore } from "../OceanStore";

const TapContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 229px;
  height: 100vh;
  background-color: #202020;
  z-index: 2;

  .imgBox {
    width: 110px;
    height: 100px;
    background-color: #3d3d3d;
    margin: 3px 0px 0px 3px;
    transition: 0.3s;

    img {
      position: relative;
      width: 50px;
      height: 50px;
      top: 10px;
      left: 50%;

      transform: translateX(-50%);
    }

    .text {
      text-align: center;
      padding-top: 12px;
    }
  }

  .imgBox:nth-child(1) {
    background-color: ${(props) =>
      props.check === "대왕쥐가오리" ? "white" : "#3d3d3d"};
    :hover {
      background-color: white;
    }
  }
  .imgBox:nth-child(2) {
    background-color: ${(props) =>
      props.check === "대왕고래" ? "white" : "#3d3d3d"};
    :hover {
      background-color: white;
    }
  }
  .imgBox:nth-child(3) {
    background-color: ${(props) =>
      props.check === "구피" ? "white" : "#3d3d3d"};
    :hover {
      background-color: white;
    }
  }
  .imgBox:nth-child(4) {
    background-color: ${(props) =>
      props.check === "오징어" ? "white" : "#3d3d3d"};
    :hover {
      background-color: white;
    }
  }
  .imgBox:nth-child(5) {
    background-color: ${(props) =>
      props.check === "산호" ? "white" : "#3d3d3d"};
    :hover {
      background-color: white;
    }
  }
`;

export const Tap = () => {
  const focusName = OceanStore((state) => state.oceanCameraTarget);

  return (
    <TapContainer check={focusName}>
      <div
        className="imgBox"
        onClick={(e) => {
          OceanStore.setState({
            oceanCameraTarget: !focusName ? "대왕쥐가오리" : false,
          });
        }}>
        <img src="/oceans/icons/manta.png" alt="대왕쥐가오리" />
        <div className="text">
          <b>대왕쥐가오리</b>
        </div>
      </div>
      <div
        className="imgBox"
        onClick={(e) => {
          OceanStore.setState({
            oceanCameraTarget: !focusName ? "대왕고래" : false,
          });
        }}>
        <img src="/oceans/icons/whale.png" alt="대왕고래" />
        <div className="text">
          <b>대왕고래</b>
        </div>
      </div>
      <div
        className="imgBox"
        onClick={(e) => {
          OceanStore.setState({
            oceanCameraTarget: !focusName ? "구피" : false,
          });
        }}>
        <img src="/oceans/icons/guppy.png" alt="구피" />
        <div className="text">
          <b>구피</b>
        </div>
      </div>
      <div
        className="imgBox"
        onClick={(e) => {
          OceanStore.setState({
            oceanCameraTarget: !focusName ? "오징어" : false,
          });
        }}>
        <img src="/oceans/icons/squid.png" alt="오징어" />
        <div className="text">
          <b>오징어</b>
        </div>
      </div>
      <div
        className="imgBox"
        onClick={(e) => {
          OceanStore.setState({
            oceanCameraTarget: !focusName ? "산호" : false,
          });
        }}>
        <img src="/oceans/icons/coral.png" alt="산호" />
        <div className="text">
          <b>산호</b>
        </div>
      </div>
    </TapContainer>
  );
};

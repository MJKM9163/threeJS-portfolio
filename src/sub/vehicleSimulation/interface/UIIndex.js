import { useState } from "react";
import styled from "styled-components";
import { SubStore } from "../../../stores/SubStore";

const UIBox = styled.div`
  position: absolute;
  width: 500px;
  height: 100vh;
  right: 0px;
  background-color: rgb(26, 26, 26);
  color: white;
  z-index: 1000;
  transform: ${(props) => (props.hide ? "translateX(100%)" : "translateX(0%)")};
  transition: 0.5s;
  list-style: none;

  .hideTap {
    position: absolute;
    background-color: rgb(180, 180, 180);
    width: 30px;
    height: 50px;
    left: -30px;
    background-image: url(${(props) =>
      props.hide ? "/cars/icons/arrowLeft.png" : "/cars/icons/arrowRight.png"});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px 30px;
  }

  .controlTap {
    display: ${(props) => (props.hide ? "none" : "block")};
    flex-direction: column;
    .custom {
      height: 700px;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background-color: #525252;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #b8b8b8;
        box-shadow: inset 0 0 5px rgb(0, 0, 0);
      }
    }
    .head {
      background-color: rgb(26, 26, 26);
      border-bottom: 1px solid #b6b6b6;
      margin: 20px 20px 0px 20px;
      text-align: center;
      li {
        font-size: 15px;
        font-family: Hack, monospace;
        color: rgb(181, 181, 181);
        vertical-align: sub;
        min-height: 40px;
        line-height: 40px;
        :hover {
          color: white;
          background-color: #5f5f5f;
        }
      }

      .title {
        font-size: 25px;
        //min-height: 40px;
        margin-bottom: 10px;
        background-color: #3d3d3d;
      }
      .inputBox {
        font-size: 11px;
        font-family: Hack, monospace;
        user-select: none;
        cursor: default;
        text-align: left;
        margin: 0;
        padding: 0;
        -webkit-box-sizing: initial;
        position: relative;
        min-height: 20px;
        margin-bottom: 5px;
      }
      .titleBox {
        width: calc(40%);
        display: inline-block;
        margin-right: 2%;
        vertical-align: top;
      }
      .inputTitle {
        font-size: 11px;
        font-family: Hack, monospace;
        user-select: none;
        cursor: default;
        text-align: left;
        margin: 0;
        padding: 0;
        -webkit-box-sizing: initial;
        color: rgb(181, 181, 181);
        display: inline-block;
        vertical-align: sub;
      }
      input[type="range"] {
        -webkit-box-sizing: initial;
        font-family: "Hack";
        font-size: 11px;
        -webkit-appearance: none;
        height: 20px;
        margin: 0px 0px;
        padding: 0px;
        display: inline-block;
        width: calc(42% - 0.5em);
        background-color: rgb(54, 54, 54);
      }
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: #b9b9b9;
        cursor: pointer;
        height: 20px;
        width: 15px;
        :hover {
          background: #fafafa;
        }
      }

      input[type="text"] {
        margin: 0;
        padding: 0;
        position: absolute;
        background-color: rgb(54, 54, 54);
        padding-left: 1%;
        height: 20px;
        width: 16%;
        display: inline-block;
        overflow: hidden;
        border: none;
        font-size: 11px;
        color: rgb(181, 181, 181);
        line-height: 20px;
        word-break: break-all;
        box-sizing: border-box;
        right: 0px;
      }

      .list {
        margin: 10px 0px 10px 0px;
      }
      .xyzBox {
        border-left: 2px solid #5f5f5f;
        .xyz {
          padding-left: 10px;
        }
      }
    }
  }
`;

const customChange = (name) => {
  const set = SubStore.getState().carList[name];
  const { common, option } = set;
  SubStore.setState({
    carCustom: { common: { ...common }, option: { ...option } },
  });
};

export const UIIndex = () => {
  const car = SubStore((state) => state.carCustom);
  const reCheck = SubStore.getState().valueChenge;
  const { common, option } = car;
  const [hide, setHide] = useState(false);
  const [render, setRender] = useState(false);

  const valueChenge = (value, target, c) => {
    SubStore.setState((state) => (state.carCustom[c][target] = Number(value)));
    SubStore.setState({ valueChenge: !reCheck });
    setRender(!render);
  };

  return (
    <UIBox hide={hide}>
      <div className="hideTap" onClick={() => setHide(!hide)}></div>
      <div className="controlTap">
        <div className="preset head">
          <div className="title">프리셋</div>
          <li
            onClick={() => {
              customChange("hyuneai");
            }}>
            중형차
          </li>
          <li
            onClick={() => {
              customChange("hyuneai3");
            }}>
            대형차
          </li>
          <li
            onClick={() => {
              customChange("hyuneai2");
            }}>
            화물차
          </li>
        </div>
        <div className="custom head">
          <div className="title">세부 설정</div>
          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>바퀴 크기</div>
            </div>
            <input
              type={"range"}
              max={15}
              min={0}
              step={0.1}
              value={common.radius}
              onChange={(e) => {
                valueChenge(Number(e.target.value), "radius", "common");
              }}
            />
            <input type={"text"} value={common.radius} readOnly />
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>앞 바퀴 위치</div>
            </div>
            <input
              type={"range"}
              max={30}
              min={-30}
              step={0.1}
              value={common.front}
              onChange={(e) => {
                valueChenge(Number(e.target.value), "front", "common");
              }}
            />
            <input type={"text"} value={common.front} readOnly />
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>뒷 바퀴 위치</div>
            </div>
            <input
              type={"range"}
              max={30}
              min={-30}
              step={0.1}
              value={common.back}
              onChange={(e) => {
                valueChenge(Number(e.target.value), "back", "common");
              }}
            />
            <input type={"text"} value={common.back} readOnly />
          </div>

          <div className="list">
            <div className="inputBox">
              <div className="titleBox">
                <div className={"inputTitle"}>전체 바퀴 위치</div>
              </div>
            </div>
            <div className="xyzBox">
              <div className="inputBox">
                <div className="titleBox">
                  <div className="inputTitle xyz">X</div>
                </div>
                <input
                  type={"range"}
                  max={50}
                  min={0}
                  step={0.1}
                  value={option.directionLocal[0]}
                  onChange={(e) => {
                    SubStore.setState(
                      (state) =>
                        (state.carCustom.option.directionLocal[0] = Number(
                          e.target.value
                        ))
                    );
                    SubStore.setState({ valueChenge: !reCheck });
                    setRender(!render);
                  }}
                />
                <input
                  type={"text"}
                  value={option.directionLocal[0]}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <div className="titleBox">
                  <div className="inputTitle xyz">Y</div>
                </div>
                <input
                  type={"range"}
                  max={50}
                  min={0}
                  step={0.1}
                  value={option.directionLocal[1]}
                  onChange={(e) => {
                    SubStore.setState(
                      (state) =>
                        (state.carCustom.option.directionLocal[1] = Number(
                          e.target.value
                        ))
                    );
                    SubStore.setState({ valueChenge: !reCheck });
                    setRender(!render);
                  }}
                />
                <input
                  type={"text"}
                  value={option.directionLocal[1]}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <div className="titleBox">
                  <div className="inputTitle xyz">Z</div>
                </div>
                <input
                  type={"range"}
                  max={50}
                  min={0}
                  step={0.1}
                  value={option.directionLocal[2]}
                  onChange={(e) => {
                    SubStore.setState(
                      (state) =>
                        (state.carCustom.option.directionLocal[2] = Number(
                          e.target.value
                        ))
                    );
                    SubStore.setState({ valueChenge: !reCheck });
                    setRender(!render);
                  }}
                />
                <input
                  type={"text"}
                  value={option.directionLocal[2]}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>바퀴 넓이</div>
            </div>
            <input
              type={"range"}
              max={30}
              min={0}
              step={0.1}
              value={common.width}
              onChange={(e) => {
                valueChenge(Number(e.target.value), "width", "common");
              }}
            />
            <input type={"text"} value={common.width} readOnly />
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>바퀴 높이</div>
            </div>
            <input
              type={"range"}
              max={30}
              min={0}
              step={0.1}
              value={common.height}
              onChange={(e) => {
                valueChenge(Number(e.target.value), "height", "common");
              }}
            />
            <input type={"text"} value={common.height} readOnly />
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>핸들 폭</div>
            </div>
            <input
              type={"range"}
              max={30}
              min={0}
              step={0.1}
              value={common.steer}
              onChange={(e) => {
                valueChenge(Number(e.target.value), "steer", "common");
              }}
            />
            <input type={"text"} value={common.steer} readOnly />
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className="inputTitle">바퀴 회전력</div>
            </div>
            <input
              type={"range"}
              max={300}
              min={0}
              step={1}
              value={option.customSlidingRotationalSpeed}
              onChange={(e) => {
                valueChenge(
                  Number(e.target.value),
                  "customSlidingRotationalSpeed",
                  "option"
                );
              }}
            />
            <input
              type={"text"}
              value={option.customSlidingRotationalSpeed}
              readOnly
            />
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className="inputTitle">바퀴 마찰력</div>
            </div>
            <input
              type={"range"}
              max={100}
              min={0}
              step={0.1}
              value={option.frictionSlip}
              onChange={(e) => {
                valueChenge(Number(e.target.value), "frictionSlip", "option");
              }}
            />
            <input type={"text"} value={option.frictionSlip} readOnly />
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>브레이크 힘</div>
            </div>
            <input
              type={"range"}
              max={3e5}
              min={0}
              step={1000}
              value={common.maxBrake}
              onChange={(e) => {
                valueChenge(Number(e.target.value), "maxBrake", "common");
              }}
            />
            <input type={"text"} value={common.maxBrake} readOnly />
          </div>

          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>서스펜션 탄성</div>
            </div>
            <input
              type={"range"}
              max={200}
              min={0}
              step={0.1}
              value={option.suspensionStiffness}
              onChange={(e) => {
                valueChenge(
                  Number(e.target.value),
                  "suspensionStiffness",
                  "option"
                );
              }}
            />
            <input type={"text"} value={option.suspensionStiffness} readOnly />
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>서스펜션 길이</div>
            </div>
            <input
              type={"range"}
              max={option.maxSuspensionTravel}
              min={0}
              step={0.1}
              value={option.suspensionRestLength}
              onChange={(e) => {
                valueChenge(
                  Number(e.target.value),
                  "suspensionRestLength",
                  "option"
                );
              }}
            />
            <input type={"text"} value={option.suspensionRestLength} readOnly />
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>서스펜션 힘</div>
            </div>
            <input
              type={"range"}
              max={2e4}
              min={0}
              step={1000}
              value={option.maxSuspensionForce}
              onChange={(e) => {
                valueChenge(
                  Number(e.target.value),
                  "maxSuspensionForce",
                  "option"
                );
              }}
            />
            <input type={"text"} value={option.maxSuspensionForce} readOnly />
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>서스펜션 최대 거리</div>
            </div>
            <input
              type={"range"}
              max={20}
              min={0}
              step={0.1}
              value={option.maxSuspensionTravel}
              onChange={(e) => {
                valueChenge(
                  Number(e.target.value),
                  "maxSuspensionTravel",
                  "option"
                );
              }}
            />
            <input type={"text"} value={option.maxSuspensionTravel} readOnly />
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>충격 흡수력</div>
            </div>
            <input
              type={"range"}
              max={50}
              min={-50}
              step={1}
              value={option.dampingRelaxation}
              onChange={(e) => {
                valueChenge(
                  Number(e.target.value),
                  "dampingRelaxation",
                  "option"
                );
              }}
            />
            <input type={"text"} value={option.dampingRelaxation} readOnly />
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>충격량 폭</div>
            </div>
            <input
              type={"range"}
              max={50}
              min={-50}
              step={1}
              value={option.dampingCompression}
              onChange={(e) => {
                valueChenge(
                  Number(e.target.value),
                  "dampingCompression",
                  "option"
                );
              }}
            />
            <input type={"text"} value={option.dampingCompression} readOnly />
          </div>

          {/* ---------------------------------------------- */}
          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>엑셀 힘</div>
            </div>
            <input
              type={"range"}
              max={20000}
              min={0}
              step={100}
              value={common.force}
              onChange={(e) => {
                valueChenge(Number(e.target.value), "force", "common");
              }}
            />
            <input type={"text"} value={common.force} readOnly />
          </div>
          <div className="list">
            <div className="inputBox">
              <div className="titleBox">
                <div className="inputTitle">엑셀 방향</div>
              </div>
            </div>
            <div className="xyzBox">
              <div className="inputBox">
                <div className="titleBox">
                  <div className="inputTitle xyz">X</div>
                </div>
                <input
                  type={"range"}
                  max={50}
                  min={0}
                  step={0.1}
                  value={option.axleLocal[0]}
                  onChange={(e) => {
                    SubStore.setState(
                      (state) =>
                        (state.carCustom.option.axleLocal[0] = Number(
                          e.target.value
                        ))
                    );
                    SubStore.setState({ valueChenge: !reCheck });
                    setRender(!render);
                  }}
                />
                <input type={"text"} value={option.axleLocal[0]} readOnly />
              </div>
              <div className="inputBox">
                <div className="titleBox">
                  <div className="inputTitle xyz">Y</div>
                </div>
                <input
                  type={"range"}
                  max={50}
                  min={0}
                  step={0.1}
                  value={option.axleLocal[1]}
                  onChange={(e) => {
                    SubStore.setState(
                      (state) =>
                        (state.carCustom.option.axleLocal[1] = Number(
                          e.target.value
                        ))
                    );
                    SubStore.setState({ valueChenge: !reCheck });
                    setRender(!render);
                  }}
                />
                <input type={"text"} value={option.axleLocal[1]} readOnly />
              </div>
              <div className="inputBox">
                <div className="titleBox">
                  <div className="inputTitle xyz">Z</div>
                </div>
                <input
                  type={"range"}
                  max={50}
                  min={0}
                  step={0.1}
                  value={option.axleLocal[2]}
                  onChange={(e) => {
                    SubStore.setState(
                      (state) =>
                        (state.carCustom.option.axleLocal[2] = Number(
                          e.target.value
                        ))
                    );
                    SubStore.setState({ valueChenge: !reCheck });
                    setRender(!render);
                  }}
                />
                <input type={"text"} value={option.axleLocal[2]} readOnly />
              </div>
            </div>
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className={"inputTitle"}>움직임 미입력 시 바퀴 회전</div>
            </div>
            <input
              type={"checkbox"}
              checked={option.useCustomSlidingRotationalSpeed}
              onChange={(e) => {
                const check =
                  SubStore.getState().carCustom.option
                    .useCustomSlidingRotationalSpeed;
                SubStore.setState(
                  (state) =>
                    (state.carCustom.option.useCustomSlidingRotationalSpeed =
                      !check)
                );
                SubStore.setState({ valueChenge: !reCheck });
                setRender(!render);
              }}
            />
            <input
              type={"text"}
              value={option.useCustomSlidingRotationalSpeed}
              readOnly
            />
          </div>
          {}
          <div className="inputBox">
            <div className="titleBox">
              <div className="inputTitle">바퀴 회전력</div>
            </div>
            <input
              type={"range"}
              max={300}
              min={0}
              step={1}
              value={option.customSlidingRotationalSpeed}
              onChange={(e) => {
                valueChenge(
                  Number(e.target.value),
                  "customSlidingRotationalSpeed",
                  "option"
                );
              }}
            />
            <input
              type={"text"}
              value={option.customSlidingRotationalSpeed}
              readOnly
            />
          </div>
          <div className="inputBox">
            <div className="titleBox">
              <div className="inputTitle">바퀴 마찰력</div>
            </div>
            <input
              type={"range"}
              max={100}
              min={0}
              step={0.1}
              value={option.frictionSlip}
              onChange={(e) => {
                valueChenge(Number(e.target.value), "frictionSlip", "option");
              }}
            />
            <input type={"text"} value={option.frictionSlip} readOnly />
          </div>
          {}
        </div>
      </div>
    </UIBox>
  );
};

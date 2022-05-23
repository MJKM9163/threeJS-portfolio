import styled from "styled-components";
import { SubStore } from "../../../../stores/SubStore";

const HoverContainer = styled.div`
  position: absolute;
  width: 300px;
  top: 110%;

  color: #ffffff;
  background-color: #353535bc;

  .box {
    outline: 0.1px white solid;
    .name {
      font-size: 20px;
    }
    .descript {
      padding-left: 10px;
    }
  }
`;

export const ClickInfo = () => {
  const oceanHoverData = SubStore((state) => state.oceanHoverData);
  return (
    <HoverContainer>
      {!oceanHoverData ? null : (
        <div className="box">
          <div className="name">{oceanHoverData.name}</div>
          <div className="descript">{oceanHoverData.descript}</div>
        </div>
      )}
    </HoverContainer>
  );
};

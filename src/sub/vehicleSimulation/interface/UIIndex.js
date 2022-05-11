import styled from "styled-components";

const UIBox = styled.div`
  position: absolute;
  width: 100px;
  height: 100vh;
  right: 0px;
  background-color: #0c4629;
  color: white;
  z-index: 1000;
`;

export const UIIndex = () => {
  return <UIBox>야호</UIBox>;
};

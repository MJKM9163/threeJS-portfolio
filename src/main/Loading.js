import styled from "styled-components";

const LoadingBox = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 50000000;
  color: #cacaca;
  cursor: default;

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 40px;
    transform: translate(-50%, -50%);
  }

  .circle {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border: 5px solid #fff;
    border-radius: 6em;
    transition: all 0.2s;
    animation: spinCircle 1.8s infinite ease-out;
  }

  @keyframes spinCircle {
    0% {
      transform: translate(-50%, -50%) rotate(0);
      border: 5px solid #fff;
      border-radius: 6em;
    }
    33% {
      border: 5px solid #feffc1;
      border-radius: 0.5em;
    }
    66% {
      border: 5px solid #ffd0d0;
      border-radius: 4.5em;
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
      border: 5px solid #fff;
      border-radius: 6em;
    }
  }
`;

export const Loading = () => {
  return (
    <LoadingBox>
      <div className="circle"></div>
      <div className="text">준비중</div>
    </LoadingBox>
  );
};

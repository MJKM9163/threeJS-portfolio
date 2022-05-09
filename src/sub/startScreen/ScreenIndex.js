import styled from "styled-components";
import { List } from "./List";

const StartBox = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: #292929;
  transition: ${(props) => (props.check ? "0.3s" : "none")};
  z-index: ${(props) => (props.check ? -50000 : 30000000)};
  opacity: ${(props) => (props.check ? 0 : 1)};

  .icon {
    position: absolute;
    width: 150px;
    height: 75px;
    right: 0px;
    margin: 20px 50px 0px 0px;
    a {
      img {
        border-radius: 50%;
        transition: 0.3s;

        :hover {
          outline: 1px solid black;
          border-radius: 30%;
        }
      }
    }
  }
`;

const Screen = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 100px 0px 0px 150px;
  color: #dadada;
  animation: start 1s linear alternate forwards;

  h1 {
    width: 100%;
    margin: 0px;
    font-size: 90px;
    padding-bottom: 10px;
    border-bottom: 1px solid #b9b9b9;
  }

  @keyframes start {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StartScreen = () => {
  return (
    <StartBox check={null}>
      <div className="icon">
        <a
          href="https://github.com/MJKM9163/"
          target="_blank"
          rel="noopener noreferrer">
          <img src="/icons/github.png" width="75" alt="image1" />
        </a>
        <a
          href="https://green-consonant-515.notion.site/9a88fdbad2394fb0b5a30df3221458f5?v=bc4ae03b7b554c1face6d482003c8f66"
          target="_blank"
          rel="noopener noreferrer">
          <img src="/icons/notion.png" width="75" alt="image2" />
        </a>
      </div>
      <Screen>
        <h1>MJKM portfolio</h1>
        <List />
      </Screen>
    </StartBox>
  );
};

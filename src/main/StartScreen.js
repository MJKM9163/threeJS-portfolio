import { useState } from "react";
import styled from "styled-components";
import { MainStore } from "../stores/MainStore";

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

  .listBox {
    .lists {
      //width: 100%;
      li {
        width: 230px;
        margin-top: 30px;
        font-size: 30px;
        list-style: none;
        color: #dadada;
        transform: translateX(40%);
        opacity: 0;
        transition: 0.2s;
        background-color: #06003b;

        :hover {
          color: #a3daff;
        }
      }
      li:nth-child(1) {
        animation: liAction 0.3s ease 0.5s alternate forwards;
      }
      li:nth-child(2) {
        animation: liAction 0.3s ease 0.8s alternate forwards;
      }
      li:nth-child(3) {
        animation: liAction 0.3s ease 1.1s alternate forwards;
      }
    }
  }

  .glitch {
    .listBox {
      .lists {
        li {
          color: red;
          animation: none;
        }
      }
    }
  }

  @keyframes start {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes liAction {
    0% {
      opacity: 0;
      transform: translateX(40%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export const StartScreen = () => {
  const start = MainStore((state) => state.start);
  return (
    <StartBox check={start}>
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
        <div className="listBox">
          <div className="lists">
            <li onClick={() => MainStore.setState({ start: true })}>시작</li>
          </div>
        </div>
      </Screen>
    </StartBox>
  );
};

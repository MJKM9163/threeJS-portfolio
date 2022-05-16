import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SubStore } from "../../stores/SubStore";

const ListBox = styled.div`
  li {
    list-style: none;
    color: #dadada;
    background-color: #494949;
    margin-bottom: 5px;
  }
  .lists {
    li {
      width: 230px;
      margin-top: 30px;
      font-size: 30px;
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

const HoverList = styled.div`
  position: absolute;
  width: 300px;
  height: 500px;
  left: 250px;
  margin-top: 30px;
  opacity: ${(props) => (props.op ? 1 : 0)};

  a {
    text-decoration: none;
  }
`;

export const List = () => {
  const { screenList } = SubStore.getState();
  const [focus, setFocus] = useState([screenList.exp, false, "exp"]);

  return (
    <ListBox>
      <HoverList op={focus[1]}>
        {focus[0].map((e, i) => (
          <Link key={`${focus[2]}${i + 1}`} to={`/${focus[2]}/${i + 1}`}>
            <li>{e[0]}</li>
          </Link>
        ))}
      </HoverList>
      <div className="lists">
        <li
          className="exp"
          onClick={() => {
            if (focus[0] === screenList.exp) {
              setFocus([screenList.exp, !focus[1], "exp"]);
            } else setFocus([screenList.exp, true, "exp"]);
          }}>
          체험
        </li>
        <li
          className="simulation"
          onClick={() => {
            if (focus[0] === screenList.simulation) {
              setFocus([screenList.simulation, !focus[1], "simulation"]);
            } else setFocus([screenList.simulation, true, "simulation"]);
          }}>
          시뮬레이션
        </li>
        <li
          className="n"
          onClick={() => {
            SubStore.setState({ buildingDefault: true });
            if (focus[0] === screenList.etc) {
              setFocus([screenList.etc, !focus[1], "etc"]);
            } else setFocus([screenList.etc, true, "etc"]);
          }}>
          기타
        </li>
      </div>
    </ListBox>
  );
};

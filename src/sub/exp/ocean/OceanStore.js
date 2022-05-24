import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const OceanStore = create(
  subscribeWithSelector((set, get) => ({
    //  oceanData: false,
    oceanHoverData: false,
    oceanCameraTarget: false,

    oceanData: {
      대왕쥐가오리: {
        name: "대왕쥐가오리(manta ray)",
        habitat: "열대, 아열대",
        characteristic: [
          {
            name: "거대한 가오리",
            descript: "현존하는 가오리 중 가장 거대한 종",
          },
          {
            name: "앞 지느러미",
            descript: "앞 지느러미는 먹이를 입 주위로 모으는 역할을 한다.",
          },
          {
            name: "여과 섭식자",
            descript:
              "여과 섭식자는 특화된 여과 구조를 가지고 있으며 물을 통과시켜 물속의 입자나 부유 물질을 걸러 먹는 포식자를 뜻한다.",
          },
        ],
      },
    },
  }))
);

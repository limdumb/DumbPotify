import React, { useState } from "react";
import ChartList from "./ChartList";
// ChartList에 props를 받아서 CategoryTab에 연결
// 만약에 index 0번이 눌리면 Album과 Artist에 대한 정보가 display none 처리,1번이면 나머지none 2번이면 나머지 none
// 그정보를 MainPage에 연결


export default function CategoryTab({ onTabChange }) {
  const [activate, setActivate] = useState(0);

  const tabClickHandler = (index) => {
    setActivate(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  const tabContArr = [
    {
      tabTitle: (
        <li>
          <button onClick={() => tabClickHandler(0)}>Songs</button>
        </li>
      )
    },

    {
      tabTitle: (
        <li>
          <button onClick={() => tabClickHandler(1)}>Albums</button>
        </li>
      ),
    },

    {
      tabTitle: (
        <li>
          <button onClick={() => tabClickHandler(2)}>Artist</button>
        </li>
      ),
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ul className="information__List">
        {tabContArr.map((section, index) => {
          return section.tabTitle;
        })}
      </ul>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          className="Album__Image"
          src="http://www.akbobada.com/home/akbobada/archive/akbo/img/202209191012058.jpg"
        />
        <span>
          올해 블랙핑크는 셧다운이라는 곡으로 새로운 기록을 갱신했다.
        </span>
      </div>
    </div>
  );
}

{
  /* <ul className="information__List">
              <li><button>Songs</button></li>
              <li><button>Albums</button></li>
              <li><button>Artist</button></li>
            </ul> */
}

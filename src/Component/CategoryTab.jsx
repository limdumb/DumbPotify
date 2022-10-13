import React, { useState } from "react"
import ChartList from "./ChartList"

export default function CategoryTab () {
  const [activate, setActivate] = useState(0)

  const tabClickHandler=(index) => {
    setActivate(index)
  }

  const tabContArr=[
    {
      tabTitle:(
        <li><button onClick={() => tabClickHandler(0)}>Songs</button></li>
      ),
      tabContent:(
        <ChartList/>
      )
    },


    {
      tabTitle:(
        <li><button onClick={() => tabClickHandler(1)}>Albums</button></li>
      ),
      tabContent:(
        <>
          <ChartList/>
          <span>안녕</span>
        </>
      ),
    },


    {
      tabTitle:(
          <li><button onClick={() => tabClickHandler(2)}>Artist</button></li>
      ),
      tabContent:(
        <ChartList/>
      )
    }
  ]

    return(
      <div style={{ display :"flex",
                    flexDirection: "column"
      }}>
      <ul className="information__List">
        {tabContArr.map((section, index) => {
          return section.tabTitle
        })}
            </ul>
            <div style={{
              display:"flex",
              alignItems:"center"
            }}>
            <img className="Album__Image" src="http://www.akbobada.com/home/akbobada/archive/akbo/img/202209191012058.jpg"/>
            <span> 올해 블랙핑크는 셧다운이라는 곡으로 새로운 기록을 갱신했다. </span>
            </div>
          <div>
            {tabContArr[activate].tabContent}
          </div>
      </div>
    );
}


{/* <ul className="information__List">
              <li><button>Songs</button></li>
              <li><button>Albums</button></li>
              <li><button>Artist</button></li>
            </ul> */}
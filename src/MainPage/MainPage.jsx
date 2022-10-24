import Footer from "../Component/Footer";
import Header from "../Component/Header";
import CategoryTab from "../Component/CategoryTab";
import ChartList from "../Component/ChartList";
import { useState } from "react";
export default function MainPage() {
  const [currentTab, setCurrentTab] = useState("songs");

  const getBackgroundColor = (tab) => {
    // switch (tab) {
    //   case "songs":
    //     return "lightcoral";
    //   case "albums":
    //     return "blue";
    //   default:
    //     return "white";
    // }
    if (tab === "songs") {
      return "lightcoral";
    }
    if (tab === "albums") {
      return "blue";
    }
    return "white";
  };

  return (
    <div>
      <Header />
      <section
        className="information__Container"
        style={{
          backgroundColor: getBackgroundColor(currentTab),
          transition: "background-color",
        }}
      >
        <div className="information__Contents">
          <h1>Black Pink</h1>
          <CategoryTab
            onTabChange={(index) => {
              if (index === 0) {
                setCurrentTab("songs");
              } else if (index === 1) {
                setCurrentTab("albums");
              } else {
                setCurrentTab("artist");
              }
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <button>🔜</button>
            <button>🔙</button>
          </div>
        </div>
      </section>
      <section className="chart__List__Container">
        
        <ChartList tab={currentTab}/>
      </section>
      <Footer></Footer>
    </div>
  );
}

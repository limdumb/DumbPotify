import CategoryTab from "./CategoryTab"

export default function ChartList(props) {

  const getChartList = (tab) => {
    if(tab === "songs") {
      return <>
      <ol aria-label="Content1">
                <li className="chart__List">
                  <div className="chart__List__Content">
                    <img className="chart__List__Image" src="http://www.akbobada.com/home/akbobada/archive/akbo/img/202209191012058.jpg"/>
                    <span>1</span>
                    <span>new</span>
                    <div>
                      <p>Shut Down</p>
                      <span>Black Pink</span>
                    </div>
                  </div>
                </li>
        </ol>
      </>
    }

    if(tab === "albums"){
      return <>
      <ol aria-label="Content2">
                <li className="chart__List">
                  <div className="chart__List__Content">
                    <img className="chart__List__Image" src="http://www.akbobada.com/home/akbobada/archive/akbo/img/202209191012058.jpg"/>
                    <span>2</span>
                    <span>new</span>
                    <div>
                      <p>Pink Venom</p>
                      <span>Black Pink</span>
                    </div>
                  </div>
                </li>
        </ol>
      </>
    }

    if(tab === "artist"){
      return <>
              <ol aria-label="Content3">
                <li className="chart__List">
                  <div className="chart__List__Content">
                    <img className="chart__List__Image" src="http://www.akbobada.com/home/akbobada/archive/akbo/img/202209191012058.jpg"/>
                    <span>3</span>
                    <span>new</span>
                    <div>
                      <p>Ready for love</p>
                      <span>Black Pink</span>
                    </div>
                  </div>
                </li>
        </ol>
      </>
    }
  }
  return(
    <>
      {getChartList(props.tab)}
    </>
  )
}
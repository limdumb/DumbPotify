import Footer from "../Component/Footer"
export default function MainPage() {
  
  return(
    <div style={{width:"100vh", height:"100vh"}}>
      <header className="header__Container">
        <img className="header__Logo " src={process.env.PUBLIC_URL + './logoimage/dumpotify.png'}/>
      </header>
      <section className="information__Container">
        <div className="information__Contents">
        <h1>Black Pink</h1>
          <ul className="information__List">
            <li><button>Songs</button></li>
            <li><button>Albums</button></li>
            <li><button>Artist</button></li>
          </ul>
          <img className="Album__Image" src="http://www.akbobada.com/home/akbobada/archive/akbo/img/202209191012058.jpg"/>
        </div>
          <div style={{ 
            display: "flex",
            alignItems: "center"
        }}>
            <span> 올해 블랙핑크는 셧다운이라는 곡으로 새로운 기록을 갱신했다. </span>
          </div>
          <div style={{
            display:"flex",
            alignItems:"flex-end"
          }}>
            <button>🔙</button>
            <button>🔜</button>
          </div>
      </section>
      <section className="chart__List__Container">
        <ol >
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
      </section>
      <Footer></Footer>
    </div>
  )
}
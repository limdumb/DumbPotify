
export default function CategoryTab () {

  return(
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
  )
}
import Footer from "../Component/Footer"
import Header from "../Component/Header"
import CategoryTab from "../Component/CategoryTab"
import ChartList from "../Component/ChartList"
export default function MainPage() {
  
  return(
    <div>
      <Header/>
        <CategoryTab/>
      <section className="chart__List__Container">
          <ChartList/>
      </section>
      <Footer></Footer>
    </div>
  )
}
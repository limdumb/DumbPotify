import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Component/Header";
import ChartList from "../Component/ChartList";
import Footer from "../Component/Footer";
import CategoryTab from "../Component/CategoryTab";

const ChartSection = styled.section `
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  border-left: none;
  border-right: none;
  border-top: none;
  height: 80%;
  background-color: rgb(251, 249, 252);
`

const Information = styled.section `
  border: none;
  background-color: #6d3188;
  padding: 80px 40px;
`

const Container = styled.div `
  height: 100vh;
`

const HomeChartInfo = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
`

//현재 활성화된 탭이 어떤것인지 저장해야 할 꺼고
// 활성화된 탭이 아닌 탭은 노출안되게 처리해줘야지
export default function MainPage() {
  

  return(
    <Container>
      <Header></Header>
        <Information>
          <HomeChartInfo>
            <h3>Here's a sample of what's moving fans this week.</h3>
              <CategoryTab></CategoryTab>
            <div style={{
              display:'flex'
            }}>
              <img className="Album__Image" src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/07/25/114635657.2.jpg"/>
              <h3>지금은 소녀시대 앞으로도 소녀시대 영원히 소녀시대</h3>
            </div>
          </HomeChartInfo>
        </Information>
        <ChartSection>
          <span>Weekly Top Songs Global</span>
          <h3>Friday, September 23 - Thursday, September 29, 2022</h3>
          <ChartList></ChartList>
        </ChartSection>
        <Footer></Footer>
    </Container>
  )
}
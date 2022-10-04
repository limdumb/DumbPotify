import styled from "styled-components";

const MainHeader = styled.header `
  display: flex;
  height: 50px;
`

const ChartSection = styled.section `
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  border-left: none;
  border-right: none;
  margin-top: 10px;
  border-top: none;
  height: 80%;
`

const Information = styled.section `
  border: none;
  background-color: #6d3188;
  padding: 80px 40px;
`

const Footer = styled.footer `
  background-color: black;
  color: white;
  height: 11%;
`

const Container = styled.div `
  height: 100vh;
`

const HomeChartInfo = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
`


export default function MainPage() {
  return(
    <Container>
        <MainHeader>
          <div className="Chart__Home__Header">
            <a href="/">
             <img className="header__Logo" src={process.env.PUBLIC_URL + '/logoimage/dumpotify.png'}/>
            </a>
          </div>
        </MainHeader>
        <Information>
          <HomeChartInfo>
            <h3>Here's a sample of what's moving fans this week.</h3>
              <ul className="Contents__List">
                <li><button>Songs</button></li>
                <li><button>Album</button></li>
                <li><button>Artist</button></li>
              </ul>
            <div style={{
              display:'flex'
            }}>
              <img className="Album__Image" src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/07/25/114635657.2.jpg"/>
              <h3>내용</h3>
            </div>
          </HomeChartInfo>
        </Information>
        <ChartSection>
          <span>Weekly Top Songs Global</span>
          <h3>Friday, September 23 - Thursday, September 29, 2022</h3>
          <ul>
            <li>안녕</li>
            <li>나는</li>
            <li>경인</li>
          </ul>
        </ChartSection>
        <Footer>ㅇㅇ</Footer>
    </Container>
  )
}
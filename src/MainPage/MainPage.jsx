import styled from "styled-components";

const MainHeader = styled.header `
  border-bottom: 1px solid #011;
  margin-top: 55px;
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
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  border-left: none;
  border-right: none;
  margin-top: 10px;
  border-top: none;
  height: 50%;
`

const Footer = styled.footer `
  background-color: black;
  color: white;
  height: 11%;
`

const Container = styled.div `
  height: 100vh;
`



export default function MainPage() {
  return(
    <Container>
        <MainHeader></MainHeader>
        <Information>
          <h3>Here's a sample of what's moving fans this week.</h3>
            <ul className="Contents__List">
              <li>Songs</li>
              <li>Album</li>
              <li>Artist</li>
            </ul>
          <div>
            <img/>
            <h3></h3>
          </div>
        </Information>
        <ChartSection>
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
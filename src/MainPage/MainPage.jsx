import styled from "styled-components";

const MainHeader = styled.header `
  border-bottom: 1px solid #011;
  margin-top: 55px;
`

const ChartSection = styled.section `
  display: flex;
  justify-content: center;
  border: 1px solid black;
  align-items: center;
  flex-direction: column;
  border-left: none;
  border-right: none;
  margin-top: 10px;
`

const Footer = styled.footer `
  background-color: black;
  color: white;
`



export default function MainPage() {
  return(
    <div>
        <MainHeader></MainHeader>
        <ChartSection>
          <h3>Here's a sample of what's moving fans this week.</h3>
            <ul className="Contents__List">
              <li>Songs</li>
              <li>Album</li>
              <li>Artist</li>
            </ul>
        </ChartSection>
        <ChartSection>
          <ul>
            <li>안녕</li>
            <li>나는</li>
            <li>경인</li>
          </ul>
        </ChartSection>
        <Footer>ㅇㅇ</Footer>
    </div>
  )
}
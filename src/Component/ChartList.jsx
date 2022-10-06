import styled from "styled-components"


const ChartListContainer = styled.div `
  background-color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
`

const ChartContainer = styled.ol `
  list-style: none;
  padding-right: 40px;
`

const ChartImage = styled.img `
  width: 94px;
  height: 94px;
  padding: 24px 32px;
`

const ChartRank = styled.div `
  display: flex;
`

export default function ChartList() {

  return(
    <ChartListContainer>
      <ChartImage src="https://upload.wikimedia.org/wikipedia/en/f/f2/BLACKPINK-_The_Album.png"/>
        <ChartRank>
          <span>1</span>
          <div>new</div>
        </ChartRank>
          <div>
            <p>Shut Down</p>
            <span>Black Pink</span>
          </div>
    </ChartListContainer>
  );
}
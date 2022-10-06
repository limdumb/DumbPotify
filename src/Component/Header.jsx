import { Link } from "react-router-dom";
import styled from "styled-components";


const MainHeader = styled.header `
display: flex;
justify-content: space-between;
align-items: center;
height: 70px;
`

const LoginButton = styled.button `
  border-radius: 40px;
  border: none;
  background-color: #6d3188;
  width: 100px;
  height: 45px;
  color: white;
  font-size: 15px;
  font-weight: bolder;
  cursor: pointer;
`

export default function Header() {

  return(
    <MainHeader>
      <a href='/'>
        <img className="header__Logo" src={process.env.PUBLIC_URL + '/logoimage/dumpotify.png'}/>
      </a>
      <Link to='/login'>
        <LoginButton>Login</LoginButton>
      </Link>
    </MainHeader>
  );
}
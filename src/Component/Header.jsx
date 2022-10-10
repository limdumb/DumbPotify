import { Link } from "react-router-dom";

export default function Header() {
  return(
      <header className="header__Container">
        <Link to="/">
         <img className="header__Logo " src={process.env.PUBLIC_URL + './logoimage/dumpotify.png'}/>
        </Link>
        <Link to="/login">
          <button className="login__Button">Login</button>
        </Link>
      </header>
  )
}
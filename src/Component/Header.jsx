
export default function Header() {
  return(
      <header className="header__Container">
        <img className="header__Logo " src={process.env.PUBLIC_URL + './logoimage/dumpotify.png'}/>
      </header>
  )
}
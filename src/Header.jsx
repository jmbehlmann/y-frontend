import { Link } from "react-router-dom";


export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/postnew">Make a new post</Link>
      </nav>
    </header>
  )
}

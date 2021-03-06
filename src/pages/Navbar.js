import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="nav">
          <div>WEBDEV</div>
            <ul>
                <CustomLink to="/Welcome">Bienvenidos</CustomLink>
                <CustomLink to="/Checkbox">Buy now</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
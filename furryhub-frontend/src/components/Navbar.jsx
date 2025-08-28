import { NavLink, Link, useLocation } from "react-router-dom";

export default function Navbar(){
  const loc = useLocation();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const link = (to, label) => (
    <NavLink
      to={to}
      className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
    >
      {label}
    </NavLink>
  );

  return (
    <div className="navbar glass">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="FurryHub Home">
          <div className="brand-badge">FH</div>
          <div>
            <div style={{fontWeight:900, letterSpacing: '-0.02em'}}>FurryHub</div>
            <div style={{fontSize:12, color:'#64748b'}}>The Furry Friend Ultimate Hub</div>
          </div>
        </Link>
        <nav className="nav-links">
          {link("/", "Home")}
          {link("/book", "Book")}
          {link("/my-bookings", "My Bookings")}
          {link("/pets", "My Pets")}
          {user
            ? <span className="nav-link" title={user?.email}>Hi, {user?.username || "User"}</span>
            : <>
                {link("/login", "Login")}
                {link("/register", "Register")}
              </>
          }
        </nav>
      </div>
    </div>
  );
}

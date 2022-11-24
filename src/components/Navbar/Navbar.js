import NavLink from "../Navlink/NavLink";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <div className="navlinks">
        <NavLink href="#" text="Home" />
        <NavLink href="#" text="Categorías" />
        <NavLink href="#" text="Ofertas" />
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;

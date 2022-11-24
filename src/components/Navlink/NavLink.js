import "./navlink.css";

const NavLink = ({ href, text }) => {
  return (
    <div className="navlink">
      <a href={href} className="link">
        {text}
      </a>
    </div>
  );
};

export default NavLink;

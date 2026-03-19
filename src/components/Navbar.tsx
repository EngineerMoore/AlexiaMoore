import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/NavBar.css";
const Navbar: React.FC = () => {
  const navItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Projects",
      link: "/projects",
    },
    {
      label: "Experience",
      link: "/experience",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav>
      <img alt="Alexia Moore logo" src={logo} className="logo" width={250} />
      <div className="nav-links">
        {navItems.map((item, index) => (
          <Link key={index} to={item.link}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;

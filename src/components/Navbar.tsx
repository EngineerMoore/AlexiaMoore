import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigation = (target: string) => {
    // update url: /target
    navigate(`/${target}`);

    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navItems = [
    {
      label: "Home",
      target: "home",
    },
    {
      label: "Projects",
      target: "projects",
    },
    {
      label: "Contact",
      target: "contact",
    },
  ];
  return (
    <nav>
      <img alt="Alexia Moore logo" src={logo} className="logo" width={250} />
      <div className="nav-links">
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleNavigation(item.target)}
              tabIndex={index} // makes sections tab accessible
              onKeyDown={(e) =>
                e.key === "Enter" && handleNavigation(item.target)
              }
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  const navItems = [
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
      {navItems.map((item, index) => (
        <Link key={index} to={item.link}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
export default Navbar;

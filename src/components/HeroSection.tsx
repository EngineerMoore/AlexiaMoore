import paintSplash from "../assets/paint-splash-static.png";
import headshot from "../assets/headshot-2025-transparent-bg-grey-splash-edge.png";
import { useNavigate } from "react-router-dom";
import "../styles/HeroSection.css";

const HeroScetion: React.FC = () => {
  const navigate = useNavigate();
  const handleGetConnected = () => {
    navigate("/contact");
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="hero-section" id="home">
      <text className="hero-text emphasis-sleek">
        <h1>Software Developer</h1>
        <p>Your bridge between creativty and reality</p>
        <button onClick={handleGetConnected}>Get Connected</button>
      </text>
      <div className="hero-image">
        <img className="headshot" alt="headshot" src={headshot} />
        <img className="splash" alt="paint splash" src={paintSplash} />
      </div>
    </section>
  );
};
export default HeroScetion;

import paintSplash from "../assets/paint-splash-static.png";
import headshot from "../assets/headshot-2025-transparent-bg-grey-splash-edge.png";
import "../styles/heroSection.css";

const HeroScetion: React.FC = () => {
  return (
    <section className="hero-section">
      <text className="hero-text emphasis-sleek">
        <h1>Software Developer</h1>
        <p>Your bridge between creativty and reality</p>
      </text>
      <div className="hero-image">
        <img className="headshot" alt="headshot" src={headshot} />
        <img className="splash" alt="paint splash" src={paintSplash} />
      </div>
    </section>
  );
};
export default HeroScetion;

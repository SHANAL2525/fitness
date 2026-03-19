import heroFull from "../../assets/hero-full.png";

function Hero() {
  return (
    <section id="hero" className="hero-exact">
      <img src={heroFull} alt="Fitness Hero" className="hero-exact__image" />
    </section>
  );
}

export default Hero;
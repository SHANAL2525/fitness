function Services() {
  return (
    <section id="services" className="section section--white">
      <div className="container">
        <p className="section-subtitle">WHAT WE OFFER</p>
        <h2 className="section-title section-title--dark">
          OUR SERVICES & FEATURES
        </h2>

        <div className="cards">
          <div className="card">
            <h3>Personal Training</h3>
            <p>Personalized workout guidance from expert trainers.</p>
            <button>Learn More →</button>
          </div>

          <div className="card">
            <h3>Nutrition Planning</h3>
            <p>Customized nutrition plans to support your fitness goals.</p>
            <button>Learn More →</button>
          </div>

          <div className="card">
            <h3>Weight Loss Programs</h3>
            <p>Structured programs to help achieve safe weight loss.</p>
            <button>Learn More →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
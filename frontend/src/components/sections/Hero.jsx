import React from 'react';

const Hero = () => {
  return (
    <>
      <style>{`
        .hero-section {
          background-color: #ffffff;
          color: #0f172a;
          padding: 80px 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          width: 411px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.1;
          color: #000000;
          margin: 0;
        }

        .hero-description {
          font-size: 1rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        .hero-btn {
          background-color: #0f172a;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.2s ease;
        }

        .hero-btn:hover {
          background-color: #1e293b;
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            Professional.<br />
            Innovative.<br />
            Trusted.
          </h1>

          <p className="hero-description">
            Cheralite Limited is a dynamic and innovative general contracting company committed to delivering high-quality construction, engineering, procurement, project management, and facility support services across diverse sectors.
          </p>

          <a href="#projects" className="hero-btn">
            View Our Projects
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;

import React from 'react';
import './video.css'; // Assume custom styles in App.css

const App = () => {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Ace Your Frontend Interviews with Real-World Challenges!
          </h1>
          <p className="hero-subtitle">
            Practice JavaScript, React, and Full Stack Projects to land your dream job.
          </p>
          <div className="hero-buttons">
            <button className="cta-primary">Start Practicing Now</button>
            <button className="cta-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Coding Illustration"
            className="hero-img"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="features-title">What We Offer</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>JavaScript Challenges</h3>
            <p>Real-world coding problems that help you sharpen your JS skills.</p>
          </div>
          <div className="feature-card">
            <h3>React Projects</h3>
            <p>Comprehensive React projects to build your portfolio.</p>
          </div>
          <div className="feature-card">
            <h3>Full Stack Projects</h3>
            <p>Simulate job-like scenarios with full-stack development projects.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="testimonials-title">What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"I cracked my interview at Google thanks to this platform!"</p>
            <span>- User A</span>
          </div>
          <div className="testimonial-card">
            <p>"The challenges felt like real-world problems. Highly recommend!"</p>
            <span>- User B</span>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2 className="cta-title">Your Dream Job is One Click Away!</h2>
        <button className="cta-primary">Start Practicing Now</button>
      </section>
    </div>
  );
}

export default App;

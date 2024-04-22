import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-heading">
        <h2>About PharmaPlus</h2>
        <p>"Your trusted source for quality medications and healthcare essentials, committed to serving you with care and professionalism."</p>
      </div>
      <div className="about-description">
        <div className="about-info">
          <h3>Our Vision</h3>
          <p>
          A pioneering medical shop committed to enhancing community wellness by providing a comprehensive range of pharmaceutical products, health supplements, and medical equipment. Our vision is to be the trusted healthcare partner, offering quality products, personalized services, and expert advice to empower individuals in their journey towards better health and well-being.
          </p>
        </div>
        <div className="about-info">
          <h3>Our Commitment</h3>
          <p>
          A medical shop's commitment is to provide essential medications, healthcare products, and services with accuracy, efficiency, and empathy. Ensuring availability of quality drugs, offering professional advice, and respecting patient privacy are integral. Upholding ethical standards, fostering trust, and promoting community well-being are paramount in their dedication to health.
          </p>
        </div>
        <div className="about-info">
          {/* <h3>Our Range of Products</h3>
          <p>
            Explore our diverse range of products, including personal care items, health supplements, herbal remedies, food and beverages, and more. Each product is carefully selected, adhering to Ayurvedic principles and crafted with the utmost care to enhance your well-being naturally.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
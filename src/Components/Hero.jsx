import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const heroSection = document.querySelector('.hero-section');
    const rect = heroSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero-section bg-gradient-to-r from-blue-500 to-blue-400 text-white py-20 px-6 text-center min-h-screen flex flex-col justify-center items-center space-y-8">
      {/* Main Heading */}
      <h1
        className={`text-4xl md:text-6xl font-bold mb-4 opacity-0 transform transition-all duration-1000 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'translate-y-6'
        }`}
      >
        Discover the Best Book Summaries
      </h1>

      {/* Subheading */}
      <p
        className={`text-lg md:text-xl mb-6 opacity-0 transform transition-all duration-1000 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'translate-y-6'
        }`}
      >
        Unlock key insights from thousands of books in just minutes.
      </p>

      {/* Additional Text */}
      <div className="space-y-6">
        <p
          className={`text-lg md:text-xl opacity-0 transform transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'translate-y-6'
          }`}
        >
          Don't have the time to read long books? We have the perfect solution!
        </p>
        <p
          className={`text-lg md:text-xl opacity-0 transform transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'translate-y-6'
          }`}
        >
          Our expertly crafted summaries provide you with the essential ideas and key takeaways.
        </p>
        <p
          className={`text-lg md:text-xl opacity-0 transform transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'translate-y-6'
          }`}
        >
          Whether you're a busy professional or an avid learner, our summaries are here to help you grow.
        </p>
        <p
          className={`text-lg md:text-xl opacity-0 transform transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'translate-y-6'
          }`}
        >
          Join our community and start unlocking knowledge today!
        </p>
      </div>

      {/* Call to Action Button */}
      <button className="px-8 py-3 bg-white text-indigo-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all">
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;

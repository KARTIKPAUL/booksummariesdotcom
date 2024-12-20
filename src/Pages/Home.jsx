import React, { useEffect, useState } from 'react';
import HeroSection from '../Components/Hero';


const Home = () => {
  

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Explore by Categories
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-500 mb-4">
              Self-Help
            </h3>
            <p className="text-gray-600">
              Find practical strategies to improve your life and achieve your goals.
            </p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-500 mb-4">
              Business
            </h3>
            <p className="text-gray-600">
              Gain insights into strategies, leadership, and innovation.
            </p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-500 mb-4">
              Fiction
            </h3>
            <p className="text-gray-600">
              Dive into captivating stories from classic and modern literature.
            </p>
          </div>
        </div>
      </div>

      {/* Popular Books Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Popular Books
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Book Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Book Cover"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                The 7 Habits of Highly Effective People
              </h3>
              <p className="text-gray-600">
                Learn the principles of effectiveness that lead to success.
              </p>
            </div>

            {/* Book Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Book Cover"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Atomic Habits
              </h3>
              <p className="text-gray-600">
                Discover how small changes can lead to remarkable results.
              </p>
            </div>

            {/* Book Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Book Cover"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                To Kill a Mockingbird
              </h3>
              <p className="text-gray-600">
                A classic story of justice, morality, and courage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-indigo-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Journey Today!</h2>
        <p className="text-lg mb-6">
          Join thousands of readers who are discovering the world’s best books.
        </p>
        <button className="px-8 py-3 bg-white text-indigo-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100">
          Browse Summaries
        </button>
      </div>
    </div>
  );
};

export default Home;

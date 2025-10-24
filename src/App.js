import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const tabContent = {
    about: `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,

    experiences: `I have extensive experience in sales and customer relationship management. Throughout my career at Salesforce, I've helped numerous clients achieve their business goals through innovative CRM solutions.

My expertise includes customer onboarding, technical demonstrations, solution architecture, and long-term relationship management. I've consistently exceeded my sales targets and received recognition for customer satisfaction.`,

    recommended: `Here are some recommendations from my colleagues and clients:

"Dave is an exceptional sales professional who truly understands customer needs." - Client Testimonial

"Working with Dave has been a pleasure. His technical knowledge and communication skills are outstanding." - Team Lead

I'm always happy to connect and share insights about CRM solutions and sales strategies.`
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      images.push(galleryImages[(currentImageIndex + i) % galleryImages.length]);
    }
    return images;
  };

  return (
    <div className="app">
      <div className="left-half"></div>

      <div className="right-half">
        {/* About Me Widget */}
        <div className="widget about-widget">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About Me
            </button>
            <button 
              className={`tab ${activeTab === 'experiences' ? 'active' : ''}`}
              onClick={() => setActiveTab('experiences')}
            >
              Experiences
            </button>
            <button 
              className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
              onClick={() => setActiveTab('recommended')}
            >
              Recommended
            </button>
          </div>

          <div className="tab-content">
            <p>{tabContent[activeTab]}</p>
          </div>
        </div>

        {/* Gallery Widget */}
        <div className="widget gallery-widget">
          <div className="gallery-header">
            <button className="gallery-title">Gallery</button>
            <div className="gallery-controls">
              <button className="add-image-btn">+ ADD IMAGE</button>
              <button className="arrow-btn" onClick={prevImage}>←</button>
              <button className="arrow-btn" onClick={nextImage}>→</button>
            </div>
          </div>

          <div className="gallery-grid">
            {getVisibleImages().map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

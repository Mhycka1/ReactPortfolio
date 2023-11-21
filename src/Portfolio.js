import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem'; 
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioData = [
    {
      title: 'Wikipedia Chatbot',
      description: 'A chatbot/search engine that will web scrape Wikipedia for information on any subject you type in that it does not already have stored data on',
      imageSrc: 'No picture yet',
    },
    {
      title: 'Honeypot Research Project',
      description: 'A proof of concept honeypot that aimed to determine how the amount of data within a database would effect attacker persistance.',
      imageSrc: 'No picture yet',
    },
  ];

  return (
    <div className="content-container">
      <div className="title-box">
        <h1 className="blue-titles">A little bit about me</h1>
      </div>
      <div className="info-box">
        <p className="blue-titles">
          I am a student at the University of Maryland, College Park, enrolled in the ACES (Advanced Cybersecurity Experience for Students) Honors Living Learning Program, studying Computer Science. As someone fascinated by the digital world that has become a mainstay in our everyday way of life, I am striving to learn as much as I can within the cybersecurity and software development fields in order to become a part of the future and leave my own mark on the world.
        </p>
      </div>
      <PortfolioItem data={portfolioData} />
      <Link to="/links">
        <button id="click-button">Check out my links</button>
      </Link>
    </div>
  );
};

export default Portfolio;
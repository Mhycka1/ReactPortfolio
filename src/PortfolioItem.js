
import React from 'react';

const PortfolioItem = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="portfolio-item">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.imageSrc} alt={item.title} width="500" height="700" />
        </div>
      ))}
    </div>
  );
};

export default PortfolioItem;
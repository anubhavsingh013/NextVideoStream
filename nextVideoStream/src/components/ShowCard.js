import React from 'react';
import './ShowCard.css'; 

const ShowCard = ({ show }) => {
  
  return (
    <div className="show-card">
      <img src={show.imageUrl} alt={show.title} className="show-image" />
      <div className="show-info">
        <h2>{show.title}</h2>
        <h3>Rating:{show.rating}</h3>
        <h4>Price($): {show.price}</h4>
        <div className="show-vendor">
          <h2>{show.platformName}</h2> 
        </div>
      </div>
    </div>
  );
};

export default ShowCard;


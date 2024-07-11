import React, { useState } from 'react';
import './CardList.css';

const CardList = ({ cardsData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cardsData.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card-list-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="card-list">
        {filteredCards.map(card => (
          <div key={card.id} className="card" onClick={() => window.open(card.link, '_blank')}>
            <div className='card-header'>
            <img src={card.image} alt={card.title} className="card-image" />
            <h2>{card.title}</h2>
            </div>

            <div className="card-content">
              <h3>{card.title}</h3>
              <p className='descriptions'>{card.description}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;

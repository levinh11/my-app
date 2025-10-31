// Trong ObjectCard.jsx
import React from 'react';
import anh1 from '../../public/images/anh1.png';
import anh2 from '../../public/images/anh2.png';
import anh3 from '../../public/images/anh3.png';

const ObjectCard = ({ object }) => {
  const getImage = (id) => {
    switch(id) {
      case 1: return anh1;
      case 2: return anh2;
      case 3: return anh3;
      default: return anh1;
    }
  };

  return (
    <div className="object-card">
      <img 
        src={getImage(object.id)} 
        alt={object.title}
        className="object-image"
      />
      <h3>{object.title}</h3>
      <p>{object.description}</p>
    </div>
  );
};

export default ObjectCard;
import React from 'react';
import ObjectCard from './ObjectCard';
import objectsData from '../data/objects.json';

const ObjectList = () => {
  return (
    <div className="objects-grid">
      {objectsData.map(object => (
        <ObjectCard key={object.id} object={object} />
      ))}
    </div>
  );
};

export default ObjectList;
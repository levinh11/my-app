import React from 'react';

const SubjectCard = ({ subject }) => {
  return (
    <div className="subject-card">
      <img 
        src={subject.image} 
        alt={subject.subject}
        className="subject-image"
      />
      <h3>{subject.subject}</h3>
      <p>{subject.description}</p>
    </div>
  );
};

export default SubjectCard;
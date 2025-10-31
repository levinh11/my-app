import React from 'react';
import SubjectCard from './SubjectCard';
import subjectsData from '../data/subjects.json';

const SubjectList = () => {
  return (
    <div className="subjects-grid">
      {subjectsData.map(subject => (
        <SubjectCard key={subject.id} subject={subject} />
      ))}
    </div>
  );
};

export default SubjectList;
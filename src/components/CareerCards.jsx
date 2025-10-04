import React from 'react';

function CareerCards({ careers }) {
  if (!careers || careers.length === 0) {
    return <p>No recommendations found. Try a different skill!</p>;
  }

  return (
    <div>
      {careers.map((career, index) => (
        <div className='card' key={index}>
          <h3>{career}</h3>
          <p>Explore roles, skills, and paths to become a {career}.</p>
        </div>
      ))}
    </div>
  );
}

export default CareerCards;

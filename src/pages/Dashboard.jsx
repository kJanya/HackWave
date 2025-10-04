import React, { useState } from 'react';
import SkillInput from '../components/SkillInput';
import CareerCards from '../components/CareerCards';

function Dashboard() {
  const [careers, setCareers] = useState([]);

  const handleSearch = async (skill) => {
    try {
      const res = await fetch('/mockdata.json');
      const data = await res.json();
      if (data.skills[skill]) {
        setCareers(data.skills[skill]);
      } else {
        setCareers([]);
      }
    } catch (error) {
      console.error('Error loading mock data:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Discover Careers Tailored to Your Skills</h2>
      <SkillInput onSearch={handleSearch} />
      <CareerCards careers={careers} />
    </div>
  );
}

export default Dashboard;

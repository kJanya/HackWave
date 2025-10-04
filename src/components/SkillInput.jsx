import React, { useState } from 'react';

function SkillInput({ onSearch }) {
  const [skill, setSkill] = useState('');

  const handleSearch = () => {
    if (skill.trim()) {
      onSearch(skill.toLowerCase());
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <input
        type='text'
        placeholder='Enter a skill (e.g. python, design, marketing)'
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button onClick={handleSearch}>Find Careers</button>
    </div>
  );
}

export default SkillInput;

import React from 'react';

export default function Skills(){
  const skills = [
    'Python', 'Java', 'C++', 'JavaScript', 'React', 'Flask', 'MongoDB', 'SQL', 'Docker', 'AWS (basics)'
  ];
  return (
    <section className="page">
      <h2>Skills</h2>
      <div className="grid">
        <div>
          <h3>Programming</h3>
          <ul>{skills.slice(0,5).map(s => <li key={s}>{s}</li>)}</ul>
        </div>
        <div>
          <h3>Tools & Platforms</h3>
          <ul>{skills.slice(5).map(s => <li key={s}>{s}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

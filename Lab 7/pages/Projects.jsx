import React from 'react';

const projects = [
  {id:1, name:'Travel Planner (Travel XPlore)', tech:'Flask, React, MongoDB'},
  {id:2, name:'Trading Alert System (Scout Pulse)', tech:'Python, Selenium, yFinance'},
  {id:3, name:'Phishing Website Detection', tech:'Python, Docker, Flask'}
];

export default function Projects(){
  return (
    <section className="page">
      <h2>Projects</h2>
      <ul>
        {projects.map(p => (
          <li key={p.id}><strong>{p.name}</strong> — <em>{p.tech}</em></li>
        ))}
      </ul>
    </section>
  );
}

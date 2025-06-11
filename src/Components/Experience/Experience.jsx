import React, { useState } from 'react';
import './Experience.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import experience_data from '../../assets/experience_data';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="experience" className="experience">
      <div className="experience-title">
        <h1> Experience</h1>
       {/*  <img src={theme_pattern} alt="Pattern" /> */}
      </div>

      <div className="experience-container">
        {experience_data.map((exp, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div className="experience-card" key={index}>
              <h3
                className="gradient-text role-link"
                onClick={() => window.open(exp.certificate_link, '_blank')}
              >
                {exp.role}
              </h3>
              <p><strong>{exp.company}</strong></p>
              <p>{exp.duration}</p>

              <p className={`description ${isExpanded ? 'expanded' : 'collapsed'}`}>
                {exp.description}
              </p>

              {exp.description.length > 0 && (
                <button
                  className="read-more-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(index);
                  }}
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

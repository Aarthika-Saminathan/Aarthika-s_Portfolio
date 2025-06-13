import React, { useState } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);

  const projectsToShow = showAll ? mywork_data : mywork_data.slice(0, 3);

  return (
    <div id="projects" className="mywork">
      <div className="mywork-title">
        <h1>Projects</h1>
      </div>

      <div className="mywork-container">
        {projectsToShow.map((work, index) => (
          <div key={index} className="project-card">
            <a href={work.w_link || '#'} target="_blank" rel="noopener noreferrer">
              <img src={work.w_img} alt={`Work ${index + 1}`} className="project-image" />
            </a>
            <h3 className="project-title">{work.title}</h3>
            <p className="project-description">{work.description}</p>
            {work.tech && (
              <div className="tech-tags">
                {work.tech.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {mywork_data.length > 3 && (
        <div className="mywork-showmore" onClick={() => setShowAll(!showAll)}>
          <p>{showAll ? 'Show Less' : 'Show More'}</p>
          <img
            src={arrow_icon}
            alt="Arrow Icon"
            style={{
              transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MyWork;

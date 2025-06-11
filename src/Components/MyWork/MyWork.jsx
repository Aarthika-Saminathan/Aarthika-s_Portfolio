import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine projects to show based on toggle
  const projectsToShow = showAll ? mywork_data : mywork_data.slice(0, 3);

  return (
    <div id="projects" className="mywork">
      <div className="mywork-title">
        <h1>Projects</h1>
        {/* <img src={theme_pattern} alt="Theme Pattern" /> */}
      </div>

      <div className="mywork-container">
        {projectsToShow.map((work, index) => (
          <a
            key={index}
            href={work.w_link || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={work.w_img} alt={`Work ${index + 1}`} />
          </a>
        ))}
      </div>

      {mywork_data.length > 3 && (
        <div
          className="mywork-showmore"
          onClick={() => setShowAll(!showAll)}
          style={{ cursor: 'pointer' }}
        >
          <p>{showAll ? 'Show Less' : 'Show More'}</p>
          <img
            src={arrow_icon}
            alt="Arrow Icon"
            style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
          />
        </div>
      )}
    </div>
  );
};

export default MyWork;

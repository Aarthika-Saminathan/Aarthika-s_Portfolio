import React from 'react';
import './About.css';
import profile_img from '../../assets/resumeimg.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-section">
        {/* LEFT SIDE: All text content */}
        <div className="about-left">

          {/* Typewriter Section */}
          <h1 className="about-heading">
            <span>I'm Aarthika,</span>{' '}
            a{' '}
            <span className='animated-text'>
              <Typewriter
                words={['Web Developer', 'Python Developer', 'Data Analyst']}
                loop={0} // infinite loop
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          {/* Paragraph */}
          <div className="about-para">
            <p>
              I’m Aarthika, a passionate web developer skilled in frontend and backend technologies like JavaScript, React JS, Django, AWS, and MySQL. I create responsive, user-friendly web applications focused on delivering seamless user experiences.
            </p>
          </div>

          {/* Buttons */}
          <div className='about-buttons'>
            <div className='about-connect-btn'>
              <AnchorLink className='anchor-link' offset={50} href="#contact">
                Connect With Me
              </AnchorLink>
            </div>
            <div className="about-resume-btn">
              <a
                href="/Aarthika_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                Check Resume
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Image only */}
        <div className="about-right">
          <div className="profile-img-wrapper">
            <img src={profile_img} alt="Profile" className="profile-img" />
            <div className="sprinkles">
              <span className="sprinkle" style={{ top: '10%', left: '20%' }}></span>
              <span className="sprinkle" style={{ top: '40%', left: '70%' }}></span>
              <span className="sprinkle" style={{ top: '75%', left: '30%' }}></span>
              <span className="sprinkle" style={{ top: '20%', left: '85%' }}></span>
              <span className="sprinkle" style={{ top: '60%', left: '10%' }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

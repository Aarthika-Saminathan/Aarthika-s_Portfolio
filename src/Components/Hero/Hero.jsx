import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <h1>
        <span>I'm Aarthika,</span>{' '}
        a{' '}
        <span className='animated-text'>
          <Typewriter
            words={['Web Developer', 'Python Developer', 'Data Analyst']}
            loop={0}        // Infinite loop
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

     

      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
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
  );
};

export default Hero;

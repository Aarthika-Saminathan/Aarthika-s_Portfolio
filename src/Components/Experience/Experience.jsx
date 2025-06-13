import React from "react";
import "./Experience.css";
import web from "../../assets/web.jpg";
import digital_marketting from "../../assets/digital_marketting.jpg";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">Experience</h2>
      {/* Uncomment below if you want a subheading */}
      {/* <p className="experience-subheading">
        My work experience as a software engineer and digital marketing intern across multiple organizations.
      </p> */}

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {/* Web Developer Experience */}
        <div className="timeline-entry right">
          <div className="timeline-card">
            <div className="experience-header">
              {/* <FaGraduationCap className="experience-icon" /> */}
              <div>
                <h3 className="role">Web Developer Intern</h3>
                <p className="company">Zeckho IT Services</p>
                <p className="duration">April 2024 – April 2025</p>
              </div>
            </div>
            <p className="description">
              Developed dynamic and responsive web pages using React.js, HTML, CSS, and JavaScript.
              Integrated APIs and managed state using React hooks. Built UIs for projects like Dez Art and Zaaz Events.
            </p>
          </div>
          <div className="timeline-icon-wrapper">
            <div className="timeline-circle">
              <img src={web} alt="Web Development" />
            </div>
            <p className="date-on-right">April 2024 – April 2025</p>
          </div>
        </div>

        {/* Digital Marketing Experience */}
        <div className="timeline-entry left">
          <div className="timeline-card">
            <div className="experience-header">
              {/* <FaGraduationCap className="experience-icon" /> */}
              <div>
                <h3 className="role">Digital Marketing Intern</h3>
                <p className="company">Zeckho IT Services</p>
                <p className="duration">April 2024-April 2025</p>
              </div>
            </div>
            <p className="description">
              Handled social media marketing, SEO, and ad campaigns for small businesses.
              Created content, tracked metrics, and improved brand visibility.
            </p>
          </div>
          <div className="timeline-icon-wrapper">
            <div className="timeline-circle">
              <img src={digital_marketting} alt="Digital Marketing" />
            </div>
            <p className="date-on-left">April 2024-April 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import "./Skills.css";

const customIcons = {
  django: "https://cdn.worldvectorlogo.com/logos/django.svg",
  powerbi: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Microsoft_Power_BI_Logo.svg",
  dax: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Microsoft_Power_BI_Logo.svg",
  etl: "https://cdn-icons-png.flaticon.com/512/3046/3046120.png",
  datavisualization: "https://cdn-icons-png.flaticon.com/512/1161/1161453.png",
  netlify: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Netlify_logo.svg",
  postman: "https://cdn.worldvectorlogo.com/logos/postman.svg",
  canva: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Canva_Logo.svg",
  drawio: "https://cdn.worldvectorlogo.com/logos/draw-io.svg",
  slack: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
  microsoft365: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Microsoft_Office_Logo_%282019%E2%80%93present%29.svg",
};

const skills = {
  Frontend: [
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React Js", icon: "react" },
    { name: "Bootstrap", icon: "bootstrap" },
  ],
  "Backend & Cloud": [
    { name: "Django", icon: "django" },
    { name: "MySQL", icon: "mysql" },
    { name: "AWS", icon: "amazonwebservices" },
  ],
  "Business Intelligence": [
    { name: "Power BI", icon: "powerbi" },
    { name: "DAX Query", icon: "dax" },
    { name: "Microsoft Excel", icon: "microsoft" },
    { name: "ETL", icon: "etl" },
    { name: "Data Visualization", icon: "datavisualization" },
  ],
  Others: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Netlify", icon: "netlify" },
    { name: "VS Code", icon: "vscode" },
    { name: "Postman", icon: "postman" },
    { name: "Canva", icon: "canva" },
  ],
};

const getIconUrl = (iconName) => {
  if (!iconName) return null;
  const key = iconName.toLowerCase();
  if (customIcons[key]) {
    return customIcons[key];
  }
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${key}/${key}-original.svg`;
};

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <h1 className="skills-heading">Skills</h1>

      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList]) => (
          <div className="skill-card" key={category}>
            <h2 className="skill-title">{category}</h2>
            <div className="skill-list">
              {skillList.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  {skill.icon && (
                    <img
                      src={getIconUrl(skill.icon)}
                      alt={skill.name}
                      className="skill-icon"
                      loading="lazy"
                    />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/resumeimg.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
    <div className="about-title">
<h1>About Me</h1>
{/* <img src={theme_pattern} alt="" /> */}
    </div>
    <div className="about-section">
        <div className="about-left">
<div className="profile-img-wrapper">
  <img src={profile_img} alt="Profile" className="profile-img" />
  <div className="sprinkles">
    {/* We'll create several sprinkle dots */}
    <span className="sprinkle" style={{top: '10%', left: '20%'}}></span>
    <span className="sprinkle" style={{top: '40%', left: '70%'}}></span>
    <span className="sprinkle" style={{top: '75%', left: '30%'}}></span>
    <span className="sprinkle" style={{top: '20%', left: '85%'}}></span>
    <span className="sprinkle" style={{top: '60%', left: '10%'}}></span>
  </div>
</div>



        </div>
        
        <div className="about-right">
           <div className="about-para">
         <p>
I’m Aarthika, a passionate web developer skilled in frontend and backend technologies like JavaScript, React JS, Django, AWS, and MySQL. I create responsive, user-friendly web applications focused on delivering seamless user experiences. 
</p>

           
           </div>
   

        <div className="about-skills">
            <div className="about-skill">
                <p>html</p><hr style={{width: "100%"}} />
                
            </div>
            <div className="about-skill">
                <p>css</p><hr style={{width: "80%"}} />
                
            </div>
            <div className="about-skill">
                <p>js</p><hr style={{width: "75%"}} />
                
            </div>
            <div className="about-skill">
                <p>react</p><hr style={{width: "70%"}} />
                
            </div>
            <div className="about-skill">
                <p>Django</p><hr style={{width: "70%"}} />
                
            </div>
            </div>
        </div>


        </div>

  {/*       <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>years of experience</p>
            </div>
            <hr />

            <div className="about-achievement">
                <h1>90+</h1>
                <p>projects completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>happy clients</p>
            </div>
            
            


        </div> */}
    </div>
  )
}

export default About
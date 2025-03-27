import './index.css'
import {Link,Outlet} from 'react-router'
import logo from '../../assets/weblogo1.jpg'
import bodyimage from '../../assets/cdef.png'
import mypic from '../../assets/myimage.png'
import workOne from '../../assets/work-1.png'
import workTwo from '../../assets/work-2.png'
import workThree from '../../assets/work-3.png'
import workFour from '../../assets/watchespng.avif'
import workFive from '../../assets/miniprojects.avif'
import workSix from '../../assets/work-6.jpeg'
import { FaExternalLinkAlt } from "react-icons/fa";
import {Component} from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



class Body extends Component{
    state={isSkillsActive:true,isEducationActive:false,isProjectsActive:false}

    onClickSkills=()=>{
        this.setState({isSkillsActive:true,isEducationActive:false,isProjectsActive:false})
    }

    onClickEducation=()=>{
        this.setState({isSkillsActive:false,isEducationActive:true,isProjectsActive:false})
    }
    
    onClickProjects=()=>{
        this.setState({isSkillsActive:false,isEducationActive:false,isProjectsActive:true})
    }

    render(){
        const {isSkillsActive,isEducationActive,isProjectsActive}=this.state
        const skillClass=isSkillsActive?"activeSkill":""
        const educationClass=isEducationActive?"activeEducation":""
        const projectClass=isProjectsActive?"activeProject":""
        return(
            <div className='main-div' >
                <nav className='header-container' id="header" >
                    <button className='logo-btn' >Web <span className='logo-span' >Developer</span></button>
                    <ul className='header-btns' >
                        <li className='list-btn' > 
                            <a href="#header" ><button className='nav-btn' >Home</button></a>
                        </li>
                        <li className='list-btn'>
                            <a href="#about"><button className='nav-btn' >About</button></a>
                        </li>
                        <li className='list-btn'>
                            <a href="#portfolio" ><button className='nav-btn' >Portfolio</button></a>
                        </li>
                        <li className='list-btn'>
                            <a href="#contact" ><button className='nav-btn' >Contact</button></a>
                        </li>
                    </ul>
                </nav>
                <div className='body-container' >
                    <div className='text-box' >
                        <p>I'M</p>
                        <h1>HEMANTH</h1>
                        <h3>-I LIKE TO BUILD WEBSITES</h3>
                    </div>
                    <img src={bodyimage} className='body-png' alt="WEB DEVELOPMENT" />
                </div>
                <div className='about-me-container' id="about" >
                    <img src={mypic} alt="my-picture" className='my-png'/>
                    <div className='about-me' >
                        <h1 className='about-heading' >About Me</h1>
                        <p className='about-me-content'>I'm Hemanth</p>
                        <p className='about-me-description' >I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time. Currently, I am looking for new career opportunities.</p>
                        <div className='about-me-btns' >
                            <button className={`about-btn ${skillClass}`} type="button" onClick={this.onClickSkills} >Skills</button>
                            <button className={`about-btn ${educationClass}`}  type="button" onClick={this.onClickEducation}>Education</button>
                            <button className={`about-btn ${projectClass}`}  type="button" onClick={this.onClickProjects}>Projects</button>
                        </div>
                        {isSkillsActive&&<p className='skill-set'>FULL STACK WEB DEVELOPMENT</p>}
                        {isSkillsActive&&
                        <div className='display-content-about'>
                            <div className='languages' >
                                <p className='skill-item' ><span className='skill-item-span' >Front End Languages: </span>Htm,Css,Javascript,Bootstrap,React</p>
                                <p className='skill-item' ><span className='skill-item-span' >Back End Languages: </span>Python,Javascript,Express js,Node js</p>
                                <p className='skill-item' ><span className='skill-item-span' >Databases: </span>SqLite,MongoDb</p>
                                <p className='skill-item' ><span className='skill-item-span' >Tools: </span>Visual Studio Code,Postman,Github</p>
                                <p className='skill-item' ><span className='skill-item-span' >Hoisting Tools: </span>Netlify,Vercel</p> 
                                <p className='skill-item' ><span className='skill-item-span' >UI/UX Design Tools: </span>Figma,Photoshop</p>                                       
                            </div>
                        </div>}
                        {isEducationActive&&
                        <div className='education-container'>
                            <h1 className='education-heading' >EDUCATION</h1>
                            <div className='education-item'>
                                <p className='education'>CCBP Next Wave Program</p>
                                <p className='education-time-1' >2024-present</p>
                                <p className='grade' >100%</p>
                            </div>      
                            <div className='education-item'>
                                <p className='education'>Bachelor of Technology (B.Tech)</p>
                                <p className='education-time' >2020-2024</p>
                                <p className='grade' >78%</p>
                            </div>       
                            <div className='education-item'>
                                <p className='education'>Intermediate (11th & 12th)</p>
                                <p className='education-time-1' >2018-2020</p>
                                <p className='grade' >98%</p>
                            </div>       
                            <div className='education-item'>
                                <p className='education'>10th standard</p>
                                <p className='education-time-2' >2017-2018</p>
                                <p className='grade' >96%</p>
                            </div>  
                        </div>}
                    </div>
                </div>
                <div className='portfolio-container' id="portfolio" >
                    <h1 className='my-work' >MY WORK</h1>
                    <div className='my-work-images' >
                        <div className='work' >
                            <img src={workOne} alt="my work" className='work-png' />
                            <div className='layer' >
                                <h2 className='work-text' >Social Media Apps</h2>
                                <p className='work-description'>The app connects you to the talented people around the world</p>
                                <Link to="/socialmedia" className='link-x' ><FaExternalLinkAlt className='link-icon' /></Link>
                            </div>
                        </div>
                        <div className='work' >
                            <img src={workTwo} alt="my work" className='work-png' />
                            <div className='layer' >
                                <h2 className='work-text'>Music Apps</h2>
                                <p className='work-description'>The app connects you to the different songs & music around the world</p>
                                <FaExternalLinkAlt className='link-icon' />
                            </div>
                        </div>
                        <div className='work' >
                            <img src={workThree} alt="my work" className='work-png' />
                            <div className='layer' >
                                <h2 className='work-text'>Online Shopping Apps</h2>
                                <p className='work-description'>The app connects you to shop various items</p>
                                <FaExternalLinkAlt className='link-icon' />
                            </div> 
                        </div>
                        <div className='work' >
                            <img src={workFour} alt="my work" className='work-png' />
                            <div className='layer' >
                                <h2 className='work-text'>Online Watch Apps</h2>
                                <p className='work-description'>These apps help us in all watch related issues</p>
                                <Link to="/watch" className='link-x'><FaExternalLinkAlt className='link-icon' /></Link>
                            </div>
                        </div>
                        <div className='work' >
                            <img src={workFive} alt="my work" className='work-png' />
                            <div className='layer' >
                                <h2 className='work-text'>Minor Projects Show Case</h2>
                                <p className='work-description'>Projects are minor But helps in all major issues</p>
                                <Link to="/minorprojects" className='link-x'><FaExternalLinkAlt className='link-icon' /></Link>
                            </div>
                        </div>
                        <div className='work' >
                            <img src={workSix} alt="my work" className='work-png' />
                            <div className='layer' >
                                <h2 className='work-text'>My CCBP Journey</h2>
                                <p className='work-description'> Timeline and projects show case of my CCBP Journey</p>
                                <a href="https://hemanthTimeline.ccbp.tech" className='link-x'><FaExternalLinkAlt className='link-icon' /></a>
                            </div>
                        </div>
                    </div>                
                </div>
                <div className='contact' id="contact" >
                    <div className='contact-left' >
                        <h1 className='sub-title' >Contact Me</h1>
                        <p className='contact-send' ><span className='send-btn' ><IoIosSend className='send-icon' /></span>hemanthsure26@gmail.com</p>
                        <p className='contact-send' ><span className='send-btn' ><FaPhoneAlt className='send-icon' /></span>9390801586</p>
                        <div className='social-icons'>
                            <a href="//" className='social-media-icon' ><FaFacebook/></a>    
                            <a href="//" className='social-media-icon' ><FaTwitter/></a>
                            <a href="//" className='social-media-icon' ><FaInstagram/></a>
                            <a href="//" className='social-media-icon' ><FaLinkedin/></a>        
                        </div>
                        <a href={bodyimage} download className="btn btn2">Download CV</a>
                    </div>  
                    <div className="contact-right">
                        <form>
                            <input type="text" name="Name" placeholder="Your Name" required/>
                            <input type="email" name="email" placeholder="Your Email" required/>
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit"  className="btn btn2">Submit</button>
                        </form>
                    </div>               
                </div>
                <footer className='footer' ><p className='footer-content' > ---Made With </p> <FaHeart className='heart-icon' />---</footer>
                <Outlet/>
            </div>
        )
    }
    
}

export default Body
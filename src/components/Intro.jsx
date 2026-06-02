import React from 'react'
import { FaGithub, FaLinkedin, FaArrowDown, FaMapMarkerAlt, FaEnvelope   } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const Intro = () => {
    return (
        <section className='intro-section'>
            <div className='intro-div1'>
                <h1>Karan Rana</h1>
                <h3>Full Stack Developer</h3>
                <p>Building responsive and engaging web applications with clean code and thoughtful design.
                    Focused on creating digital solutions that are fast, intuitive, and impactful.</p>

            </div>
            <div className='intro-div2'>
                <h3>You can See my works down</h3>
                <div className="social-links">
                    <a
                        href="https://github.com/rana-ji0001"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/karan-rana-a67b46350/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://leetcode.com/u/karan_rana01/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiLeetcode />
                    </a>
                </div>
            </div>
            <div className='intro-div3'>
                <h5>If You Wanna Know about me</h5>
                <h6><FaEnvelope />  karanrana705021@gmail.com</h6>
                <h6><FaMapMarkerAlt />  Delhi, 110094</h6>
                <div className='resume-div'>
                    <h3>Let's connect and create something impactful👇</h3>
                    <a href="/Resume.pdf" download className="resume-btn">
                        Resume
                    </a>
                </div>
            </div>
            <div className="scroll-down">
                <a href="#skills"><FaArrowDown /></a>
            </div>

        </section>
    )
}


export default Intro

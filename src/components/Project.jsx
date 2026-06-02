import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import nimbusnote from "../assets/nimbusnote.bmp";
import alinaAI from "../assets/alina-ai.png";
import textCustomizer from "../assets/textcustomizer.bmp";
import heartDisease from "../assets/heart-disease.jpeg";

const Project = () => {
  return (
    <section className='project-section'>
      <h1>Some Of The Works I Have Done</h1>
      <div className='p1'>
        <a
          href="https://github.com/rana-ji0001/NimbusNote"
          target="_blank"
          rel="noopener noreferrer">
          <img src={nimbusnote} alt="NimbusNote" className="p1-image" />
        </a>
        <div className='p1-desc'>
          <h2>NimbusNote</h2>
          <p>NimbusNote is a secure MERN-based note management application that helps users create, organize, and manage their personal notes with authentication and tagging support.</p>
          {/* <a href="YOUR_LIVE_LINK" target="_blank">Live Demo</a> */}
          <a href="https://github.com/rana-ji0001/NimbusNote" target="_blank"><FaGithub />Github</a>

        </div>
      </div>
      <div className='p1'>
        <a
          href="https://github.com/rana-ji0001/Alina-AI"
          target="_blank"
          rel="noopener noreferrer">
          <img src={alinaAI} alt="Alina AI" className="p1-image" />
        </a>
        <div className='p1-desc'>
          <h2>Alina-AI</h2>
          <p>ALIna AI is a Python-based voice assistant that uses speech recognition technology to listen to a user's voice, convert spoken words into text, and process commands in real time.</p>
          {/* <a href="YOUR_LIVE_LINK" target="_blank">Live Demo</a> */}
          <a href="https://github.com/rana-ji0001/Alina-AI" target="_blank"><FaGithub />Github</a>

        </div>
      </div>
      <div className='p1'>
        <a
          href="https://rana-ji0001.github.io/TextCustomizer/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={textCustomizer} alt="TextCustomizer" className="p1-image" />
        </a>
        <div className='p1-desc'>
          <h2>TextCustomizer</h2>
          <p>TextCustomizer is a web-based text transformation tool that helps users quickly modify and format text in different styles.
            It provides multiple text customization options, making it useful for content creators, students, developers, and anyone who frequently works with text.</p>
          <a href="https://rana-ji0001.github.io/TextCustomizer/" target="_blank">Live Demo</a>
          <a href="https://github.com/rana-ji0001/TextCustomizer" target="_blank"><FaGithub />Github</a>

        </div>
      </div>
      <div className='p1'>
        <a
          href="https://github.com/rana-ji0001/Heart-Disease-Prediction"
          target="_blank"
          rel="noopener noreferrer">
          <img src={heartDisease} alt="Heart Disease Prediction" className="p1-image" />
        </a>
        <div className='p1-desc'>
          <h2>Heart-Disease-Perdiction</h2>
          <p>Heart Disease Prediction is a machine learning-based healthcare application that predicts whether a person is at risk of heart 
          disease based on various medical parameters such as age, blood pressure, cholesterol levels, chest pain type, heart rate, and other health indicators.</p>
          {/* <a href="YOUR_LIVE_LINK" target="_blank">Live Demo</a> */}
          <a href="https://github.com/rana-ji0001/Heart-Disease-Prediction" target="_blank"><FaGithub />Github</a>

        </div>
      </div>
    </section>
  )
}

export default Project

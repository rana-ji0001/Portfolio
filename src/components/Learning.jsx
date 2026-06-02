import { FaBrain, FaCode, FaLaptopCode } from "react-icons/fa";

const Learning = () => {
  return (
    <section className="learning-section">
      <h1>Currently Exploring</h1>
      <p className="learning-subtitle">
        Things keeping me busy and helping me grow as a developer.
      </p>

      <div className="learning-container">
        <div className="learning-card">
          <FaBrain className="learning-icon" />
          <h3>Learning AI</h3>
          <p>
            Exploring LLMs, AI tools, prompt engineering, and integrating AI
            into real-world web applications.
          </p>

          <div className="tags">
            <span>AI</span>
            <span>LLMs</span>
            <span>Python</span>
          </div>
        </div>

        <div className="learning-card">
          <FaCode className="learning-icon" />
          <h3>Doing DSA</h3>
          <p>
            Solving problems in Java and improving algorithmic thinking for
            interviews and competitive programming.
          </p>

          <div className="tags">
            <span>Java</span>
            <span>Arrays</span>
            <span>Trees</span>
            <span>Graphs</span>
          </div>
        </div>

        <div className="learning-card">
          <FaLaptopCode className="learning-icon" />
          <h3>Building Full Stack Apps</h3>
          <p>
            Creating scalable MERN applications with authentication, APIs,
            databases, and modern UI experiences.
          </p>

          <div className="tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
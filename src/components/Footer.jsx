import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-left">
        <h2>Karan Rana</h2>

        <p>
          Building scalable web applications, solving problems,
          and exploring the world of AI one project at a time.
        </p>

        <p className="footer-quote">
          "Code. Learn. Build. Repeat."
        </p>
      </div>

      <div className="footer-center">
        <h3>Quick Links</h3>

        <a href="#top">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="/Resume.pdf" target="_blank">
          Resume
        </a>
      </div>

      <div className="footer-right">
        <h3>Connect</h3>

        <a href="https://github.com/rana-ji0001" target="_blank">
          <FaGithub /> GitHub
        </a>

        <a href="https://www.linkedin.com/in/karan-rana-a67b46350/" target="_blank">
          <FaLinkedin /> LinkedIn
        </a>

        <a href="karanrana705021@gmail.com">
          <FaEnvelope /> Email
        </a>
      </div>

    </footer>
  );
};

export default Footer;
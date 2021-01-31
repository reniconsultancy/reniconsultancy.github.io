import { Link } from "react-router-dom";

function Footer() {
    return (
      <div>
        <div className="row navy bottom">
          <div className="column disappear">
            <div><h4>Connect</h4></div>
            <div><a href="https://twitter.com/RENILLC">Twitter</a></div>
            <div><a href="https://www.linkedin.com/company/reni-consultancy/about/">LinkedIn</a></div>
          </div>
          <div className="column">
            <div><h4>What We Do</h4></div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/contact">Contact</Link></div>
          </div>
          <div className="column">
            <div><h4>Work With Us</h4></div>
            <div><Link to="/services">Services</Link></div>
            <div><Link to="/mentorship">Mentorship</Link></div>
          </div>
        </div>

        <div id="credit">
            <div>Made with 🤍 by the <a href="//https://github.com/reniconsultancy">RENI Team</a></div>
        </div>

      </div>
    );
  }
  
  export default Footer;
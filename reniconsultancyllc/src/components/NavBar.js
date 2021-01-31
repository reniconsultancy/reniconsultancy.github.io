import { Link } from "react-router-dom";
import Reni from "../assets/reni.png";

function NavBar() {
    return (
      <div className="row" id="navbar"> 
        <div className="column">
          <Link to="/"><img src={Reni} style={{width: "150px"}}/></Link> 
        </div>
        <div className="column" style={{textAlign: "right"}}>
          <ul> 
            <li><Link to="/about">About</Link></li> 
            <li><Link to="/services">Services</Link></li> 
            <li><Link to="/mentorship">Mentorship</Link></li> 
            <li><Link to="/contact">Contact</Link></li> 
          </ul>
        </div> 
      </div> 
    );
  }
  
  export default NavBar;
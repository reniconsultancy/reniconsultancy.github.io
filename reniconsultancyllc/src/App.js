import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Mentorship from "./pages/Mentorship";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

//import components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/mentorship" component={Mentorship}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={NoMatch}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

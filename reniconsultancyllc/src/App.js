import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.scss";

// import pages
import Home from "";
import About from "";
import Services from "";
import Mentorship from "";
import Contact from "";
import NoMatch from "";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/" component={About}/>
        <Route exact path="/" component={Services}/>
        <Route exact path="/" component={Mentorship}/>
        <Route exact path="/" component={Contact}/>
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';
import SideContent from './Static/SideContent'
import MainContent from './Static/MainContent'
import Portfolio from './Static/Portfolio'
import Contact from './Static/Contact'
import Menubar from './Static/Menubar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Menubar />
      <SideContent />
      <Switch>
        <Route exact path="/">
          <MainContent />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

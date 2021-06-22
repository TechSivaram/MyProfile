import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const SideContent = React.lazy(() => import('./Static/SideContent'));
const MainContent = React.lazy(() => import('./Static/MainContent'));
const Portfolio = React.lazy(() => import('./Static/Portfolio'));
const Contact = React.lazy(() => import('./Static/Contact'));
const Menubar = React.lazy(() => import('./Static/Menubar'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>loading..</div>}>
        <Menubar />
      </Suspense>
      <Suspense fallback={<div>loading..</div>}>
        <SideContent />
      </Suspense>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<div>loading..</div>}>
            <MainContent />
          </Suspense>
        </Route>
        <Route path="/portfolio">
          <Suspense fallback={<div>loading..</div>}>
            <Portfolio />
          </Suspense>
        </Route>
        <Route path="/contact">
          <Suspense fallback={<div>loading..</div>}>
            <Contact />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

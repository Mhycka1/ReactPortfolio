import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Portfolio from './Portfolio';
import LinksPage from './LinksPage';

// Component for the Home page
const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link to="/learn-react" className="App-link">
        Learn React
      </Link>
    </header>
  </div>
);

// Component for the Learn React page
const LearnReact = () => (
  <div className="App">
    <header className="App-header">
      <h1>Learn React</h1>
      <p>Edit this page to provide information about learning React.</p>
    </header>
  </div>
);

// Component for the Links page
const Links = () => (
  <div>
    <h1>Here's all my links!</h1>
    <a href="https://github.com/Mhycka1" target="_blank" rel="noopener noreferrer">
      <button>My work</button>
    </a>
    <a href="https://www.linkedin.com/in/mhycka1" target="_blank" rel="noopener noreferrer">
      <button>Connect with me!</button>
    </a>
  </div>
);

// App component with routing
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/learn-react" component={LearnReact} />
        <Route path="/links" component={Links} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Blog from './components/blogs/index';
import HomePage from './components/home/index'
import Access from './components/access';
import About from './components/about';
import FAQ from './components/faq';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/access" component={Access} />
          <Route exact path="/about" component={ About } />
          <Route exact path="/frequently-asked-question" component={ FAQ } />

        </Switch>
      </Router>


    </div>
  );
}

export default App;

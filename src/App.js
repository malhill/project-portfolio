import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Home from './pages/home';

export default function App() {
  return (

    <Router>
      <div>
        <Header />
        <Route exact path='/home' component={Home} />
        <Route exact path="/" component={Home} />
        
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>

  );
}

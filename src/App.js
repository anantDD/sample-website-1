import React, { Component } from 'react';
import './assets/default.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainHeading from './components/MainHeading';
import MainContent from './components/MainContent';
import SameSeries from './components/SameSeries';     


class App extends Component {
  render() {
    return (
      <div className="App container-fluid px-0">
        <Header />
        <MainHeading />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;

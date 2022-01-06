import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Footer from './components/Footer'
import Routes from './router';
import { BrowserRouter } from 'react-router-dom';
import Places from './components/Places'
import Curator from './components/Curator'

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <BrowserRouter>
        <Routes />
        <Places />
        <Curator />
      </BrowserRouter>
    </div>
    <Footer />

  </div>
  ,
  document.getElementById('root')
);

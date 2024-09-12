// src/App.js
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Testimonial from './components/Testimonial';
import Convince from './components/Convince';
import FreeOffer from './components/FreeOffer';

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Testimonial />
      <Convince />
      <FreeOffer />
    </div>
  );
};

export default App;

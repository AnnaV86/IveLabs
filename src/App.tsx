import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';
import { Routing } from './app/routing';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  );
};

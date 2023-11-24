import { useState } from 'react'
import './App.css'
import './index.css'

import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import LoginForm from './pages/LogIn';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Jewelry from './pages/Jewelry';
import Hoodies from './pages/Hoodies';
import WalkInPage from './pages/Hoodie_WalkIn';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Jewelry />
      <Hoodies />
      <WalkInPage />
    </div>
  );
}

export default App;

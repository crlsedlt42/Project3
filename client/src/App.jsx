import { useState } from 'react'
import './App.css'
import './index.css'

import LoginForm from './components/LogIn';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Jewelry from './pages/Jewelry';
import Hoodies from './pages/Hoodies';
import WalkInPage from './pages/Hoodie_WalkIn';


function App() {
  return (
    <div className="App">
      <LoginForm />
      <Header />
      <HomePage />
      <Header />
      <Jewelry />
      <Header />
      <Hoodies />
      <Header />
      <WalkInPage />
    </div>
  );
}

export default App

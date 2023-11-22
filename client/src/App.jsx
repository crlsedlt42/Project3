import { useState } from 'react'
import './App.css'
import './index.css'

import LoginForm from './pages/LogIn';
import Header from './pages/Header';
import HomePage from './pages/HomePage';
import Jewelry from './pages/Jewelry';


function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
      <HomePage />
      <Jewelry />
    </div>
  );
}

export default App;

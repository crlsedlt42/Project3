import { useState } from 'react'
import './App.css'

import LoginForm from './components/LogIn';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
    </div>
  );
}

export default App

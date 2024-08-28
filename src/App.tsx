import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import logo from './logo.png';

function App() {
  return (
    <>
      <img src={logo} alt='Logo'></img>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

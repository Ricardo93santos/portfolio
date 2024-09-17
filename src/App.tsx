import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App: React.FC = () => {
  return (
    <div className='app_container'>
      <Header />
      <Main />
    </div>
  );
}

export default App;

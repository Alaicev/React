import React from 'react'
import './App.css';
import ContentBlock from './components/Content';
import Header from './components/Header';
import NavBar from './components/NavBar';


const App =() => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <ContentBlock />
    </div>
  );
};




export default App;

import React from 'react'
import './App.css';
import ContentBlock from './components/content/Content';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';


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

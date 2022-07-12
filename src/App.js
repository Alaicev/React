import React from 'react'
import './App.css';
import Profile from './components/content/Profile';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-components">
                    <Routes>
                        <Route path="/dialogs/*" element={
                            <DialogsContainer /> } />
                        <Route path="/" element={
                            <Profile/>} />
                        <Route path="/news" element={
                            <News />} />
                        <Route path="/music" element={
                            <Music />} />
                        <Route path="/settings" element={
                            <Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

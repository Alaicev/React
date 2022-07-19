import React from 'react'
import './App.css';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/content/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";



const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-components">
                    <Routes>
                        <Route path="/dialogs/*" element={
                            <DialogsContainer /> } />
                        <Route path="/:userId" element={
                            <ProfileContainer/>} />
                        <Route path="/news" element={
                            <News />} />
                        <Route path="/music" element={
                            <Music />} />
                        <Route path="/settings" element={
                            <Settings />} />
                        <Route path="/users" element={
                            <UsersContainer />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

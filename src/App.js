import React from 'react'
import './App.css';
import Profile from './components/content/Profile';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-components">
                    <Routes>
                        <Route path="/dialogs/*" element={
                            <Dialogs dialogs={props.state.messagesPage.dialogs}
                                     messages={props.state.messagesPage.messages}
                                     dispatch={props.dispatch}
                                     newMessage={props.state.messagesPage.newMessage}/> } />
                        <Route path="/" element={
                            <Profile newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch}
                                     posts={props.state.profilePage.posts}/>} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

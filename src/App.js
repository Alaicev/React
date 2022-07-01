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
import {changeNewPostText} from "./redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar nav={props.state.navBar.nav}/>
                <div className="app-wrapper-components">
                    <Routes>
                        <Route path="/dialogs/*" element={
                            <Dialogs dialogs={props.state.messagePage.dialogs}
                                     messages={props.state.messagePage.messages}/> } />
                        <Route path="/profile" element={
                            <Profile newPostText={props.state.profilePage.newPostText} addPost={props.addPost}
                                     posts={props.state.profilePage.posts}
                                     changeNewPostText={props.changeNewPostText}/>} />
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

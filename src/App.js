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
import Login from "./components/login/login";
import {connect} from "react-redux";
import {Initialize} from "./redux/app-peducer";
import Preloader from "./components/common/preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.Initialize()
    }


    render() {
        if (!this.props.isInitialised) {
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavBar/>
                    <div className="app-wrapper-components">
                        <Routes>
                            <Route path="/dialogs/*" element={
                                <DialogsContainer/>}/>
                            <Route path="/" element={
                                <ProfileContainer/>}>
                                <Route path=":userId" element={
                                    <ProfileContainer/>}/>
                            </Route>
                            <Route path="/news" element={
                                <News/>}/>
                            <Route path="/music" element={
                                <Music/>}/>
                            <Route path="/settings" element={
                                <Settings/>}/>
                            <Route path="/users" element={
                                <UsersContainer/>}/>
                            <Route path="/login" element={
                                <Login/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => ({
    isInitialised: state.appReducer.isInitialised
})

export default connect (mapStateToProps , {Initialize}) (App);

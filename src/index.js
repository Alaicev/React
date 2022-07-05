import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import StoreContext from "./storeContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
    let callSubscribe = (props) => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            <App/>
            </StoreContext.Provider>
            </React.StrictMode>
    );
}

callSubscribe(store.getState())
store.subscribe( callSubscribe )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


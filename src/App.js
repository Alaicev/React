import React from 'react'
import './App.css';
import AppContainer from "./AppContainer";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


const App =  props => {
 return (
     <div>
         <Provider store={store}>
         <AppContainer />
         </Provider>
     </div>
 )
}

export default App
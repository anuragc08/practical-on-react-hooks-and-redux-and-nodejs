// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import {createStore} from 'redux'
// import rootReducer from './Component/Reducer'
// import {Provider} from 'react-redux'
// import Test from "./Test"
//
// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
//
// // ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(<Provider store={store}><Test /></Provider>, document.getElementById('root'));
/////Crud app




import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from '../src/CrudApp/App'
import  App from './App'
// import path from "./images/image1.jpeg";
// let path= `./images/image1`;
// ReactDOM.render(<App  imgPath={path} h='100px' w='100px'  />, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';

import './styles/stylesheet.css';
import './styles/common.scss';
import './styles/document/document.scss';
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
    <HashRouter>
      <RecoilRoot>
        <App/>
      </RecoilRoot>
    </HashRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

  

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/header';
import {Container} from './container/container';
import Footer from './footer/footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <Header/>
    <Container/>
    <Footer/>
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter basename={process.env.PUBLIC_URL}>
    <Route exact path="" component={App} />
</BrowserRouter>
, document.getElementById('root'));
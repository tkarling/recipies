import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';

console.log("moi");

ReactDOM.render(
    <Application name="World"/>,
    document.getElementById('react-application')
);
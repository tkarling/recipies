import React from 'react';
import ReactDOM from 'react-dom';
import Application from './application';

console.log("moi");

ReactDOM.render(
    <Application name="World"/>,
    document.getElementById('react-application')
);
import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MaterialUIControllerProvider } from "../src/context";// "context";

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
//const container = document.getElementById("app");
//const root = createRoot(container);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <MaterialUIControllerProvider>

            <App />
        </MaterialUIControllerProvider>

    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

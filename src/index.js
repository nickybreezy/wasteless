import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider, createBrowserRouter
} from "react-router-dom"
import Map from './Map';
import BadgesPage from './BadgesPage';
import Scanner from './Scanner';
import HomePage from './HomePage'

const router = createBrowserRouter([
  {
    path: "/home", element: <HomePage />
  },
  {
    path: "/map", element: <Map />
  },
  {
    path: "/badges", element: <BadgesPage />
  },
  {
    path: "/scanner", element: <Scanner />

  },
  {
    path: "/", element: <App />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

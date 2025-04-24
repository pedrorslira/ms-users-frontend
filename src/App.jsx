import React from 'react';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

const App = () => (
  <div className="App">   
    <Routes />
    <ToastContainer position="top-right" autoClose={4000} />
  </div>
);

export default App;
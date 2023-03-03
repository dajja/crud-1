import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
function Router() {
  return (
    <BrowserRouter>
        <App></App>
        <Routes>
            <Route path='/' element={App}/>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router
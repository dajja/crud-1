import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Update from './components/Update';
function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='update/:id' element={<Update/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
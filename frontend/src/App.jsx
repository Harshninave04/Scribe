// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/user/Login.jsx';
import Register from './pages/user/Register.jsx';

function App() {
  return (
    <>
      {/* <div className="m-10 bg-gray-400">
        <h1 className="bg-blue-600 text-white p-5 text-3xl flex justify-center">Scribe</h1>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="Register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

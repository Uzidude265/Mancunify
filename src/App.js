import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

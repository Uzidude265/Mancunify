import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Dashboard from './pages/Dashboard.js';
import Charts from './pages/Charts.js';
import Friends from './pages/Friends.js';
import Account from './pages/Account.js';
import Profile from './pages/Profile.js';
import './App.css';

function App() {
  return (
    document.title = 'Test',
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="charts" element={<Charts/>} />
        <Route path="friends" element={<Friends/>} />
        <Route path="account" element={<Account/>} />
        <Route path="profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Dashboard from './pages/Dashboard.js';
import Charts from './pages/Charts.js';
import Friends from './pages/Friends.js';
import Account from './pages/Account.js';
import Profile from './pages/Profile.js';
import OTP from './pages/OTP.js';
import AccountCreation from './pages/AccountCreation.js';
import './App.css';
import Error404 from "./pages/404";
import Error403 from "./pages/403";
import Error429 from "./pages/429";
import Error500 from "./pages/500";
import Error502 from "./pages/502";

//  Code for the fancier OTP page
//  import OTPFancy from './pages/OTPFancy.js';
//  <Route path="otpfancy" element={<OTPFancy/>} />


function App() {
  return (
    document.title = 'Error',
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
        <Route path="otp" element={<OTP/>} />
        <Route path="create" element={<AccountCreation />} />
        <Route path='*' element={<Error404/>} />
        <Route path="403" element={<Error403/>} />
        <Route path="429" element={<Error429/>} />
        <Route path="500" element={<Error500/>} />
        <Route path="502" element={<Error502/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

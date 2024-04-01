import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Practice from './Pages/Practice/Practice';
import Rules from './Pages/Rules/Rules';
import NoPage from './Pages/NoPage';
import SiteNavbar from './Components/NavBar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <SiteNavbar />  
      <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

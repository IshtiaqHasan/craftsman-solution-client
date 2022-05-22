import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import AllItems from './Pages/Purchase/AllItems';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="allItems" element={<AllItems />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

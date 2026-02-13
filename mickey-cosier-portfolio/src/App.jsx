import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* The Navbar sits outside Routes so it is visible on EVERY page */}
      <Navbar />
      
      {/* The main content area that changes based on the URL */}
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
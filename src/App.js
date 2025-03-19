import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from './pages/Home';
import BikeBrands from './pages/BikeBrands';
import BrandModels from './pages/BrandModels';
import BikeComponents from './pages/BikeComponents';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://jamxvhedsdgwdgvjrznp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphbXh2aGVkc2Rnd2Rndmpyem5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyMDMzNDEsImV4cCI6MjA1Nzc3OTM0MX0.ANX6DjfBGaEkhxRXAEBBriRQLm2esd74ncrY7wA8g2Y");



function App() {

  return (
    // <div className="App">
    //   <Header />
    //   <Home />
    // </div>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bike-brands" element={<BikeBrands />} />
          <Route path="/brand-models" element={<BrandModels />} />
          <Route path="/bike-components" element={<BikeComponents />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

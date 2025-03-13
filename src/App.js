import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from './pages/Home';
import BikeBrands from './pages/BikeBrands';
import BikeComponents from './pages/BikeComponents';



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
          <Route path="/bike-components" element={<BikeComponents />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResturantDetails from './components/ResturantDetails';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resturant/:id' element={<ResturantDetails />} />
        </Routes>
        <Footer />
      </Router>


    </>
  );
}

export default App;

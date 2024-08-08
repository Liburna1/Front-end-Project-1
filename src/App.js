import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/shared/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

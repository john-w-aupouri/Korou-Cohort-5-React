import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import Todos from './pages/Todos';
import Weather from './pages/Weather';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

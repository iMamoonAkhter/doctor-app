import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AddressBar from './components/AddressBar';
import InfoBar from './components/InfoBar';
import Navbar from './components/Navbar';
import Experties from './pages/Experties';
import Reviews from './pages/Reviews';
import Slider from './components/Slider';
import { AppProvider } from './context/AppContext';
import BookAppointmentModal from './components/BookAppointmentModal';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
        <BrowserRouter>
          <AddressBar />
          <InfoBar />
          <Navbar />
          <Slider />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/expertise" element={<Experties />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BookAppointmentModal />
          <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

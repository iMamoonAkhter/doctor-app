import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AddressBar from './components/AddressBar';
import InfoBar from './components/InfoBar';
import Slider from './components/Slider';
import { AppProvider } from './context/AppContext';
import BookAppointmentModal from './components/BookAppointmentModal';
import AdminLayout from './pages/Admin/AdminLayout';
import Login from './pages/login/login';
import Experties from './pages/Experties';
import Reviews from './pages/Reviews';
import AdminHome from './pages/Admin/AdminHome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminAbout from './pages/Admin/AdminAbout';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Layout with AddressBar, InfoBar, and Slider */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/expertise" element={<Experties />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminLayout />}>
            <Route path="/admin-login" element={<Login />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/about" element={<AdminAbout />} />
          </Route>
        </Routes>
        <BookAppointmentModal />
      </BrowserRouter>
    </AppProvider>
  );
}

// New MainLayout component
const MainLayout = () => (
  <>
    <AddressBar />
    <InfoBar />
    <Navbar />
    <Slider />
    <Outlet /> {/* This renders the child routes */}
    <Footer />
  </>
);

export default App;

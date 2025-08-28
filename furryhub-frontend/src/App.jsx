import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PetsPage from "./pages/PetsPage";
import BookingPage from "./pages/BookingPage";
import BookingsList from "./pages/BookingList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/my-bookings" element={<BookingsList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import FamilyLaw from "./pages/FamilyLaw";
import CriminalLaw from "./pages/CriminalLaw";
import PropertyLaw from "./pages/PropertyLaw";
import CorporateLaw from "./pages/CorporateLaw";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/family-law" element={<FamilyLaw />} />
          <Route path="/criminal-law" element={<CriminalLaw />} />
          <Route path="/property-law" element={<PropertyLaw />} />
          <Route path="/corporate-law" element={<CorporateLaw />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
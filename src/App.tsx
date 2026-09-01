import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Decennale from './pages/Decennale';
import Auto from './pages/Auto';
import Mutuelle from './pages/Mutuelle';
import About from './pages/About';
import Contact from './pages/Contact';
import Devis from './pages/Devis';
import DevisDecennale from './pages/DevisDecennale';
import Admin from './pages/Admin';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import PolitiqueCookies from './pages/PolitiqueCookies';
import ConditionsGenerales from './pages/ConditionsGenerales';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/decennale" element={<Decennale />} />
            <Route path="/auto" element={<Auto />} />
            <Route path="/mutuelle" element={<Mutuelle />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/devis" element={<Devis />} />
            <Route path="/devis-decennale" element={<DevisDecennale />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/politique-cookies" element={<PolitiqueCookies />} />
            <Route path="/conditions-generales" element={<ConditionsGenerales />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

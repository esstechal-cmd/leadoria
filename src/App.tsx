import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ComparisonSection from './components/ComparisonSection';
import GuaranteesSection from './components/GuaranteesSection';
import TestimonialsSection from './components/TestimonialsSection';
import LeadForm from './components/LeadForm';
import UrgencySection from './components/UrgencySection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';
import Dashboard from './pages/Dashboard';

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ComparisonSection />
        <GuaranteesSection />
        <TestimonialsSection />
        <LeadForm />
        <UrgencySection />
        <FAQSection />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

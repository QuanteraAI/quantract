
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <div className="min-h-screen relative bg-[var(--color-brand-bg)] font-sans text-[var(--color-dark-text)] overflow-hidden flex flex-col">
      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none z-0 fixed" />

      <Navbar />

      <div className="flex-1 flex flex-col relative z-10 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

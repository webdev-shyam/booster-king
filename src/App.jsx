import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import ServiceCard from './components/Services';

function App() {
  return (
    <div className="min-h-screen retro-gradient text-white">
      <Header />
      <Hero />
      <Features />
      <ServiceCard />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
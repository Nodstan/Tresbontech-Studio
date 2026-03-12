/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AcademyPage from './pages/AcademyPage';
import DivisionCard from './components/DivisionCard';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ScrollToTop from './components/ScrollToTop';
import { GraduationCap, Code2 } from 'lucide-react';

// Temporary component for the home page content that isn't the hero
function HomeContent() {
  return (
    <>
      <HomePage />
      {/* Divisions Section */}
      <section id="divisions" className="py-24 bg-neutral-light/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-6">Who We Serve</h2>
            <p className="text-lg text-neutral-dark/70">
              Two distinct divisions, one unified standard of excellence. Whether you're a student aiming for the top or a business ready to scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div id="academy">
              <DivisionCard 
                title="Tresbontech Academy"
                subtitle="B2C Education & Mentorship"
                description="A supportive, warm environment dedicated to nurturing young minds. We provide comprehensive educational support tailored to individual learning styles."
                features={[
                  "Specialized programs for ages 5-17",
                  "Rigorous exam preparation",
                  "Dedicated university admissions support",
                  "Holistic mentorship approach"
                ]}
                icon={<GraduationCap size={32} />}
                color="primary"
                delay={0.1}
                linkTo="/academy"
              />
            </div>
            
            <div id="studio">
              <DivisionCard 
                title="Tresbontech Studio"
                subtitle="B2B Technology Solutions"
                description="A professional, strategic technology partner. We build robust digital solutions that help businesses streamline operations and accelerate growth."
                features={[
                  "Custom digital solutions for SMEs",
                  "Rapid MVP development for Startups",
                  "Strategic technology consulting",
                  "Scalable architecture design"
                ]}
                icon={<Code2 size={32} />}
                color="accent-green"
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      
      {/* CTA Section */}
      <section id="contact" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-100"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to grow?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join the Academy to unlock your educational potential, or start a project with the Studio to transform your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-neutral-light transition-all shadow-lg">
              Book a Discovery Call
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-body flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="*" element={<HomeContent />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

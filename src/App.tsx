import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AcademyPage from './pages/AcademyPage';
import CoursesPage from './pages/CoursesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import DivisionCard from './components/DivisionCard';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ScrollToTop from './components/ScrollToTop';
import { GraduationCap, Code2 } from 'lucide-react';
import StudioPage from './pages/StudioPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PortalPage from './pages/PortalPage';
import AdmissionsPage from './pages/AdmissionsPage';
import { AuthProvider } from './contexts/AuthContext';

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
                linkTo="/studio"
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
            <Link to="/contact" className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function AppLayout() {
  const location = useLocation();
  const isPortal = location.pathname.startsWith('/portal');

  return (
    <div className="min-h-screen bg-white font-body flex flex-col">
      {!isPortal && <Header />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/portal" element={<PortalPage />} />
          <Route path="*" element={<HomeContent />} />
          <Route path="studio" element={<StudioPage/>} />
          <Route path="about" element={<AboutPage/>} />
        </Routes>
      </main>

      {!isPortal && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppLayout />
      </Router>
    </AuthProvider>
  );
}
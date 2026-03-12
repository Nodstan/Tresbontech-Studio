import { GraduationCap, Code2, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-6">
              <Logo textColor="text-white" />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              A hybrid brand empowering the next generation through world-class education and building the future through innovative technology solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" size={20} /> Academy
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>Ages 5-17 Programs</li>
              <li>Exam Preparation</li>
              <li>University Support</li>
              <li>Mentorship</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <Code2 className="text-primary" size={20} /> Studio
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>Digital Solutions</li>
              <li>SME Services</li>
              <li>Startup MVP Build</li>
              <li>Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>123 Innovation Drive, Tech District, 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>hello@tresbontech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Tresbontech. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Empowering Minds. <br/>
              <span className="text-accent-yellow">Engineering Futures.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Tresbontech bridges the gap between potential and achievement. Through our Academy and Studio divisions, we deliver world-class education and cutting-edge digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="/academy" className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-neutral-light transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Explore Academy <ArrowRight size={20} />
              </a>
              <a href="#studio" className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Discover Studio
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

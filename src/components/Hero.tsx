import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-neutral-light/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-neutral-dark leading-tight mb-6">
            Empowering Minds. <br/>
            <span className="text-primary">Engineering Futures.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-dark/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tresbontech bridges the gap between potential and achievement. Through our Academy and Studio divisions, we deliver world-class education and cutting-edge digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Explore Academy <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-white text-neutral-dark border border-secondary px-8 py-4 rounded-full font-medium hover:bg-neutral-light/30 transition-all flex items-center justify-center gap-2">
              Discover Studio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

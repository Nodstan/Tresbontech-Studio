import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  linkText?: string;
  delay?: number;
  highlight?: boolean;
}

export default function CourseCard({ title, description, icon, linkText = "Learn More", delay = 0, highlight = false }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl p-8 border transition-all group relative overflow-hidden ${
        highlight 
          ? 'bg-primary text-white border-primary shadow-xl' 
          : 'bg-white text-neutral-dark border-secondary hover:border-primary hover:shadow-lg'
      }`}
    >
      {highlight && (
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-100 pointer-events-none"></div>
      )}
      
      <div className="relative z-10">
        {icon && (
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
            highlight ? 'bg-white/20 text-white' : 'bg-neutral-light text-primary'
          }`}>
            {icon}
          </div>
        )}
        
        <h3 className={`text-2xl font-heading font-bold mb-4 ${highlight ? 'text-white' : 'text-neutral-dark'}`}>
          {title}
        </h3>
        
        <p className={`mb-8 leading-relaxed ${highlight ? 'text-white/90' : 'text-neutral-dark/70'}`}>
          {description}
        </p>
        
        <button className={`font-medium flex items-center gap-2 group-hover:gap-3 transition-all ${
          highlight ? 'text-white' : 'text-primary'
        }`}>
          {linkText} <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}

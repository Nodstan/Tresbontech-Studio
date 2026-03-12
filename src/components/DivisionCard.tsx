import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface DivisionCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: ReactNode;
  color: 'primary' | 'accent-green' | 'accent-yellow' | 'accent-red';
  delay?: number;
  linkTo?: string;
}

export default function DivisionCard({ title, subtitle, description, features, icon, color, delay = 0, linkTo }: DivisionCardProps) {
  const colorMap = {
    'primary': 'bg-primary text-white',
    'accent-green': 'bg-accent-green text-white',
    'accent-yellow': 'bg-accent-yellow text-neutral-dark',
    'accent-red': 'bg-accent-red text-white',
  };

  const bgClass = colorMap[color];

  const buttonContent = (
    <>Learn more <span className="text-xl">&rarr;</span></>
  );

  const buttonClass = "font-medium text-primary flex items-center gap-2 hover:gap-3 transition-all relative z-10";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-secondary/50 relative overflow-hidden group flex flex-col h-full"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-10 transition-transform group-hover:scale-150 ${bgClass}`}></div>
      
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${bgClass} shadow-lg relative z-10`}>
        {icon}
      </div>
      
      <h3 className="text-3xl font-heading font-bold text-neutral-dark mb-2 relative z-10">{title}</h3>
      <p className="text-primary font-medium mb-6 relative z-10">{subtitle}</p>
      <p className="text-neutral-dark/70 mb-8 leading-relaxed relative z-10 flex-grow">
        {description}
      </p>
      
      <ul className="space-y-3 mb-8 relative z-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
            <span className="text-neutral-dark/80">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        {linkTo ? (
          <Link to={linkTo} className={buttonClass}>
            {buttonContent}
          </Link>
        ) : (
          <button className={buttonClass}>
            {buttonContent}
          </button>
        )}
      </div>
    </motion.div>
  );
}

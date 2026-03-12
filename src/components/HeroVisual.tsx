import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Target } from 'lucide-react';

type TrackType = 'A' | 'B';

const stepsA = [
  { done: true, title: 'Python + AI APIs', sub: 'Hands-on model building' },
  { done: true, title: 'Prompt Engineering in Code', sub: 'Structured, testable prompts' },
  { done: false, title: 'Bias Audit + Ethics', sub: 'Evaluating model fairness' },
  { done: false, title: 'Build & Deploy Live App', sub: 'Real portfolio project' },
];

const stepsB = [
  { done: true, title: 'Teachable Machine Model', sub: 'Zero code, real ML in 10 min' },
  { done: true, title: 'Prompt Recipe Book', sub: '8+ tested real-world prompts' },
  { done: false, title: 'AI Ethics Case Study', sub: 'Research + present findings' },
  { done: false, title: 'No-Code Project Portfolio', sub: 'Shareable, demonstrable work' },
];

export default function HeroVisual() {
  const [activeTrack, setActiveTrack] = useState<TrackType>('A');

  const steps = activeTrack === 'A' ? stepsA : stepsB;

  return (
    <div className="relative w-full max-w-md mx-auto mt-20 mb-16 lg:my-12">
      {/* Float 1: Age Range */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute -top-12 -left-2 md:-left-10 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 flex flex-col items-center z-20"
      >
        <strong className="text-3xl font-heading font-bold text-primary leading-none mb-1">10+</strong>
        <span className="text-xs text-neutral-dark/70 font-bold uppercase tracking-wider">Age Range</span>
      </motion.div>

      {/* Main Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-white/50 relative z-10"
      >
        <div className="text-xs font-bold text-neutral-dark/50 tracking-widest uppercase mb-6">
          Select Your Student's Track
        </div>

        {/* Track Switch */}
        <div className="flex bg-neutral-light/50 p-1.5 rounded-xl mb-8">
          <button 
            onClick={() => setActiveTrack('A')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all ${
              activeTrack === 'A' 
                ? 'bg-white text-primary shadow-sm' 
                : 'text-neutral-dark/60 hover:text-neutral-dark'
            }`}
          >
            💻 Already Codes
          </button>
          <button 
            onClick={() => setActiveTrack('B')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all ${
              activeTrack === 'B' 
                ? 'bg-white text-primary shadow-sm' 
                : 'text-neutral-dark/60 hover:text-neutral-dark'
            }`}
          >
            🌱 New to Code
          </button>
        </div>

        {/* Steps */}
        <div className="space-y-2 relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrack}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 absolute inset-0"
            >
              {steps.map((step, idx) => (
                <div key={idx} className={`flex items-start gap-4 p-3 rounded-xl transition-colors ${step.done ? 'bg-primary/5' : ''}`}>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 text-sm font-bold ${
                    step.done 
                      ? 'bg-primary text-white' 
                      : 'bg-neutral-light text-neutral-dark/40'
                  }`}>
                    {step.done ? <Check size={16} strokeWidth={3} /> : idx + 1}
                  </div>
                  <div>
                    <div className={`font-bold text-base mb-1 ${step.done ? 'text-neutral-dark' : 'text-neutral-dark/60'}`}>
                      {step.title}
                    </div>
                    <div className="text-sm text-neutral-dark/60">
                      {step.sub}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Float 2: Practical First */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute -bottom-12 -right-2 md:-right-10 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 flex items-center gap-4 z-20"
      >
        <div className="bg-accent-yellow/20 p-2.5 rounded-full text-accent-yellow">
          <Target size={24} />
        </div>
        <div>
          <strong className="block text-sm font-bold text-neutral-dark">Practical-First</strong>
          <small className="text-xs text-neutral-dark/60 font-medium">Every session has a real output</small>
        </div>
      </motion.div>
    </div>
  );
}

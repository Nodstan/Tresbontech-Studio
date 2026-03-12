import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Terminal, 
  Database,
  Cpu
} from 'lucide-react';
import CourseCard from '../components/CourseCard'; // Reusing the card component for consistency

export default function StudioPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Matching Academy Style */}
      <section className="min-h-screen flex items-center pt-20 pb-20 bg-neutral-dark relative border-b border-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-primary/20 text-primary font-medium px-4 py-2 rounded-full mb-6 border border-primary/30">
                Tresbontech Studio
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Architecting <span className="text-primary">Reliable</span> Infrastructure
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                We bridge the gap between complex engineering and business growth. From scalable cloud systems to high-performance backends, we build technology that secures your future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-primary transition-all shadow-lg flex items-center justify-center gap-2">
                  Start a Project <ArrowRight size={20} />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all text-center">
                  Our Methodology
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:flex justify-center"
            >
              {/* Abstract Engineering Visual */}
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative z-10 bg-neutral-dark border-2 border-primary/50 p-12 rounded-3xl rotate-3 shadow-2xl">
                  <Terminal size={120} className="text-primary" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent-green p-6 rounded-2xl -rotate-6 shadow-xl">
                  <Cpu size={40} className="text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Tracks - Reusing CourseCard Logic */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-6">Strategic Solutions</h2>
            <p className="text-lg text-neutral-dark/70">
              We provide two core engagement models designed to meet businesses at their specific stage of growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CourseCard 
              title="Venture Path: For Startups"
              description="Rapid MVP development, technical roadmapping, and scalable foundation building to get your product to market with zero technical debt."
              icon={<Zap size={28} className="text-primary" />}
              linkText="Learn about MVP Build"
              delay={0.1}
            />
            <CourseCard 
              title="Enterprise Path: For Scale"
              description="Infrastructure auditing, cloud optimization, and security hardening for established systems requiring high uptime and global reach."
              icon={<Globe size={28} className="text-primary" />}
              linkText="Learn about Engineering"
              highlight={true}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Engineering Philosophy - Matches Academy Section */}
      <section className="py-24 bg-neutral-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-heading font-bold mb-6">Precision First. Speed Second.</h2>
              <p className="text-white/70 text-lg mb-8">
                In engineering, speed without stability is failure. We prioritize robust architecture to ensure your system scales without breaking.
              </p>
              <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition-all">
                The Studio Framework
              </button>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Clean Schema", desc: "We design data models with absolute strictness, ensuring integrity and speed across the entire system." },
                { title: "Cloud Resiliency", desc: "Self-healing architectures that automatically recover from traffic spikes and server failures." },
                { title: "Security Hardening", desc: "Every layer is built with a security-first mindset, from encrypted transit to atomic DB operations." },
                { title: "Automated CI/CD", desc: "Deployment pipelines that test every line of code automatically before it ever hits production." },
                { title: "Zero Debt Delivery", desc: "We don't take shortcuts. We deliver code that is ready to be maintained for years, not months." },
                { title: "Adaptive Logic", desc: "Systems that grow with your user base, learning from traffic patterns to optimize performance." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10"
                >
                  <CheckCircle2 className="text-primary mb-4" size={24} />
                  <h4 className="font-heading font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="py-24 bg-neutral-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Layers size={32} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-neutral-dark">The Studio Lifecycle</h2>
              </div>
              <div className="space-y-8 relative">
                 {[
                   { step: "01", title: "Infrastructure Audit", desc: "Identifying bottlenecks, technical debt, and scalability limits in your current stack." },
                   { step: "02", title: "Blueprinting", desc: "Creating the technical specifications and data architecture for your new solution." },
                   { step: "03", title: "Rigorous Build", desc: "Development using React, PostgreSQL, and Prisma with continuous peer review." },
                   { step: "04", title: "Global Deployment", desc: "Launching into a hardened cloud environment with full monitoring and support." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6">
                      <div className="font-heading font-bold text-primary opacity-30 text-4xl">{item.step}</div>
                      <div>
                        <h4 className="font-bold text-xl text-neutral-dark mb-1">{item.title}</h4>
                        <p className="text-neutral-dark/60">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
            <div className="bg-neutral-dark p-12 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent-green/10 p-3 rounded-xl text-accent-green">
                    <Database size={32} />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-white">Studio Tech Stack</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'PostgreSQL', 'Prisma', 'AWS', 'Docker', 'Tailwind', 'Framer Motion', 'TypeScript'].map((tech, i) => (
                    <span key={i} className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-white">
                      {tech}
                    </span>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
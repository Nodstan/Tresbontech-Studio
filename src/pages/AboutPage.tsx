import { motion } from 'framer-motion';
import { Users, Target, Shield, Globe, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: "Systems Engineered", value: "120+", icon: <Cpu size={20} /> },
    { label: "Uptime Guaranteed", value: "99.9%", icon: <Shield size={20} /> },
    { label: "Global Presence", value: "15", icon: <Globe size={20} /> },
    { label: "Client Success", value: "95%", icon: <Target size={20} /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Exact match to Academy Style */}
      <section className="min-h-screen flex items-center pt-20 pb-20 bg-primary relative border-b border-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-white/20 text-white font-medium px-4 py-2 rounded-full mb-6">
                About Tresbontech
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Architecture Meets <span className="text-accent-yellow">Education.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                We are a dual-force technical entity operating at the intersection of enterprise-grade systems engineering and high-impact AI mentorship. We don't just build the future; we teach it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-neutral-light transition-all shadow-lg flex items-center justify-center gap-2">
                  Partner With Us <ArrowRight size={20} />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all text-center">
                  Our Methodology
                </button>
              </div>
            </motion.div>
            
            {/* Keeping the right side clean for an image or visual later */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-md aspect-square bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                 <Users size={120} className="text-white/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Clean White */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-neutral-light/20 rounded-3xl border border-secondary/50"
              >
                <div className="flex justify-center text-primary mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-neutral-dark mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-neutral-dark/60 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - Dark for contrast */}
      <section className="py-24 bg-neutral-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-heading font-bold mb-6 italic">The Tresbontech Standard</h2>
              <p className="text-white/70 text-lg mb-8">
                Technical debt is the greatest barrier to innovation. Whether in a business database or a student's mind, we build foundations that endure.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Radical Transparency", desc: "No hidden layers. Whether it's a server schema or a lesson plan, we work in the open." },
                { title: "Absolute Reliability", desc: "If it can't handle 10x the current load, it isn't finished. We build for scale." },
                { title: "Precision Logic", desc: "We don't guess. We engineer solutions based on data and structural integrity." },
                { title: "Zero Debt Delivery", desc: "We deliver code and curriculum that are ready to be maintained for years, not months." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
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

      {/* CTA Section - Matches Academy footer */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-100"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 italic">Built to Endure.</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Ready to partner with a team that values precision as much as you do? Let's start a conversation.
          </p>
          <button className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-neutral-light transition-all shadow-lg">
            Book a Discovery Call
          </button>
        </div>
      </section>
    </div>
  );
}
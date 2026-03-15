import { motion } from 'motion/react';
import { Lightbulb, ShieldCheck, HeartHandshake, Briefcase } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-accent-yellow" />,
      title: "Innovative",
      description: "Forward-thinking approaches in both our educational curriculum and technology solutions."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Trustworthy",
      description: "A proven track record of delivering on our promises to students and business partners alike."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-accent-green" />,
      title: "Supportive",
      description: "Dedicated mentorship and ongoing support to ensure your long-term success."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-accent-red" />,
      title: "Professional",
      description: "Industry-standard practices applied by experts in education and software engineering."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-neutral-light/30 via-white to-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Advantage</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark mb-6">Why Choose Tresbontech</h2>
          <p className="text-lg text-neutral-dark/70">
            We operate at the intersection of learning and building. Our hybrid model ensures that our educational programs are informed by real-world industry needs, while our tech solutions benefit from a culture of continuous learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-neutral-light/50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-dark mb-3">{feature.title}</h3>
              <p className="text-neutral-dark/70 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

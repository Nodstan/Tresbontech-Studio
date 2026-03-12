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
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-6">Why Choose Tresbontech</h2>
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
              className="bg-neutral-light/20 rounded-2xl p-8 border border-neutral-light hover:shadow-lg transition-shadow"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm">
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

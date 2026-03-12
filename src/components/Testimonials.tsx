import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Tresbontech Academy completely transformed my child's approach to learning. The exam prep was rigorous but incredibly supportive.",
      author: "Sarah Jenkins",
      role: "Parent",
      division: "Academy"
    },
    {
      quote: "The Studio team delivered our MVP ahead of schedule. Their strategic insight into our business needs was just as valuable as their code.",
      author: "Marcus Chen",
      role: "Startup Founder",
      division: "Studio"
    },
    {
      quote: "I received offers from my top three university choices thanks to the dedicated mentorship at Tresbontech.",
      author: "David O.",
      role: "Student",
      division: "Academy"
    }
  ];

  return (
    <section className="py-24 bg-neutral-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">What People Say</h2>
          <p className="text-white/70">Success stories from our students and partners.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-yellow text-accent-yellow" />
                ))}
              </div>
              <p className="text-lg mb-8 italic text-white/90">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold font-heading text-lg">{testimonial.author}</p>
                <p className="text-sm text-white/60">{testimonial.role} • <span className="text-primary">{testimonial.division}</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

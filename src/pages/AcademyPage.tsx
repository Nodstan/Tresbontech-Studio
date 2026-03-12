import { motion } from 'motion/react';
import { BookOpen, Code, Lightbulb, Target, ArrowRight, CheckCircle2, Laptop, Wrench, Sparkles } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import HeroVisual from '../components/HeroVisual';

export default function AcademyPage() {
  return (
    <div className="">
      {/* Hero Section */}
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
                Tresbontech Academy
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Learning AI for the <span className="text-accent-yellow">Next Gen</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                A comprehensive, research-backed curriculum for your child. We introduce AI education and essential tech skills to students aged 5–17 — whether they code or not — ensuring every skill lands as a practical, real-world ability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-neutral-light transition-all shadow-lg flex items-center justify-center gap-2">
                  Enroll Now <ArrowRight size={20} />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all text-center">
                  View Curriculum
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Two Tracks Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-6">Two Tracks. One Destination.</h2>
            <p className="text-lg text-neutral-dark/70">
              Every student arrives at AI education from a different starting point. Tresbontech's two-track system meets them exactly where they are.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CourseCard 
              title="Track A: Coding Experience"
              description="For students with at least 3 months of Python or similar. They can write functions independently and ask 'how does this work?' before 'what can this do?'"
              icon={<Code size={28} />}
              linkText="Explore Track A"
              delay={0.1}
            />
            <CourseCard 
              title="Track B: No-Code Entry"
              description="For students with zero to minimal coding experience. Entry through AI concepts, ethics, and no-code tools. This track builds genuinely professional skills."
              icon={<Laptop size={28} />}
              linkText="Explore Track B"
              highlight={true}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-neutral-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-heading font-bold mb-6">Our "Build Before Explain" Philosophy</h2>
              <p className="text-white/70 text-lg mb-8">
                The number one failure in tech education is teaching concepts students can't apply the next day. Every Tresbontech session is built around tangible outputs.
              </p>
              <button className="bg-white text-neutral-dark px-6 py-3 rounded-full font-medium hover:bg-neutral-light transition-all">
                Read Full Framework
              </button>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Problem First", desc: "Never introduce a concept in the abstract. Anchor every concept to a specific real-world problem it solves." },
                { title: "Build, Then Explain", desc: "Let students build first, then explain why it worked. Experience creates the question; explanation answers it." },
                { title: "Tangible Outputs", desc: "A model. A prompt recipe. A web page. If a student can't physically show something, the session was too theoretical." },
                { title: "Make Invisible Visible", desc: "Students use AI constantly. We make the invisible visible. 'You used AI 50 times before you got here today.'" },
                { title: "Peer Teaching", desc: "When a student explains a concept to a classmate, they own it. It forces clarity and builds confidence." },
                { title: "Real-World Application", desc: "After every project: 'I built X which could help Y to do Z.' This becomes their portfolio description." }
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

      {/* Roadmap & Tools */}
      <section className="py-24 bg-neutral-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 12-Week Roadmap */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-neutral-dark">12-Week Roadmap</h2>
              </div>
              <p className="text-neutral-dark/70 mb-8 text-lg">
                A structured progression with differentiated activities for both tracks, ensuring steady growth from fundamentals to advanced applications.
              </p>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary before:to-transparent">
                {[
                  { week: "Weeks 1-4", title: "Foundations & Ethics", desc: "Understanding how AI works, identifying bias, and basic prompt engineering." },
                  { week: "Weeks 5-8", title: "Building & Applying", desc: "Creating first models, automating simple tasks, and exploring generative tools." },
                  { week: "Weeks 9-12", title: "Portfolio Projects", desc: "Developing a capstone project solving a real-world problem to showcase skills." }
                ].map((phase, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <span className="text-sm font-bold">{idx + 1}</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-secondary shadow-sm">
                      <span className="text-primary font-bold text-sm mb-1 block">{phase.week}</span>
                      <h4 className="font-heading font-bold text-lg mb-2 text-neutral-dark">{phase.title}</h4>
                      <p className="text-neutral-dark/60 text-sm">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center md:text-left">
                <button className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all mx-auto md:mx-0">
                  View Full Roadmap <ArrowRight size={18} />
                </button>
              </div>
            </div>
            
            {/* Tools & Projects */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent-green/10 p-3 rounded-xl text-accent-green">
                    <Wrench size={32} />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-neutral-dark">Best Tools for Learning</h2>
                </div>
                <p className="text-neutral-dark/70 mb-6">
                  We match the right tools to the track, age, and learning objective. Students get hands-on experience with industry-standard software.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['ChatGPT', 'Claude', 'Midjourney', 'Python', 'TensorFlow', 'Runway', 'Make.com', 'Figma'].map((tool, i) => (
                    <span key={i} className="bg-white border border-secondary px-4 py-2 rounded-full text-sm font-medium text-neutral-dark">
                      {tool}
                    </span>
                  ))}
                </div>
                <button className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  See All 18 Tools <ArrowRight size={18} />
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-secondary shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent-yellow/10 p-3 rounded-xl text-accent-yellow">
                    <Lightbulb size={32} />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-neutral-dark">Featured Projects</h2>
                </div>
                <p className="text-neutral-dark/70 mb-8">
                  Every project has a real output students can share or build on. No throwaway assignments.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent-green shrink-0 mt-0.5" size={20} />
                    <span className="text-neutral-dark/80">Custom Study Assistant Chatbot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent-green shrink-0 mt-0.5" size={20} />
                    <span className="text-neutral-dark/80">Automated Homework Planner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent-green shrink-0 mt-0.5" size={20} />
                    <span className="text-neutral-dark/80">AI-Generated Storybook with Illustrations</span>
                  </li>
                </ul>
                <button className="w-full bg-neutral-light/50 text-primary py-3 rounded-xl font-medium hover:bg-neutral-light transition-colors">
                  View All 20+ Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-100"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Start Your Child's Journey?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book a discovery call to discuss which track is right for your child and how we can help them build future-ready skills.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-neutral-light transition-all shadow-lg flex items-center justify-center gap-2">
              Book a Discovery Call <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Enroll Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

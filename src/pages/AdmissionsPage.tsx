import React, { useState } from 'react';
import { Check, Clock, Users, BookOpen, Award, Phone, Mail, MapPin, Calendar, ChevronRight, Star } from 'lucide-react';

interface Requirement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Step {
  number: number;
  title: string;
  description: string;
  duration: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const requirements: Requirement[] = [
  {
    title: "Basic Computer Skills",
    description: "Familiarity with basic computer operations and internet usage",
    icon: <BookOpen className="w-6 h-6 text-primary" />
  },
  {
    title: "Educational Background",
    description: "Minimum of secondary school education or equivalent",
    icon: <Award className="w-6 h-6 text-primary" />
  },
  {
    title: "Age Requirement",
    description: "Must be at least 16 years old to enroll in our programs",
    icon: <Users className="w-6 h-6 text-primary" />
  },
  {
    title: "Time Commitment",
    description: "Ability to dedicate 10-15 hours per week for coursework",
    icon: <Clock className="w-6 h-6 text-primary" />
  }
];

const admissionSteps: Step[] = [
  {
    number: 1,
    title: "Submit Application",
    description: "Fill out our online application form with your details and program preferences",
    duration: "5-10 minutes"
  },
  {
    number: 2,
    title: "Schedule Interview",
    description: "Book a consultation call with our admissions team to discuss your goals",
    duration: "30 minutes"
  },
  {
    number: 3,
    title: "Assessment Test",
    description: "Complete a short assessment to determine your current skill level",
    duration: "45 minutes"
  },
  {
    number: 4,
    title: "Receive Decision",
    description: "Get your admission decision within 3-5 business days",
    duration: "3-5 days"
  },
  {
    number: 5,
    title: "Enroll & Pay",
    description: "Secure your spot by completing enrollment and payment",
    duration: "15 minutes"
  }
];

const faqs: FAQ[] = [
  {
    question: "When do programs start?",
    answer: "We have rolling admissions with new cohorts starting every month. You can apply anytime and we'll place you in the next available cohort."
  },
  {
    question: "Is there an application fee?",
    answer: "No, our application process is completely free. You only pay once you're accepted and decide to enroll."
  },
  {
    question: "What payment options are available?",
    answer: "We offer flexible payment plans including upfront payment, monthly installments, and pay-after-placement options for qualifying students."
  },
  {
    question: "Do you offer scholarships?",
    answer: "Yes, we offer merit-based scholarships up to 50% of tuition fees. We also have need-based financial aid available."
  },
  {
    question: "What if I don't have a tech background?",
    answer: "No problem! Our programs are designed for beginners. We provide foundational courses to get you up to speed before the main program starts."
  },
  {
    question: "Can I work while studying?",
    answer: "Yes, our programs are designed to be flexible. Most students work part-time or full-time while completing their studies."
  }
];

export default function AdmissionsPage() {
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Start Your Tech Journey
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join thousands of students who have transformed their careers through our comprehensive tech programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-neutral-light transition-colors shadow-lg">
                Apply Now
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-neutral-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-4">Admission Requirements</h2>
            <p className="text-lg text-neutral-dark/70">What you need to get started</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-neutral-light hover:shadow-md transition-shadow">
                <div className="bg-neutral-light/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {req.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-neutral-dark mb-3">{req.title}</h3>
                <p className="text-neutral-dark/70 text-sm leading-relaxed">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-4">Admission Process</h2>
            <p className="text-lg text-neutral-dark/70">Your journey to a tech career in 5 simple steps</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neutral-light hidden lg:block"></div>
            
            {admissionSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center mb-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-light relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 shadow-md">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-neutral-dark">{step.title}</h3>
                    </div>
                    <p className="text-neutral-dark/70 mb-4">{step.description}</p>
                    <div className="flex items-center text-sm font-medium text-primary">
                      <Clock className="w-4 h-4 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">
                    {step.number}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-neutral-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Why Choose Tresbontech?</h2>
            <p className="text-xl text-white/70">We make tech education accessible and effective</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="bg-white/10 text-accent-yellow w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Industry-Relevant Curriculum</h3>
              <p className="text-white/70 text-sm leading-relaxed">Learn the latest technologies and frameworks used by top companies</p>
            </div>
            
            <div className="text-center bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="bg-white/10 text-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Expert Instructors</h3>
              <p className="text-white/70 text-sm leading-relaxed">Learn from industry professionals with real-world experience</p>
            </div>
            
            <div className="text-center bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="bg-white/10 text-accent-green w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Career Support</h3>
              <p className="text-white/70 text-sm leading-relaxed">Get help with job placement, resume building, and interview prep</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-light/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-dark/70">Everything you need to know about admissions</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-neutral-light rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-light/10 transition-colors"
                  onClick={() => setSelectedFAQ(selectedFAQ === index ? null : index)}
                >
                  <span className="font-heading font-bold text-neutral-dark">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-primary transform transition-transform ${selectedFAQ === index ? 'rotate-90' : ''}`} />
                </button>
                {selectedFAQ === index && (
                  <div className="px-6 pb-5">
                    <p className="text-neutral-dark/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-neutral-dark mb-4">Ready to Apply?</h2>
              <p className="text-lg text-neutral-dark/70 mb-10">
                Get in touch with our admissions team. We're here to help you start your tech journey.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-light/30 text-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-neutral-dark text-lg">Call Us</h3>
                    <p className="text-neutral-dark/70 mt-1">+234 800 123 4567</p>
                    <p className="text-sm text-neutral-dark/50 mt-1">Mon-Fri 9AM-6PM WAT</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-light/30 text-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-neutral-dark text-lg">Email Us</h3>
                    <p className="text-neutral-dark/70 mt-1">admissions@tresbontech.com</p>
                    <p className="text-sm text-neutral-dark/50 mt-1">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-light/30 text-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-neutral-dark text-lg">Visit Us</h3>
                    <p className="text-neutral-dark/70 mt-1">123 Tech Street, Victoria Island, Lagos</p>
                    <p className="text-sm text-neutral-dark/50 mt-1">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-neutral-light">
              <h3 className="text-2xl font-heading font-bold text-neutral-dark mb-6">Get Started Today</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">Program of Interest</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select a program</option>
                    <option value="fullstack">Full Stack Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="data">Data Science & Analytics</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="design">UI/UX Design</option>
                    <option value="cybersecurity">Cybersecurity</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your goals and background..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg mt-4"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

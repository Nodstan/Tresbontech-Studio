import React from 'react';
import { Award, Users, Target, BookOpen, TrendingUp, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Academic Director',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20headshot%20of%20a%20confident%20woman%20in%20her%2040s%2C%20academic%20professional%2C%20warm%20smile%2C%20modern%20professional%20attire%2C%20corporate%20headshot%20style&image_size=square',
      bio: '15+ years in tech education, PhD in Computer Science from MIT. Former Google engineer passionate about democratizing tech education.',
      linkedin: 'https://linkedin.com/in/sarah-johnson-phd'
    },
    {
      name: 'Michael Adebayo',
      role: 'Lead Web Development Instructor',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20headshot%20of%20a%20confident%20Nigerian%20man%20in%20his%2030s%2C%20tech%20professional%2C%20friendly%20smile%2C%20modern%20professional%20attire%2C%20corporate%20headshot%20style&image_size=square',
      bio: 'Full-stack developer with 8 years industry experience. Former Andela engineer, specializes in React, Node.js, and cloud technologies.',
      linkedin: 'https://linkedin.com/in/michael-adebayo-dev'
    },
    {
      name: 'Emma Chen',
      role: 'Mobile Development Instructor',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20headshot%20of%20a%20confident%20Asian%20woman%20in%20her%2030s%2C%20tech%20professional%2C%20bright%20smile%2C%20modern%20professional%20attire%2C%20corporate%20headshot%20style&image_size=square',
      bio: 'Mobile app developer with expertise in React Native and Flutter. Built 20+ apps for startups and enterprises across Africa and Asia.',
      linkedin: 'https://linkedin.com/in/emma-chen-mobile'
    },
    {
      name: 'David Okafor',
      role: 'Data Analytics Instructor',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20headshot%20of%20a%20confident%20Nigerian%20man%20in%20his%2030s%2C%20data%20scientist%2C%20professional%20demeanor%2C%20modern%20professional%20attire%2C%20corporate%20headshot%20style&image_size=square',
      bio: 'Data scientist with 6 years experience in financial services and consulting. Expert in Python, SQL, Tableau, and machine learning.',
      linkedin: 'https://linkedin.com/in/david-okafor-data'
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Student-Centered Learning',
      description: 'Every decision we make puts our students first. We adapt our teaching methods to individual learning styles and provide personalized support throughout the journey.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: 'Project-Based Approach',
      description: 'We believe in learning by doing. Every course includes real-world projects that build your portfolio and demonstrate your skills to potential employers.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Industry Relevance',
      description: 'Our curriculum is continuously updated to match current industry demands. We teach technologies and methodologies that companies actually use today.'
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: 'Community & Support',
      description: 'Learning is better together. We foster a supportive community where students collaborate, share knowledge, and build lasting professional relationships.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Students Trained', icon: <Users className="w-6 h-6" /> },
    { number: '95%', label: 'Job Placement Rate', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '4.9/5', label: 'Student Rating', icon: <Award className="w-6 h-6" /> },
    { number: '50+', label: 'Industry Partners', icon: <BookOpen className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              About TRESBONTECH
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              We're on a mission to transform lives through technology education. 
              Founded with the belief that everyone deserves access to quality tech training, 
              we've built Nigeria's leading academy for practical, job-ready skills.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To democratize technology education and empower individuals with the skills 
                needed to thrive in the digital economy. We believe that with the right 
                training, support, and opportunities, anyone can build a successful career in tech.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're committed to providing practical, industry-relevant education that 
                transforms beginners into job-ready professionals, contributing to Nigeria's 
                growing tech ecosystem and global competitiveness.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become Africa's premier tech academy, recognized for producing 
                exceptional talent that drives innovation and economic growth across 
                the continent and beyond.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Create 10,000+ tech professionals by 2030</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Expand to 5 African countries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Partner with 200+ tech companies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from curriculum design to student support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Teaching Philosophy</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">01</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Learn by Doing</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                Theory is important, but practice makes perfect. Every concept is immediately 
                applied through hands-on exercises and real-world projects.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">02</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Build Your Portfolio</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                Graduate with a portfolio of impressive projects that demonstrate your skills 
                to potential employers and set you apart from other candidates.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">03</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Industry Connection</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                Learn from instructors who work in the industry and build connections 
                with our network of hiring partners and tech professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Instructors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry professionals who are passionate about teaching and mentoring
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View LinkedIn →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-100"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Become part of Nigeria's leading tech academy and transform your career with expert guidance and industry-relevant skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Explore Courses
            </button>
            <button className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

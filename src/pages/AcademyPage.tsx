import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Users, 
  Code, 
  Star, 
  ExternalLink, 
  ChevronRight,
  Award,
  Smartphone,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FeaturedCourseCard } from '../components/FeaturedCourseCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { ProjectCard } from '../components/ProjectCard';

// --- Sub-Components (Integrated for a single-file solution) ---

const StatCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-transform">
    <div className="text-3xl font-bold text-blue-600 mb-2 font-header">{value}</div>
    <div className="text-gray-600 font-body text-sm uppercase tracking-wider">{title}</div>
  </div>
);

// --- Main AcademyPage Component ---

const AcademyPage: React.FC = () => {
  const featuredCourses = [
    {
      id: '1',
      title: 'Web Development',
      slug: 'web-development',
      description: 'Build modern web applications from scratch using industry-standard technologies',
      duration: '12 weeks',
      level: 'beginner' as const,
      price: 150000,
      tech_stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20web%20development%20setup%20with%20multiple%20screens%20showing%20code%20editor%2C%20browser%20preview%2C%20and%20developer%20tools%20in%20a%20bright%2C%20professional%20workspace&image_size=landscape_16_9',
      projects: ['Personal Portfolio Website', 'E-commerce Platform', 'Task Management App'],
      certification: 'Full Stack Web Developer Certificate'
    },
    {
      id: '2',
      title: 'App Development',
      slug: 'app-development',
      description: 'Create mobile applications for iOS and Android platforms',
      duration: '16 weeks',
      level: 'intermediate' as const,
      price: 200000,
      tech_stack: ['React Native', 'Flutter', 'Firebase', 'API Integration'],
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Mobile%20app%20development%20workspace%20with%20smartphone%20mockups%2C%20code%20editor%20showing%20mobile%20app%20code%2C%20modern%20minimalist%20design%20studio%20environment&image_size=landscape_16_9',
      projects: ['Weather App', 'Social Media App', 'E-commerce Mobile App'],
      certification: 'Mobile App Developer Certificate'
    },
    {
      id: '3',
      title: 'Data Analytics',
      slug: 'data-analysis',
      description: 'Master data analysis and visualization techniques',
      duration: '10 weeks',
      level: 'beginner' as const,
      price: 120000,
      tech_stack: ['Python', 'Pandas', 'Tableau', 'SQL'],
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analytics%20workspace%20with%20multiple%20monitors%20showing%20charts%2C%20graphs%2C%20and%20data%20visualizations%20in%20a%20modern%20professional%20office%20setting&image_size=landscape_16_9',
      projects: ['Sales Dashboard', 'Customer Analytics Report', 'Market Research Analysis'],
      certification: 'Data Analyst Certificate'
    }
  ];

  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      course: 'Web Development',
      testimonial: 'TRESBONTECH transformed my career. Within 3 months, I went from complete beginner to landing my first developer job. The project-based approach really works!',
      rating: 5,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20headshot%20of%20a%20confident%20young%20woman%20in%20tech%2C%20bright%20smile%2C%20modern%20professional%20attire%2C%20corporate%20headshot%20style&image_size=square',
      linkedin_url: 'https://linkedin.com/in/sarah-johnson'
    },
    {
      id: '2',
      name: 'Michael Chen',
      course: 'App Development',
      testimonial: 'The instructors are amazing and the curriculum is perfectly structured. I built 3 mobile apps during the course and now run my own app development business.',
      rating: 5,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20headshot%20of%20a%20confident%20young%20man%20in%20tech%2C%20friendly%20smile%2C%20modern%20professional%20attire%2C%20corporate%20headshot%20style&image_size=square',
      linkedin_url: 'https://linkedin.com/in/michael-chen'
    },
    {
      id: '3',
      name: 'Amara Okafor',
      course: 'Data Analytics',
      testimonial: 'I landed a data analyst role at a major bank after completing the course. The real-world projects gave me the confidence and portfolio I needed.',
      rating: 5,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20headshot%20of%20a%20confident%20young%20Nigerian%20woman%2C%20bright%20smile%2C%20modern%20professional%20attire%2C%20corporate%20headshot%20style&image_size=square',
      linkedin_url: 'https://linkedin.com/in/amara-okafor'
    }
  ];

  const featuredProjects = [
    {
      id: '1',
      title: 'E-commerce Platform',
      student: { name: 'David Adebayo', course: 'Web Development' },
      description: 'Full-featured online shopping platform with payment integration and admin dashboard',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image_url: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20e-commerce%20website%20interface%20showing%20product%20grid%2C%20shopping%20cart%2C%20and%20checkout%20process%2C%20clean%20professional%20design%2C%20desktop%20view&image_size=landscape_16_9',
      live_url: 'https://demo.tresbontech.com/ecommerce',
      is_featured: true
    },
    {
      id: '2',
      title: 'Task Manager App',
      student: { name: 'Emma Wilson', course: 'App Development' },
      description: 'Mobile application for productivity and task organization with team collaboration',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image_url: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Mobile%20task%20management%20app%20interface%20showing%20task%20lists%2C%20calendar%20view%2C%20and%20team%20collaboration%20features%2C%20modern%20clean%20mobile%20UI%20design&image_size=portrait_4_3',
      live_url: 'https://demo.tresbontech.com/taskmanager',
      is_featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex items-center pt-20 pb-20 bg-primary relative overflow-hidden text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-100"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                  Learn In-Demand Tech Skills.
                  <span className="block text-accent-yellow">Build Real Projects.</span>
                  Launch Your Tech Career.
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                  Join Nigeria's leading tech academy and transform your future. 
                  Our project-based approach ensures you graduate with real-world skills 
                  that employers are looking for.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent-yellow rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white/90 font-medium">Expert Instructors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent-yellow rounded-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white/90 font-medium">Hands-on Projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent-yellow rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-white/90 font-medium">Job Placement Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent-yellow rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-white/90 font-medium">Industry Certification</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/auth/register"
                  className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-neutral-light transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Course Brochure
                </Link>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <p className="text-white/90 text-sm mb-2">Have questions? Chat with us on WhatsApp</p>
                <a
                  href="https://wa.me/2348012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-medium"
                >
                  <div className="w-4 h-4 bg-white rounded-full mr-2 flex items-center justify-center">
                    <span className="text-green-500 text-xs font-bold">W</span>
                  </div>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20tech%20academy%20classroom%20with%20diverse%20students%20learning%20coding%20on%20laptops%2C%20modern%20bright%20workspace%2C%20instructor%20teaching%2C%20multiple%20screens%20showing%20code%2C%20collaborative%20learning%20environment&image_size=landscape_16_9"
                  alt="TRESBONTECH Students Learning"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">Job Placement</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <StatCard value="500+" title="Students Trained" />
            <StatCard value="95%" title="Job Placement Rate" />
            <StatCard value="50+" title="Projects Completed" />
            <StatCard value="4.9/5" title="Student Rating" />
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Learn In-Demand Tech Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive courses designed to take you from beginner to job-ready professional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <FeaturedCourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Student Projects Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Student Projects Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our students have built. Real projects that demonstrate real skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Admissions Link Section */}
      <section className="py-20 bg-neutral-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] bg-repeat opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-light flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
                Curious About Our Admissions Process?
              </h2>
              <p className="text-lg text-neutral-dark/70 mb-0">
                Learn about our requirements, step-by-step application process, available scholarships, and frequently asked questions. We make tech education accessible.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/admissions"
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 font-bold text-lg"
              >
                View Admissions Info
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who transformed their careers with TRESBONTECH
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Launch Your Tech Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the next cohort and start building the future you deserve. Limited spots available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth/register"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors font-semibold text-lg"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Course Brochure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPage;
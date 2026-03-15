import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Award, ArrowRight } from 'lucide-react';
import { FeaturedCourseCard } from '../components/FeaturedCourseCard';

interface Course {
  id: string;
  title: string;
  description: string;
  slug: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  price: number;
  tech_stack: string[];
  thumbnail: string;
  overview: string;
  projects: string[];
  certification: string;
  requirements: string[];
  is_active: boolean;
  created_at: string;
}

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Full Stack Web Development Bootcamp',
    slug: 'full-stack-web-development',
    description: 'Master modern web development from front-end to back-end with React, Node.js, and MongoDB',
    level: 'beginner',
    duration: '16 weeks',
    price: 150000,
    tech_stack: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'HTML/CSS'],
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop',
    overview: 'Comprehensive full-stack web development course covering frontend and backend technologies',
    projects: ['Personal Portfolio Website', 'E-commerce Platform', 'Task Management App'],
    certification: 'Full Stack Web Developer Certificate',
    requirements: ['Basic computer literacy', 'Personal laptop'],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Mobile App Development with React Native',
    slug: 'mobile-app-development',
    description: 'Build cross-platform mobile applications for iOS and Android using React Native',
    level: 'intermediate',
    duration: '12 weeks',
    price: 120000,
    tech_stack: ['React Native', 'Firebase', 'JavaScript', 'Mobile UI/UX'],
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    overview: 'Cross-platform mobile development with modern frameworks',
    projects: ['Weather App', 'Social Media App', 'E-commerce Mobile App'],
    certification: 'Mobile App Developer Certificate',
    requirements: ['JavaScript fundamentals', 'Personal laptop'],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Data Science & Analytics Bootcamp',
    slug: 'data-science-analytics',
    description: 'Master data analysis, visualization, and machine learning with Python',
    level: 'beginner',
    duration: '14 weeks',
    price: 135000,
    tech_stack: ['Python', 'Pandas', 'Tableau', 'SQL', 'Machine Learning'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    overview: 'Transform data into actionable insights using industry tools',
    projects: ['Sales Dashboard', 'Customer Analytics Report', 'Market Research Analysis'],
    certification: 'Data Analyst Certificate',
    requirements: ['Basic computer literacy', 'Analytical mindset'],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    title: 'AI & Machine Learning Specialization',
    slug: 'ai-machine-learning',
    description: 'Deep dive into artificial intelligence and machine learning algorithms',
    level: 'advanced',
    duration: '16 weeks',
    price: 180000,
    tech_stack: ['Python', 'TensorFlow', 'PyTorch', 'Neural Networks', 'Deep Learning'],
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    overview: 'Advanced AI and machine learning with hands-on projects',
    projects: ['Image Recognition System', 'Natural Language Processing App', 'Predictive Analytics Model'],
    certification: 'AI & Machine Learning Certificate',
    requirements: ['Programming experience', 'Mathematics background'],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    title: 'UI/UX Design Masterclass',
    slug: 'ui-ux-design',
    description: 'Create beautiful and user-friendly interfaces for web and mobile applications',
    level: 'beginner',
    duration: '10 weeks',
    price: 95000,
    tech_stack: ['Figma', 'Adobe XD', 'Design Thinking', 'User Research'],
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    overview: 'Learn the principles of user interface and user experience design',
    projects: ['Mobile App Design', 'Website Redesign', 'User Research Project'],
    certification: 'UI/UX Designer Certificate',
    requirements: ['Creative mindset', 'Personal laptop'],
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    title: 'Cybersecurity Fundamentals',
    slug: 'cybersecurity',
    description: 'Learn essential cybersecurity concepts and protect digital assets',
    level: 'intermediate',
    duration: '12 weeks',
    price: 110000,
    tech_stack: ['Network Security', 'Ethical Hacking', 'Risk Assessment', 'Security Tools'],
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
    overview: 'Build a strong foundation in cybersecurity with hands-on experience',
    projects: ['Vulnerability Assessment', 'Security Policy Development', 'Incident Response Plan'],
    certification: 'Cybersecurity Specialist Certificate',
    requirements: ['Networking basics', 'Personal laptop'],
    is_active: true,
    created_at: new Date().toISOString()
  }
];

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');

  const filteredCourses = useMemo(() => {
    return mockCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.tech_stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
      
      let matchesDuration = true;
      if (selectedDuration === 'short') {
        matchesDuration = parseInt(course.duration) <= 8;
      } else if (selectedDuration === 'medium') {
        const weeks = parseInt(course.duration);
        matchesDuration = weeks >= 9 && weeks <= 12;
      } else if (selectedDuration === 'long') {
        matchesDuration = parseInt(course.duration) > 12;
      }
      
      return matchesSearch && matchesLevel && matchesDuration;
    });
  }, [searchTerm, selectedLevel, selectedDuration]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Tech Programs
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Choose from our comprehensive tech programs designed to launch your career in technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Application
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Talk to Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>

              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Durations</option>
                <option value="short">Short (≤8 weeks)</option>
                <option value="medium">Medium (9-12 weeks)</option>
                <option value="long">Long ({'>'}12 weeks)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredCourses.length}</span> courses
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <FeaturedCourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Career?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have transformed their careers through our comprehensive programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;

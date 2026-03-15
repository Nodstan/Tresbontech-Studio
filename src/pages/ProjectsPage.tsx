import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ExternalLink, Github, Eye, Calendar, Award } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  student_name: string;
  student_avatar: string;
  course_name: string;
  project_type: 'web' | 'mobile' | 'data' | 'ai' | 'design';
  technologies: string[];
  live_url?: string;
  github_url?: string;
  demo_url?: string;
  image_url: string;
  created_at: string;
  likes: number;
  views: number;
  featured: boolean;
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and inventory management',
    student_name: 'Sarah Johnson',
    student_avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face',
    course_name: 'Full Stack Web Development',
    project_type: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    live_url: 'https://example.com',
    github_url: 'https://github.com/example',
    image_url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    created_at: '2024-01-15',
    likes: 234,
    views: 1205,
    featured: true
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication',
    student_name: 'Michael Chen',
    student_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    course_name: 'Mobile App Development',
    project_type: 'mobile',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    demo_url: 'https://example.com/demo',
    image_url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    created_at: '2024-02-01',
    likes: 189,
    views: 892,
    featured: true
  },
  {
    id: '3',
    title: 'AI Customer Support',
    description: 'Intelligent chatbot for automated customer service',
    student_name: 'Aisha Bello',
    student_avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    course_name: 'AI & Machine Learning',
    project_type: 'ai',
    technologies: ['Python', 'TensorFlow', 'NLP'],
    github_url: 'https://github.com/example',
    image_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    created_at: '2024-01-28',
    likes: 156,
    views: 743,
    featured: false
  },
  {
    id: '4',
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for business intelligence and analytics',
    student_name: 'David Kim',
    student_avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    course_name: 'Data Science & Analytics',
    project_type: 'data',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Chart.js'],
    live_url: 'https://example.com',
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    created_at: '2024-02-10',
    likes: 198,
    views: 967,
    featured: true
  },
  {
    id: '5',
    title: 'UI/UX Portfolio Website',
    description: 'Modern portfolio website with interactive animations',
    student_name: 'Emma Rodriguez',
    student_avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    course_name: 'UI/UX Design',
    project_type: 'design',
    technologies: ['Figma', 'Adobe XD', 'HTML/CSS'],
    live_url: 'https://example.com',
    image_url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    created_at: '2024-01-20',
    likes: 267,
    views: 1342,
    featured: false
  },
  {
    id: '6',
    title: 'Blockchain Voting System',
    description: 'Secure voting platform using blockchain technology',
    student_name: 'James Wilson',
    student_avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    course_name: 'Blockchain Development',
    project_type: 'web',
    technologies: ['Solidity', 'Web3.js', 'React'],
    github_url: 'https://github.com/example',
    image_url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
    created_at: '2024-02-05',
    likes: 145,
    views: 678,
    featured: false
  }
];

const projectTypes = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'data', label: 'Data Science' },
  { value: 'ai', label: 'AI/ML' },
  { value: 'design', label: 'Design' }
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredProjects = useMemo(() => {
    return mockProjects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesType = selectedType === 'all' || project.project_type === selectedType;
      const matchesFeatured = !showFeaturedOnly || project.featured;
      
      return matchesSearch && matchesType && matchesFeatured;
    });
  }, [searchTerm, selectedType, showFeaturedOnly]);

  const featuredProjects = mockProjects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Student Project Showcase
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover amazing projects built by our talented students. See what you can create after completing our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                View All Projects
              </Link>
              <Link to="/courses" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block">
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">Outstanding projects from our top students</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects, students, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-4 items-center">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {projectTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showFeaturedOnly}
                  onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Featured only</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              All Projects ({filteredProjects.length})
            </h2>
          </div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Own Projects?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our programs and start building real-world projects that will showcase your skills to employers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              Browse Courses
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block">
              Talk to Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img 
          src={project.image_url} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Award className="w-4 h-4" />
            Featured
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {projectTypes.find(t => t.value === project.project_type)?.label}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={project.student_avatar} 
            alt={project.student_name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-900">{project.student_name}</p>
            <p className="text-sm text-gray-500">{project.course_name}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-gray-500 text-sm">+{project.technologies.length - 3} more</span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {project.views}
            </span>
            <span>❤️ {project.likes}</span>
          </div>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(project.created_at).toLocaleDateString()}
          </span>
        </div>
        
        <div className="flex gap-2">
          {project.live_url && (
            <a 
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.github_url && (
            <a 
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demo_url && !project.live_url && (
            <a 
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors"
            >
              Watch Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

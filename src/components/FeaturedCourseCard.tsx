import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart, ArrowRight } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  price: number;
  tech_stack: string[];
  thumbnail: string;
  projects: string[];
  certification: string;
}

interface FeaturedCourseCardProps {
  course: Course;
}

export const FeaturedCourseCard: React.FC<FeaturedCourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-blue-600 shadow-sm">
          ₦{course.price.toLocaleString()}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1 capitalize">
            <BarChart className="w-4 h-4" />
            <span>{course.level}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{course.description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {course.tech_stack.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-medium">
                {tech}
              </span>
            ))}
            {course.tech_stack.length > 4 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-medium">
                +{course.tech_stack.length - 4} more
              </span>
            )}
          </div>
        </div>
        
        <Link 
          to={`/courses/${course.slug}`}
          className="inline-flex items-center justify-center w-full py-3 bg-gray-50 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium group"
        >
          View Course Details
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

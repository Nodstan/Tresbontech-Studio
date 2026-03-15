import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  student: { name: string; course: string };
  description: string;
  technologies: string[];
  image_url: string;
  live_url: string;
  is_featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden group">
        <img 
          src={project.image_url} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a 
            href={project.live_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        {project.is_featured && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-medium">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div>
            <p className="text-sm font-medium text-gray-900">{project.student.name}</p>
            <p className="text-xs text-gray-500">{project.student.course}</p>
          </div>
          <a 
            href={project.live_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
          >
            View Live <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

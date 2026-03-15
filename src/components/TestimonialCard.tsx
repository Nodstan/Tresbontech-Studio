import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  course: string;
  testimonial: string;
  rating: number;
  image: string;
  linkedin_url: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="flex items-center gap-1 mb-6 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-8 flex-grow italic">
        "{testimonial.testimonial}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.course} Graduate</p>
        </div>
      </div>
    </div>
  );
}

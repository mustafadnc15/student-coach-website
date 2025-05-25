import React from 'react';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="flex">{renderStars(testimonial.rating)}</div>
      </div>
      
      <blockquote className="text-gray-700 mb-4 flex-grow">
        "{testimonial.review}"
      </blockquote>
      
      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">{testimonial.studentName}</p>
            <p className="text-sm text-gray-600">
              {testimonial.subject && `${testimonial.subject} • `}
              Coach: {testimonial.coachName}
            </p>
          </div>
          {testimonial.gradeImprovement && (
            <div className="text-right">
              <p className="text-sm font-semibold text-green-600">
                {testimonial.gradeImprovement}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 
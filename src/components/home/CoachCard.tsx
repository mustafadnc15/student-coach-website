import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Coach } from '@/types';

interface CoachCardProps {
  coach: Coach;
}

export const CoachCard: React.FC<CoachCardProps> = ({ coach }) => {
  return (
    <Link href={`/coaches/${coach.id}`} className="block group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-64 w-full bg-gray-200">
          {/* Placeholder for coach image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-4xl text-gray-600">{coach.name.charAt(0)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{coach.name}</h3>
          <p className="text-sm text-blue-600 mb-3">{coach.title}</p>
          
          <p className="text-gray-600 mb-4 line-clamp-2">{coach.shortBio}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {coach.specialties.slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">{coach.yearsOfExperience}+ years exp.</span>
            <span className="text-blue-600 group-hover:text-blue-700 font-medium">
              View Profile →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}; 
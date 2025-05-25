export interface Testimonial {
  id: string;
  studentName: string;
  studentImage?: string;
  coachId: string;
  coachName: string;
  rating: number;
  review: string;
  date: string;
  subject?: string;
  gradeImprovement?: string;
  featured: boolean;
} 
'use client';

import { testimonials } from '@/data/testimonials';
import { Button } from '@/components/ui/Button';
import { Testimonial } from '@/types';
import { useState } from 'react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {testimonial.featured && (
        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full mb-4">
          Öne Çıkan
        </span>
      )}
      
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
          <span className="text-white font-bold text-lg">
            {testimonial.studentName.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{testimonial.studentName}</h3>
          <p className="text-sm text-gray-600">{testimonial.subject}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        {renderStars(testimonial.rating)}
        <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        "{testimonial.review}"
      </p>
      
      {testimonial.gradeImprovement && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
          <p className="text-sm font-medium text-green-800">
            📈 Başarı: {testimonial.gradeImprovement}
          </p>
        </div>
      )}
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Eğitmen: {testimonial.coachName}</span>
        <span>{new Date(testimonial.date).toLocaleDateString('tr-TR')}</span>
      </div>
    </div>
  );
};

export default function TestimonialsPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  
  const featuredTestimonials = testimonials.filter(t => t.featured);
  
  const filteredTestimonials = selectedSubject === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.subject?.toLowerCase().includes(selectedSubject.toLowerCase()));
  
  const subjects = ['all', ...Array.from(new Set(testimonials.map(t => t.subject).filter(Boolean)))];
  
  const subjectLabels: { [key: string]: string } = {
    'all': 'Tümü',
    'Sınav Kaygısı': 'Sınav Kaygısı',
    'Çalışma Teknikleri': 'Çalışma Teknikleri',
    'Stres Yönetimi': 'Stres Yönetimi',
    'Kariyer Danışmanlığı': 'Kariyer Danışmanlığı',
    'Aile Danışmanlığı': 'Aile Danışmanlığı',
    'Motivasyon Koçluğu': 'Motivasyon Koçluğu',
    'Öğrenme Güçlüğü': 'Öğrenme Güçlüğü',
    'Zaman Yönetimi': 'Zaman Yönetimi'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Öğrenci <span className="text-blue-600">Referansları</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Başarılı öğrencilerimizin deneyimlerini okuyun ve siz de onlar gibi 
              hedeflerinize ulaşın. Gerçek başarı hikayeleri, gerçek sonuçlar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Ücretsiz Danışmanlık
              </Button>
              <Button href="/coaches" variant="outline" size="lg">
                Eğitmenlerimizi İnceleyin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">350+</div>
              <div className="text-gray-600 mt-1">Mutlu Öğrenci</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">4.8</div>
              <div className="text-gray-600 mt-1">Ortalama Puan</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600 mt-1">Başarı Oranı</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">150+</div>
              <div className="text-gray-600 mt-1">Aktif Öğrenci</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Öne Çıkan Başarı Hikayeleri</h2>
            <p className="text-lg text-gray-600">
              En etkileyici gelişim gösteren öğrencilerimizin deneyimleri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tüm Referanslar</h2>
            <p className="text-lg text-gray-600 mb-8">
              Alanına göre filtrele ve ilgilendiğin konudaki başarı hikayelerini keşfet
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {subjects.map((subject, index) => (
                <button
                  key={subject || index}
                  onClick={() => setSelectedSubject(subject || 'all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedSubject === subject
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {subject && subjectLabels[subject] ? subjectLabels[subject] : subject}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Bu kategoride henüz referans bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siz de Başarı Hikayenizi Yazın
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Uzman eğitmenlerimizle çalışarak hedeflerinize ulaşın ve siz de 
            başarı hikayenizi bizimle paylaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Hemen Başlayın
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Hizmetlerimizi İnceleyin
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
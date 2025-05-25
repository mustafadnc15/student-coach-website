import { Button } from '@/components/ui/Button';
import { CoachCard } from '@/components/home/CoachCard';
import { TestimonialCard } from '@/components/home/TestimonialCard';
import { coaches } from '@/data/coaches';
import { testimonials } from '@/data/testimonials';

export default function Home() {
  const featuredCoaches = coaches.filter(coach => coach.featured);
  const featuredTestimonials = testimonials.filter(testimonial => testimonial.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Akademik{' '}
              <span className="text-blue-600">Potansiyelinizi</span>{' '}
              Keşfedin
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Başarınız için tutkuyla çalışan uzman psikoloğlardan psikolojik destek. 
              Akademik yolculuklarını dönüştüren 150+ öğrencimize katılın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Ücretsiz Danışmanlık Randevusu
              </Button>
              <Button href="/coaches" variant="outline" size="lg">
                Psikoloğlarımızı Tanıyın
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
              <div className="text-4xl font-bold text-blue-600">6+</div>
              <div className="text-gray-600 mt-1">Uzman Eğitmen</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">150+</div>
              <div className="text-gray-600 mt-1">Mutlu Öğrenci</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600 mt-1">Başarı Oranı</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">4.9★</div>
              <div className="text-gray-600 mt-1">Ortalama Puan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coaches Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Öne Çıkan Psikoloğlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Akademik başarınıza adanmış deneyimli psikoloğlardan destek alın
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCoaches.map((coach) => (
              <CoachCard key={coach.id} coach={coach} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/coaches" variant="outline">
              Tüm Psikoloğları Görüntüle
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Başarınız İçin Neler Yapıyoruz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Benzersiz psikolojik ihtiyaçlarınıza göre özelleştirilmiş kapsamlı destek hizmetleri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Psikolojik Danışmanlık</h3>
              <p className="text-gray-600">Akademik stres, kaygı ve motivasyon sorunları için profesyonel psikolojik destek</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">YKS Psikolojik Hazırlık</h3>
              <p className="text-gray-600">Sınav kaygısı yönetimi ve motivasyon artırma ile YKS başarısı için psikolojik destek</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Çalışma Teknikleri Eğitimi</h3>
              <p className="text-gray-600">Bilimsel yöntemlerle desteklenen etkili öğrenme stratejileri ve zaman yönetimi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Başarı Hikayeleri
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Koçluğumuzun öğrencilerin akademik yolculuklarını nasıl dönüştürdüğünü görün
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/testimonials" variant="outline">
              Daha Fazla Hikaye Okuyun
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Akademik Yolculuğunuzu Dönüştürmeye Hazır mısınız?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bugün uzman eğitmenlerimizden biriyle ücretsiz danışmanlık randevusu alın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Hemen Başlayın
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Daha Fazla Bilgi
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

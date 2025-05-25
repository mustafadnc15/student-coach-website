import { coaches } from '@/data/coaches';
import { Button } from '@/components/ui/Button';
import { CoachCard } from '@/components/home/CoachCard';
import { Coach } from '@/types';

interface CoachDetailCardProps {
  coach: Coach;
}

const CoachDetailCard: React.FC<CoachDetailCardProps> = ({ coach }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl text-gray-600">{coach.name.charAt(0)}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{coach.name}</h3>
            <p className="text-blue-600 font-medium mb-2">{coach.title}</p>
            <p className="text-sm text-gray-600">{coach.shortBio}</p>
          </div>
          {coach.featured && (
            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
              Öne Çıkan
            </span>
          )}
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Uzmanlık Alanları:</h4>
          <div className="flex flex-wrap gap-2">
            {coach.specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Deneyim:</h4>
          <p className="text-sm text-gray-600">{coach.yearsOfExperience}+ yıl profesyonel deneyim</p>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Müsaitlik:</h4>
          <p className="text-sm text-gray-600">{coach.availability}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Sertifikalar:</h4>
          <ul className="space-y-1">
            {coach.certifications.map((cert, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 flex-shrink-0"></span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex gap-3">
          <Button href={`/coaches/${coach.id}`} className="flex-1">
            Detaylı Profil
          </Button>
          <Button href="/contact" variant="outline" className="flex-1">
            Randevu Al
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function CoachesPage() {
  const featuredCoaches = coaches.filter(coach => coach.featured);
  const otherCoaches = coaches.filter(coach => !coach.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Uzman <span className="text-blue-600">Eğitmenlerimiz</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Alanında uzman, deneyimli ve tutkulu eğitmenlerimizle tanışın. 
              Her biri öğrenci başarısı için özel olarak seçilmiş ve eğitilmiştir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Ücretsiz Danışmanlık Randevusu
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Hizmetlerimizi İnceleyin
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
              <div className="text-4xl font-bold text-blue-600">{coaches.length}</div>
              <div className="text-gray-600 mt-1">Uzman Eğitmen</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">
                {Math.round(coaches.reduce((sum, coach) => sum + coach.yearsOfExperience, 0) / coaches.length)}+
              </div>
              <div className="text-gray-600 mt-1">Ortalama Deneyim</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">150+</div>
              <div className="text-gray-600 mt-1">Başarılı Öğrenci</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600 mt-1">Başarı Oranı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coaches */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Öne Çıkan Eğitmenlerimiz</h2>
            <p className="text-lg text-gray-600">
              En deneyimli ve başarı oranı yüksek eğitmenlerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCoaches.map((coach) => (
              <CoachDetailCard key={coach.id} coach={coach} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Coaches */}
      {otherCoaches.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Diğer Eğitmenlerimiz</h2>
              <p className="text-lg text-gray-600">
                Özel uzmanlık alanlarında hizmet veren eğitmenlerimiz
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherCoaches.map((coach) => (
                <CoachDetailCard key={coach.id} coach={coach} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Our Coaches */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Neden Bizim Eğitmenlerimiz?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Uzman Kadro</h3>
              <p className="text-gray-600">
                Alanında uzman, lisansüstü eğitim almış ve sertifikalı eğitmenler
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kanıtlanmış Başarı</h3>
              <p className="text-gray-600">
                Yüzlerce öğrenciyi hedef üniversitelerine yerleştiren deneyim
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kişisel Yaklaşım</h3>
              <p className="text-gray-600">
                Her öğrencinin ihtiyacına özel, bireyselleştirilmiş eğitim planları
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hangi Eğitmen Size Uygun?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Uzman eğitmenlerimizle ücretsiz görüşerek size en uygun eğitmeni belirleyin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Ücretsiz Danışmanlık
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
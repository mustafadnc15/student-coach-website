import { Button } from '@/components/ui/Button';
import { coaches } from '@/data/coaches';
import Image from 'next/image';

export const metadata = {
  title: 'Hakkımızda | Öğrenci Koçluk Merkezi',
  description: 'Psk. Mustafa Dinç liderliğinde 20+ yıl deneyimi ile öğrencilerin akademik başarılarını artıran uzman ekibimizi tanıyın.',
  keywords: 'öğrenci koçluğu, akademik başarı, YKS hazırlık, eğitim koçluğu, Mustafa Dinç',
};

export default function About() {
  const founderCoach = coaches.find(coach => coach.id === 'mustafa-dinc');

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Öğrencilerin akademik potansiyellerini psikolojik destek ile keşfetmelerine yardımcı olmak için tutkuyla çalışan uzman psikolog ekibiyiz.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Misyonumuz
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Her öğrencinin benzersiz potansiyele sahip olduğuna inanıyoruz. Misyonumuz, 
                öğrencilerin bu potansiyellerini psikolojik destek ve rehberlik ile keşfetmelerine 
                ve akademik hedeflerini gerçekleştirmelerine yardımcı olmaktır.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                20 yılı aşkın deneyimimizle, sadece akademik başarıyı değil, aynı zamanda 
                öğrencilerin özgüvenini artırmayı, sınav kaygısını azaltmayı ve yaşam boyu 
                öğrenme becerilerini geliştirmeyi hedefliyoruz.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-600">Başarılı Öğrenci</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-600">Başarı Oranı</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Değerlerimiz</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Her öğrencinin eşsiz potansiyeline saygı</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Kaliteli ve kişiselleştirilmiş psikolojik destek</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Şeffaflık ve güven ilişkisi</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Sürekli gelişim ve yenilik</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      {founderCoach && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kurucumuz ve Baş Psikolog
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Vizyonumuzun arkasındaki deneyimli lider
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-blue-100 to-indigo-100">
                    <div className="flex items-center justify-center">
                      <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-blue-600">
                          {founderCoach.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {founderCoach.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      {founderCoach.title}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h4M9 7h6m-6 4h6m-6 4h6" />
                        </svg>
                        {founderCoach.yearsOfExperience}+ Yıl Deneyim
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        {founderCoach.specialties.join(', ')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Eğitim ve Deneyim
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    {founderCoach.bio}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Eğitim Geçmişi</h4>
                  <ul className="space-y-2">
                    {founderCoach.education.map((edu, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Sertifikalar</h4>
                  <div className="flex flex-wrap gap-2">
                    {founderCoach.certifications.map((cert, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button href="/contact" size="lg">
                  Randevu Alın
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Hikayemiz
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Başlangıç (2003)
                </h3>
                <p className="text-gray-700">
                  Psk. Mustafa Dinç, psikoloji alanındaki uzmanlığını eğitimle birleştirerek 
                  öğrenci koçluğu yolculuğuna başladı. İlk yıllarında bireysel danışmanlık 
                  vererek öğrencilerin hem akademik hem de kişisel gelişimlerine odaklandı.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Büyüme ve Gelişim (2010-2020)
                </h3>
                <p className="text-gray-700">
                  Artan talep üzerine ekibimizi genişlettik. Çocuk psikolojisi, klinik psikoloji, 
                  eğitim psikolojisi ve kariyer danışmanlığı alanlarında uzman psikologlar katılarak 
                  kapsamlı bir psikolojik destek sistemi oluşturduk. Bu dönemde yüzlerce öğrencinin 
                  hedef üniversitelerine yerleşmesine psikolojik destek ile yardımcı olduk.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Bugün ve Gelecek (2021+)
                </h3>
                <p className="text-gray-700">
                  Günümüzde 6 uzman psikolog ile hizmet veren bir ekip olarak, modern 
                  psikoloji tekniklerini geleneksel değerlerle harmanlıyoruz. Teknolojinin 
                  avantajlarını kullanarak her öğrenciye kişiselleştirilmiş psikolojik destek 
                  ve rehberlik deneyimi sunmaya devam ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Yaklaşımımız
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Her öğrencinin başarılı olabileceğine olan inancımızla geliştirdiğimiz metot
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Kişiselleştirilmiş Öğrenme
              </h3>
              <p className="text-gray-700 text-center">
                Her öğrencinin öğrenme stilini analiz ederek ona en uygun öğretim 
                yöntemini belirliyoruz.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Veri Odaklı İlerleme
              </h3>
              <p className="text-gray-700 text-center">
                Düzenli ölçümler ve analizlerle öğrencinin gelişimini takip ediyor, 
                stratejimizi sürekli günceliyoruz.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Aile İşbirliği
              </h3>
              <p className="text-gray-700 text-center">
                Ailelerle düzenli iletişim kurarak evde de destekleyici bir 
                öğrenme ortamı oluşturmalarına yardımcı oluyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bizimle Başarı Yolculuğunuza Başlayın
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            20+ yıllık deneyim ve kanıtlanmış başarı ile akademik hedeflerinize ulaşın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Ücretsiz Danışmanlık
            </Button>
            <Button href="/coaches" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Eğitmenlerimizi Tanıyın
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 
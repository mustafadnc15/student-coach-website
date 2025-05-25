import { services } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{service.icon}</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              {service.popular && (
                <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full mt-1">
                  Popüler
                </span>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">{service.price}</div>
            <div className="text-sm text-gray-500">{service.duration}</div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="space-y-2 mb-6">
          <h4 className="font-semibold text-gray-900">Program İçeriği:</h4>
          <ul className="space-y-1">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Button href="/contact" className="w-full">
          Detaylı Bilgi Al
        </Button>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const popularServices = services.filter(service => service.popular);
  const otherServices = services.filter(service => !service.popular);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Eğitim <span className="text-blue-600">Hizmetlerimiz</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Akademik başarınız için özel olarak tasarlanmış kapsamlı eğitim programları. 
              Her öğrencinin ihtiyacına göre kişiselleştirilmiş çözümler sunuyoruz.
            </p>
            <Button href="/contact" size="lg">
              Ücretsiz Danışmanlık Randevusu
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popüler Programlar</h2>
            <p className="text-lg text-gray-600">
              En çok tercih edilen ve başarı oranı yüksek eğitim programlarımız
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Diğer Hizmetlerimiz</h2>
            <p className="text-lg text-gray-600">
              Özel ihtiyaçlarınıza yönelik ek eğitim ve danışmanlık hizmetleri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hangi Program Size Uygun?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Uzman eğitmenlerimizle ücretsiz görüşerek size en uygun programı belirleyin.
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
    </div>
  );
}
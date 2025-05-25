'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const ContactCard = ({ icon, title, content, action }: {
  icon: React.ReactNode;
  title: string;
  content: string[];
  action?: { label: string; href?: string; onClick?: () => void };
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <div className="space-y-2 mb-4">
      {content.map((line, index) => (
        <p key={index} className="text-gray-600">{line}</p>
      ))}
    </div>
    {action && (
      action.href ? (
        <Button href={action.href} variant="outline" size="sm">
          {action.label}
        </Button>
      ) : (
        <Button onClick={action.onClick} variant="outline" size="sm">
          {action.label}
        </Button>
      )
    )}
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ad ve soyadınızı girmeniz gereklidir.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta adresinizi girmeniz gereklidir.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon numaranızı girmeniz gereklidir.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Konu seçimi yapmanız gereklidir.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesajınızı yazmanız gereklidir.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mesajınız en az 10 karakter olmalıdır.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+905455308970';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:mustafa.dncc2@gmail.com';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bizimle <span className="text-blue-600">İletişime Geçin</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Akademik hedeflerinize ulaşmak için bir adım uzağınızdayız. 
              Uzman eğitmenlerimizle ücretsiz görüşme ayarlamak veya sorularınızı sormak için iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handlePhoneCall} size="lg">
                📞 Hemen Arayın
              </Button>
              <Button href="#contact-form" variant="outline" size="lg">
                ✉️ Mesaj Gönderin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">İletişim Bilgileri</h2>
            <p className="text-lg text-gray-600">
              Size en uygun iletişim kanalını seçerek bizimle iletişime geçebilirsiniz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ContactCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
              title="Telefon"
              content={[
                "+90 545 530 89 70",
                "Pazartesi - Cuma: 09:00 - 18:00",
                "Cumartesi: 09:00 - 15:00"
              ]}
              action={{
                label: "Hemen Ara",
                onClick: handlePhoneCall
              }}
            />

            <ContactCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="E-posta"
              content={[
                "mustafa.dncc2@gmail.com",
                "24 saat içinde yanıt garantisi",
                "Detaylı bilgi ve program içerikleri"
              ]}
              action={{
                label: "E-posta Gönder",
                onClick: handleEmail
              }}
            />

            <ContactCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Ofis Adresi"
              content={[
                "Eğitim Mahallesi, Bilim Sokak No:123",
                "Çankaya/Ankara 06550",
                "Metro: Kızılay istasyonu (5 dk yürüme)"
              ]}
              action={{
                label: "Haritada Görüntüle",
                href: "https://maps.google.com"
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bize Mesaj Gönderin</h2>
            <p className="text-lg text-gray-600">
              Aşağıdaki formu doldurun, size en kısa sürede dönüş yapalım
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mesajınız Gönderildi!</h3>
                <p className="text-gray-600">
                  En kısa sürede size dönüş yapacağız. Teşekkürler!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Ad ve Soyad"
                    placeholder="Adınız ve soyadınız"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    error={errors.name}
                    required
                  />
                  
                  <Input
                    label="E-posta Adresi"
                    type="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    error={errors.email}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Telefon Numarası"
                    type="tel"
                    placeholder="+90 5XX XXX XX XX"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    error={errors.phone}
                    required
                  />

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Konu <span className="text-red-500 ml-1">*</span>
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, subject: e.target.value }));
                        if (errors.subject) {
                          setErrors(prev => ({ ...prev, subject: undefined }));
                        }
                      }}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        errors.subject ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
                      }`}
                      required
                    >
                      <option value="">Konu seçiniz</option>
                      <option value="yks-hazirlik-programi">YKS Hazırlık Programı</option>
                      <option value="calisma-teknikleri-egitimi">Çalışma Teknikleri Eğitimi</option>
                      <option value="motivasyon-stres-yonetimi">Motivasyon ve Stres Yönetimi</option>
                      <option value="universite-tercih-danismanligi">Üniversite Tercih Danışmanlığı</option>
                      <option value="psikolojik-danismanlık">Psikolojik Danışmanlık</option>
                      <option value="ogrenme-guclugu-destegi">Öğrenme Güçlüğü Desteği</option>
                      <option value="aile-danismanligi">Aile Danışmanlığı</option>
                      <option value="diger">Diğer</option>
                    </select>
                    {errors.subject && (
                      <p className="text-sm text-red-600">{errors.subject}</p>
                    )}
                  </div>
                </div>

                <Input
                  label="Mesajınız"
                  type="textarea"
                  placeholder="Hangi konularda yardıma ihtiyacınız var? Hedefleriniz nelerdir? Mevcut durumunuz hakkında bilgi verebilir misiniz?"
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  error={errors.message}
                  rows={6}
                  required
                />

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">Önemli Bilgi:</p>
                      <p>
                        Mesajınızı gönderdikten sonra 24 saat içinde size dönüş yapacağız. 
                        Acil durumlar için doğrudan telefon ile iletişime geçebilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Office Hours & FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office Hours */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Çalışma Saatleri</h3>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Pazartesi - Cuma</span>
                    <span className="text-gray-600">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Cumartesi</span>
                    <span className="text-gray-600">09:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-900">Pazar</span>
                    <span className="text-red-600 font-medium">Kapalı</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Acil Durumlar</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Sınav dönemlerinde ve acil durumlarda aşağıdaki saatlerde de ulaşabilirsiniz:
                  </p>
                  <div className="text-sm text-gray-600">
                    <p>• Hafta sonu: Mesajlaşma ve e-posta</p>
                    <p>• Sınav dönemleri: 24/7 destek</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    İlk görüşme ücretsiz mi?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Evet, ilk danışmanlık görüşmesi tamamen ücretsizdir. Bu görüşmede ihtiyaçlarınızı belirler ve size en uygun programı öneriyoruz.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Online ders seçeneği var mı?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Evet, hem yüz yüze hem de online ders seçeneklerimiz bulunmaktadır. Tercihlerinize göre hibrit eğitim de verebiliyoruz.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Kaç kişilik gruplarla çalışıyorsunuz?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Bireysel dersler ve 2-6 kişilik küçük grup dersleri veriyoruz. Grup büyüklüğü konuya ve seviyeye göre belirlenir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Akademik Hedefinize Ulaşmaya Hazır mısınız?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bugün başlayın ve uzman eğitmenlerimizle farkı yaşayın.
            Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handlePhoneCall} variant="secondary" size="lg">
              📞 +90 545 530 89 70
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Hizmetlerimizi Keşfedin
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 
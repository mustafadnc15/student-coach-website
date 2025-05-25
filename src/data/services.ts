import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'yks-hazirlik-programi',
    title: 'YKS Hazırlık Programı',
    description: 'Sınav kaygısı yönetimi, motivasyon artırma ve etkili çalışma stratejileri ile YKS başarısı için psikolojik destek.',
    features: [
      'Sınav kaygısı tedavisi',
      'Motivasyon koçluğu',
      'Zaman yönetimi eğitimi',
      'Hedef belirleme ve planlama',
      'Stres azaltma teknikleri',
      'Özgüven geliştirme'
    ],
    duration: '6 aylık program',
    price: '₺800/ay',
    icon: '🎯',
    popular: true
  },
  {
    id: 'calisma-teknikleri-egitimi',
    title: 'Çalışma Teknikleri Eğitimi',
    description: 'Bilimsel yöntemlerle desteklenen etkili öğrenme stratejileri ve çalışma becerilerinin geliştirilmesi.',
    features: [
      'Aktif öğrenme teknikleri',
      'Hafıza geliştirme yöntemleri',
      'Not alma sistemleri',
      'Tekrar stratejileri',
      'Konsantrasyon artırma',
      'Çalışma planı oluşturma'
    ],
    duration: '3 aylık program',
    price: '₺600/ay',
    icon: '📚',
    popular: true
  },
  {
    id: 'motivasyon-stres-yonetimi',
    title: 'Motivasyon ve Stres Yönetimi',
    description: 'Akademik stres ve kaygı yönetimi, motivasyon artırıcı teknikler ve duygusal destek.',
    features: [
      'Stres azaltma teknikleri',
      'Motivasyon koçluğu',
      'Nefes ve rahatlama egzersizleri',
      'Pozitif düşünce geliştirme',
      'Özgüven artırma',
      'Duygusal düzenleme'
    ],
    duration: '2 aylık program',
    price: '₺500/ay',
    icon: '🧘‍♂️',
    popular: true
  },
  {
    id: 'universite-tercih-danismanligi',
    title: 'Üniversite Tercih Danışmanlığı',
    description: 'Kişilik analizi ve kariyer planlaması ile doğru üniversite ve bölüm seçimi için psikolojik rehberlik.',
    features: [
      'Kişilik analizi ve testi',
      'Kariyer yönlendirme',
      'Üniversite araştırması',
      'Tercih stratejisi geliştirme',
      'Karar verme süreci desteği',
      'Aile danışmanlığı'
    ],
    duration: 'Tek seferlik paket',
    price: '₺1.200',
    icon: '🎓',
    popular: false
  },
  {
    id: 'psikolojik-danismanlık',
    title: 'Psikolojik Danışmanlık',
    description: 'Bireysel psikolojik destek ve akademik sorunlara yönelik profesyonel terapi hizmetleri.',
    features: [
      'Bireysel psikolojik terapi',
      'Aile danışmanlığı',
      'Grup terapisi seansları',
      'Kriz müdahalesi',
      'Akademik sorun çözme',
      'Kişisel gelişim desteği'
    ],
    duration: '50 dakika seans',
    price: '₺300/seans',
    icon: '💭',
    popular: false
  },
  {
    id: 'ogrenme-guclugu-destegi',
    title: 'Öğrenme Güçlüğü Desteği',
    description: 'Öğrenme güçlükleri yaşayan öğrenciler için özelleştirilmiş psikolojik destek ve eğitim stratejileri.',
    features: [
      'Öğrenme güçlüğü değerlendirmesi',
      'Bireysel eğitim planı',
      'Özel öğrenme stratejileri',
      'Aile eğitimi ve desteği',
      'Okul işbirliği',
      'İlerleme takibi'
    ],
    duration: '4 aylık program',
    price: '₺900/ay',
    icon: '🎨',
    popular: false
  },
  {
    id: 'aile-danismanligi',
    title: 'Aile Danışmanlığı',
    description: 'Eğitim sürecinde aile-öğrenci ilişkilerinin güçlendirilmesi ve akademik başarı için aile desteği.',
    features: [
      'Aile-öğrenci iletişimi',
      'Ebeveyn rehberliği',
      'Ev ortamı düzenleme',
      'Akademik destek teknikleri',
      'Motivasyon artırma',
      'Çatışma çözme'
    ],
    duration: '2 aylık program',
    price: '₺700/ay',
    icon: '👨‍👩‍👧‍👦',
    popular: true
  }
]; 
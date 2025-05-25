import { Coach } from '@/types';

export const coaches: Coach[] = [
  {
    id: 'mustafa-dinc',
    name: 'Psk. Mustafa Dinç',
    title: 'Baş Eğitmen ve Kurucu',
    specialties: ['YKS Psikolojik Hazırlık', 'Psikolojik Danışmanlık', 'Motivasyon Koçluğu'],
    bio: 'Psk. Mustafa Dinç, 20 yılı aşkın deneyimi ile eğitim psikolojisi alanında öncü isimlerden biridir. Psikoloji lisansı ve eğitim psikolojisi yüksek lisansı ile öğrencilerin akademik başarılarını psikolojik destek yoluyla artırmanın yanı sıra kişisel gelişimlerine de odaklanır. YKS\'de binlerce öğrencisine psikolojik destek sağlayarak hedef üniversitelerine yerleşmelerine yardımcı olmuştur.',
    shortBio: 'Psikoloji lisansı ve 20+ yıl eğitim psikolojisi deneyimi.',
    image: '/images/coaches/mustafa-dinc.jpg',
    yearsOfExperience: 20,
    education: ['Yüksek Lisans - Eğitim Psikolojisi, İstanbul Üniversitesi', 'Lisans - Psikoloji, Boğaziçi Üniversitesi'],
    certifications: ['Sertifikalı Yaşam Koçu', 'YKS Psikolojik Destek Uzmanı', 'Motivasyon Eğitmeni'],
    availability: 'Pazartesi-Cuma, 09:00-18:00',
    featured: true
  },
  {
    id: 'ayse-kaya',
    name: 'Dr. Ayşe Kaya',
    title: 'Çocuk ve Ergen Psikoloğu',
    specialties: ['Çocuk Psikolojisi', 'Sınav Kaygısı', 'Öğrenme Güçlükleri'],
    bio: 'Dr. Ayşe Kaya, çocuk ve ergen psikolojisi alanında doktora derecesi ile 15 yıldır öğrencilere hizmet vermektedir. Sınav kaygısını azaltan ve öğrenme motivasyonunu artıran psikolojik müdahaleler konusunda uzmanlaşmıştır. Öğrenme güçlükleri yaşayan öğrencilere özelleştirilmiş destek sağlar.',
    shortBio: 'Çocuk Psikolojisi Doktoru, 15+ yıl klinik deneyim.',
    image: '/images/coaches/ayse-kaya.jpg',
    yearsOfExperience: 15,
    education: ['Doktora - Çocuk Psikolojisi, ODTÜ', 'Yüksek Lisans - Klinik Psikoloji, İTÜ', 'Lisans - Psikoloji, Hacettepe Üniversitesi'],
    certifications: ['Sertifikalı Çocuk Psikoloğu', 'Öğrenme Güçlüğü Uzmanı'],
    availability: 'Pazartesi-Cuma, 09:00-18:00',
    featured: true
  },
  {
    id: 'mehmet-ozkan',
    name: 'Mehmet Özkan',
    title: 'Çalışma Teknikleri ve Motivasyon Uzmanı',
    specialties: ['Çalışma Teknikleri', 'Zaman Yönetimi', 'Sınav Kaygısı Tedavisi'],
    bio: 'Mehmet Özkan, eğitim psikolojisi alanındaki uzmanlığı ile öğrencilerin etkili çalışma stratejileri geliştirmesine psikolojik destek sağlar. Bilişsel davranışçı terapi teknikleri ve motivasyon psikolojisi bir araya getirerek öğrencilerin akademik performanslarını artırır.',
    shortBio: 'Eğitim psikolojisi uzmanı, çalışma teknikleri koçu.',
    image: '/images/coaches/mehmet-ozkan.jpg',
    yearsOfExperience: 10,
    education: ['Yüksek Lisans - Eğitim Psikolojisi, Ankara Üniversitesi', 'Lisans - Psikoloji, Bilkent Üniversitesi'],
    certifications: ['Sertifikalı Eğitim Psikoloğu', 'Bilişsel Davranışçı Terapi Uzmanı'],
    availability: 'Salı-Cumartesi, 10:00-19:00',
    featured: true
  },
  {
    id: 'zeynep-demir',
    name: 'Zeynep Demir',
    title: 'Klinik Psikolog ve Terapi Uzmanı',
    specialties: ['Klinik Psikoloji', 'Bireysel Terapi', 'Stres Yönetimi'],
    bio: 'Zeynep Demir, klinik psikoloji alanındaki derin bilgisi ile öğrencilerin duygusal ve psikolojik ihtiyaçlarını karşılamakta uzmanlaşmıştır. Bireysel terapi seansları ve stres yönetimi teknikleri ile öğrencilere kapsamlı psikolojik destek sağlar.',
    shortBio: 'Klinik psikolog, bireysel terapi uzmanı.',
    image: '/images/coaches/zeynep-demir.jpg',
    yearsOfExperience: 8,
    education: ['Yüksek Lisans - Klinik Psikoloji, İstanbul Üniversitesi', 'Lisans - Psikoloji, Boğaziçi Üniversitesi'],
    certifications: ['Sertifikalı Klinik Psikolog', 'Bireysel Terapi Uzmanı'],
    availability: 'Pazartesi-Perşembe, 11:00-19:00',
    featured: true
  },
  {
    id: 'ahmet-yilmaz',
    name: 'Dr. Ahmet Yılmaz',
    title: 'Danışmanlık Psikoloğu ve Kariyer Uzmanı',
    specialties: ['Kariyer Danışmanlığı', 'Kişilik Analizi', 'Üniversite Tercih Psikolojisi'],
    bio: 'Dr. Ahmet Yılmaz, danışmanlık psikolojisi alanındaki araştırma geçmişini psikolojik danışmanlık pratiği ile birleştirerek öğrencilerin kariyer kararlarında psikolojik destek sağlar. Kişilik testleri ve psikolojik değerlendirmeler ile doğru üniversite ve meslek seçiminde rehberlik eder.',
    shortBio: 'Danışmanlık Psikolojisi Doktoru, kariyer uzmanı.',
    image: '/images/coaches/ahmet-yilmaz.jpg',
    yearsOfExperience: 12,
    education: ['Doktora - Danışmanlık Psikolojisi, Bilkent Üniversitesi', 'Lisans - Psikoloji, ODTÜ'],
    certifications: ['Sertifikalı Kariyer Danışmanı', 'Kişilik Analizi Uzmanı'],
    availability: 'Çarşamba-Pazar, 10:00-18:00',
    featured: false
  },
  {
    id: 'fatma-arslan',
    name: 'Fatma Arslan',
    title: 'Aile Danışmanı ve Gelişim Psikoloğu',
    specialties: ['Aile Danışmanlığı', 'Ergen Gelişimi', 'Ebeveyn Rehberliği'],
    bio: 'Fatma Arslan, yüzlerce aileye eğitim sürecinde psikolojik destek sağlamıştır. Aile dinamikleri ve ergen gelişimi konularında uzmanlığı ile hem öğrencilere hem de ailelerine kapsamlı psikolojik danışmanlık hizmetleri sunar. Akademik başarı için aile desteğinin önemini vurgular.',
    shortBio: 'Aile danışmanı, 10+ yıl gelişim psikolojisi deneyimi.',
    image: '/images/coaches/fatma-arslan.jpg',
    yearsOfExperience: 10,
    education: ['Yüksek Lisans - Rehberlik ve Psikolojik Danışmanlık, Gazi Üniversitesi', 'Lisans - Psikoloji, Ankara Üniversitesi'],
    certifications: ['Sertifikalı Aile Danışmanı', 'Ergen Gelişimi Uzmanı'],
    availability: 'Pazartesi-Cuma, 12:00-20:00',
    featured: false
  }
]; 
import type { Product } from "@/content/products";
import type { en } from "./en";

/**
 * Turkish dictionary. Brand HUD strings (mono codes, status badges,
 * telemetry) intentionally stay English in every locale.
 */

const productsTr: Product[] = [
  {
    slug: "anthro-r3",
    code: "R3",
    name: "AnthRo R3",
    status: "development",
    tagline: "Genel amaçlı insansı platform.",
    summary:
      "Yapılandırılmamış insan ortamları için tasarlanmış, uçtan uca AnthRo'da geliştirilen tam gövdeli iki ayaklı robot.",
    description:
      "R3, üçüncü nesil insansı gövdemizdir. Özel tasarım eyleyicileri, şirket içi sensör füzyonunu ve kilohertz temposunda tüm vücut kontrol yığınını tek bir sahaya çıkabilir platformda birleştirir — lojistik, endüstriyel ve insanlarla iç içe ortamlarda çalışmak üzere tasarlandı.",
    specs: [
      { label: "Boy", value: "1,72 m" },
      { label: "Kütle", value: "62 kg" },
      { label: "Faydalı yük", value: "20 kg" },
      { label: "Serbestlik derecesi", value: "32+" },
      { label: "Çalışma süresi", value: "4 sa kesintisiz" },
      { label: "Bağlantı", value: "Wi-Fi 6E · 5G" },
    ],
    metrics: [
      { value: "1kHz", label: "Kontrol döngüsü" },
      { value: "32+", label: "Serbestlik derecesi" },
      { value: "<10ms", label: "Algı gecikmesi" },
      { value: "100%", label: "Şirket içi yığın" },
    ],
    applications: [
      { code: "LOG-01", title: "Lojistik ve depo", body: "Al, yerleştir, ayıkla, taşı." },
      { code: "IND-02", title: "Endüstriyel iş", body: "Hat üzerinde hassas görevler." },
      { code: "FAC-04", title: "Tesis operasyonları", body: "Bakım ve izleme." },
    ],
    views: [
      { id: "front", label: "Ön", code: "R3-F", src: "/images/tech-schematic-960.avif", width: 960, height: 960 },
      { id: "side", label: "Yan", code: "R3-S", src: "/images/tech-schematic-side-960.avif", width: 960, height: 960 },
      { id: "cutaway", label: "Kesit", code: "R3-X", src: "/images/tech-schematic-cutaway-960.avif", width: 960, height: 960 },
    ],
  },
];

export const tr: typeof en = {
  meta: {
    home: {
      title: "AnthRo Industries — Yapay Zekâ Artık Fiziksel",
      description:
        "AnthRo Industries genel amaçlı insansı robotlar tasarlıyor ve üretiyor — donanım, zekâ ve kontrol, tek sistem olarak mühendislik ediliyor.",
    },
    about: {
      title: "Hakkımızda",
      description:
        "AnthRo Industries, uzun vade için genel amaçlı insansı robotlar inşa ediyor — İstanbul'da uçtan uca mühendislik.",
    },
    technology: {
      title: "Teknoloji",
      description:
        "İnsansı robotik, yapay zekâ sistemleri, otonomi, robotik yazılım, fiziksel zekâ ve simülasyon — AnthRo'da tek sistem olarak tasarlanıyor.",
    },
    products: {
      title: "Ürünler",
      description: "AnthRo teknoloji programları — genel amaçlı insansı platformlardan oluşan R Serisi.",
    },
    research: {
      title: "Araştırma",
      description:
        "AnthRo'da pekiştirmeli öğrenme, görü-dil-eylem modelleri, robot öğrenimi, navigasyon, insan-robot etkileşimi ve çok etmenli sistemler.",
    },
    careers: {
      title: "Kariyer",
      description:
        "AnthRo Industries'e katılın — küçük ekipler, zor problemler, tam sahiplik. İstanbul'da insansı robot mühendisliği.",
    },
    contact: {
      title: "İletişim",
      description: "AnthRo Industries'e ulaşın — iş birlikleri, basın ve kariyer.",
    },
  },

  nav: {
    links: [
      { label: "Teknoloji", href: "/technology/" },
      { label: "Ürünler", href: "/products/" },
      { label: "Araştırma", href: "/research/" },
      { label: "Hakkımızda", href: "/about/" },
      { label: "Kariyer", href: "/careers/" },
    ],
    contact: "İletişim",
  },

  footer: {
    mission:
      "Genel amaçlı insansı robotlar — donanım, zekâ ve kontrol, tek sistem olarak tasarlanır.",
    columns: [
      {
        title: "Şirket",
        links: [
          { label: "Hakkımızda", href: "/about/" },
          { label: "Kariyer", href: "/careers/" },
          { label: "İletişim", href: "/contact/" },
        ],
      },
      {
        title: "Çalışmalar",
        links: [
          { label: "Teknoloji", href: "/technology/" },
          { label: "Ürünler", href: "/products/" },
          { label: "Araştırma", href: "/research/" },
        ],
      },
    ],
  },

  home: {
    hero: {
      eyebrow: "Anthropomorphic Robotic Industries",
      titlePre: "Yapay Zekâ Artık",
      titleGlow: "Fiziksel.",
      sub: "AnthRo Industries genel amaçlı insansı robotlar tasarlıyor ve üretiyor — donanımı, zekâyı ve kontrolü tek bir sistem olarak bir araya getiriyor.",
      ctaPrimary: "R3 Platformunu Keşfet",
      ctaSecondary: "Teknolojimiz",
    },
    mission: {
      statement:
        "Önümüzdeki elli yıl boyunca insanlığın yanı başında çalışacak makineleri inşa ediyoruz.",
      stats: [
        { value: "1kHz", label: "Tüm vücut kontrol döngüsü" },
        { value: "32+", label: "Serbestlik derecesi" },
        { value: "100%", label: "Şirket içi teknoloji yığını" },
      ],
    },
    platform: { label: "Amiral Platform", viewProgram: "Programı İncele" },
    pillars: { label: "Teknoloji", title: "Tek sistem. Uçtan uca mühendislik." },
    applications: { label: "Saha", title: "İşin gerçekten yapıldığı yerler için tasarlandı." },
    research: { label: "Araştırma", title: "Fiziksel zekâyı ileri taşıyoruz.", cta: "Tüm Araştırma Alanları" },
    ctaBand: { line1: "Gelecek kendiliğinden gelmez.", line2: "İnşa edilir.", join: "AnthRo'ya Katıl", contact: "İletişim" },
  },

  about: {
    header: {
      label: "Biz Kimiz",
      titlePre: "Uzun Vade İçin ",
      titleGlow: "Kurulduk.",
      lede: "Dijital zekâ görmeyi, okumayı ve akıl yürütmeyi öğrendi. Eyleme geçmeyi öğrenmedi. AnthRo bu boşluğu kapatmak için var — zekâya, insanların kurduğu dünyada işe yarar iş çıkarabilecek bir beden kazandırmak için.",
    },
    vision: { label: "Vizyon", title: "R Serisi yol haritası." },
    principlesSection: { label: "İlkeler", title: "Nasıl mühendislik yapıyoruz." },
    istanbul: { pre: "İstanbul'da tasarlandı.", post: "Dünya için üretildi." },
    timeline: [
      {
        year: "2023",
        title: "Kuruluş",
        body: "AnthRo Industries İstanbul'da kuruldu. İlk eyleyici prototipleri ve kontrol yığınının temelleri atıldı.",
      },
      {
        year: "2024",
        title: "R Serisi başlıyor",
        body: "İlk tam gövdeli prototipler yürüdü. Şirket içi simülasyon hattı devreye girdi.",
      },
      {
        year: "2025",
        title: "R3 platformu",
        body: "Üçüncü nesil gövde; eyleyicileri, algıyı ve 1kHz tüm vücut kontrolünü sahaya çıkabilir tek bir sistemde birleştirdi.",
      },
      {
        year: "2026 →",
        title: "Sahaya doğru",
        body: "Lojistik ve endüstriyel ortamlarda pilot programlar. R4 programı başladı.",
      },
      {
        year: "Sonrası",
        title: "Genel amaçlı fiziksel emek",
        body: "Ölçekli bedenlenmiş otonomi — insansı platformların iş yerinde bilgisayarlar kadar olağan olduğu bir gelecek.",
      },
    ],
    principles: [
      {
        code: "P-01",
        title: "Dikey Entegrasyon",
        body: "Eyleyiciler, elektronik, yazılım, zekâ — birlikte tasarlanır, şirket içinde üretilir. Performans, entegrasyonda yaşar.",
      },
      {
        code: "P-02",
        title: "Mimaride Güvenlik",
        body: "Güvenlik bir özellik katmanı değildir. İlk satırdan itibaren eyleyicilere, kontrol yığınına ve davranış modellerine tasarlanır.",
      },
      {
        code: "P-03",
        title: "Uzun Vadeli Kararlılık",
        body: "İnsansı robotik on yılların işidir. Mühendislik ve şirket kararlarımızı bu saate göre veririz.",
      },
      {
        code: "P-04",
        title: "Mühendislik Dürüstlüğü",
        body: "Demo kolaydır; saha zordur. Makinenin gerçekte yapabildiğini söyleriz, render'ın ima ettiğini değil.",
      },
    ],
  },

  technology: {
    header: {
      label: "Teknoloji",
      titlePre: "Tek Sistem. ",
      titleGlow: "Uçtan Uca.",
      lede: "İnsansı bir robot, alt sistemler yığını değildir. Eyleyici, algı, kontrol ve zekâ ancak birlikte tasarlandığında performans gösterir — bu yüzden hepsini biz geliştiriyoruz.",
    },
    pillars: [
      {
        code: "SYS-01",
        title: "İnsansı Robotik",
        headline: "İnsanların kurduğu dünya için tasarlanmış bir makine.",
        body: "Kapılar, merdivenler, raflar, aletler — fiziksel dünya insan formuna göre şekillendi. Tam gövdeli iki ayaklı platformlarımızı özel yüksek torklu eyleyiciler ve insan ölçeğinde erişimle tasarlıyoruz; böylece devreye almak, ortamı yeniden inşa etmeyi gerektirmiyor.",
        capabilities: ["Özel tasarım döner eyleyiciler", "32+ serbestlik derecesi", "İnsan ölçeğinde kinematik"],
        image: { src: "/images/hero-robot-960.avif", width: 960, height: 540, alt: "AnthRo R3 insansı robot" },
      },
      {
        code: "SYS-02",
        title: "Yapay Zekâ Sistemleri",
        headline: "Davranış yazılmaz, öğrenilir.",
        body: "Davranış modellerimiz büyük ölçekli gösterim ve simülasyon verisiyle eğitilir, ardından robot üzerinde çalışacak biçimde damıtılır. Manipülasyonu, hareketi ve görev akıl yürütmesini aynı temel model ailesi sürer — platform genelinde tek model ailesi.",
        capabilities: ["Kontrol için temel modeller", "Robot üzerinde çıkarım", "Sürekli filo öğrenimi"],
      },
      {
        code: "SYS-03",
        title: "Otonomi",
        headline: "Kablosuz, saatlerce gerçek iş.",
        body: "Algı, haritalama, görev planlama ve toparlanma davranışları tek bir otonomi yığını olarak çalışır. Robot dinamik mekânlarda konumunu bulur, uzun ufuklu görevleri sıralar ve yalnızca gerektiğinde yardım ister.",
        capabilities: ["Dinamik ortamda SLAM", "Uzun ufuklu görev planlama", "Kontrollü hata toparlama"],
      },
      {
        code: "SYS-04",
        title: "Robotik Yazılım",
        headline: "Kilohertz'lik bir kalp atışı.",
        body: "Tüm vücut kontrolü, katı gerçek zamanlı bir çekirdekte 1kHz'de çalışır; algıdan eyleme gecikme on milisaniyenin altındadır. Sürücülerden ara katmana, kontrolden araçlara her satır şirket içinde yazılır.",
        capabilities: ["1kHz tüm vücut kontrolü", "<10ms algı gecikmesi", "%100 şirket içi yığın"],
      },
      {
        code: "SYS-05",
        title: "Fiziksel Zekâ",
        headline: "Eline alet verebileceğiniz zekâ.",
        body: "Gerçek dünyada manipülasyon kuvvet, esneklik ve dokunma ister. El ve kollarımız, eklem tork algısını öğrenilmiş temas politikalarıyla birleştirir — kavramak ile ustaca kullanmak arasındaki fark budur.",
        capabilities: ["Temas yoğun manipülasyon", "Kuvvet uyumlu kontrol", "Öğrenilmiş dokunsal politikalar"],
        image: { src: "/images/robot-hand-960.avif", width: 960, height: 1707, alt: "Eklemli parmaklara sahip robotik el" },
      },
      {
        code: "SYS-06",
        title: "Simülasyon ve Dijital İkizler",
        headline: "İlk adımdan önce bir milyon saat.",
        body: "Her davranış, donanımın dijital ikizine karşı fizik doğruluğu yüksek simülasyonda eğitilir, sonra gerçek robota aktarılır. Simülasyondan gerçeğe geçiş burada bir araştırma sorusu değil — üretim hattının kendisidir.",
        capabilities: ["Fizik doğruluğu yüksek ikiz", "Devasa paralel eğitim", "Sıfır atışla gerçeğe aktarım"],
        image: { src: "/images/tech-schematic-cutaway-960.avif", width: 960, height: 960, alt: "R3 kesit şeması" },
      },
    ],
  },

  products: {
    header: {
      label: "Ürünler",
      titlePre: "Teknoloji ",
      titleGlow: "Programları.",
      lede: "R Serisi'ndeki her platform eksiksiz bir programdır: donanım, zekâ ve kontrol tek sistem olarak geliştirilir; her nesil bir sonrakinin üzerine birikir.",
    },
    program: "Program",
    viewProgram: "Programı İncele",
    r4: {
      code: "R4",
      name: "AnthRo R4",
      summary: "Halef platform aktif geliştirme aşamasında. Program ayrıntıları paylaşılmıyor.",
    },
    futureSlot: "R Serisi yol haritası devam ediyor — gelecek platformlar tanım aşamasında",
    detail: {
      platformLabel: "Genel Amaçlı İnsansı Platform",
      specsLabel: "Teknik Özellikler",
      specsTitle: "Platform verileri.",
      deploymentLabel: "Saha",
      deploymentTitle: (code: string) => `${code} nerede çalışır.`,
      ctaTitle: (code: string) => `${code} programına ortak olun.`,
      ctaSub: "Lojistik ve endüstride az sayıda saha ortağıyla çalışıyoruz.",
      ctaButton: "AnthRo ile İletişime Geçin",
    },
    items: productsTr,
  },

  research: {
    header: {
      label: "Araştırma",
      titlePre: "Fiziksel Zekâyı ",
      titleGlow: "İleri Taşıyoruz.",
      lede: "Altı araştırma programı, tek koşul: her şey robotun üzerinde çalışmalı. Daha az yayımlıyor, daha çok sahaya çıkarıyoruz.",
    },
    doctrineLabel: "R&D Doctrine",
    doctrinePre: "AnthRo'da araştırma keşif için değildir.",
    doctrinePost: "Donanıma gider.",
    areas: [
      {
        code: "RL-01",
        title: "Tüm Vücut Kontrolü için Pekiştirmeli Öğrenme",
        body: "Devasa paralel simülasyonda eğitilen; zemine, yük değişimine ve dış itkilere dayanıklı hareket ve denge politikaları. Politikalar robot üzerinde kontrol hızında çalışır.",
      },
      {
        code: "VLA-02",
        title: "Görü-Dil-Eylem Modelleri",
        body: "Doğal dil komutunu ve kamera gözlemini doğrudan motor komutlarına çeviren modeller. Tek komut, tek gösterim, tek devreye alma.",
      },
      {
        code: "RL-03",
        title: "Robot Öğrenimi ve Taklit",
        body: "İnsan gösteriminden ölçekli manipülasyon öğrenimi — teleoperasyon, video ve kinestetik öğretim, büyüyen tek bir beceri kütüphanesini besler.",
      },
      {
        code: "NAV-04",
        title: "Yapılandırılmamış Ortamlarda Navigasyon",
        body: "Saat başı değişen mekânlar için haritalama ve hareket planlama: vardiya ortasındaki depolar, fabrika zeminleri, kamusal binalar. İşaretçi yok, ray yok.",
      },
      {
        code: "HRI-05",
        title: "İnsan-Robot Etkileşimi",
        body: "İnsanların yakınında çalışan robotlar okunabilir olmalı. Niyet sinyalleşmesini, insan çevresinde güvenli hareketi ve operatörlerin gerçekten güvendiği arayüzleri çalışıyoruz.",
      },
      {
        code: "MAS-06",
        title: "Çok Etmenli Koordinasyon",
        body: "Haritaları, becerileri ve görev kuyruklarını paylaşan filolar. Bir robotun sahada öğrendiğini, sabaha bütün robotlar bilir.",
      },
    ],
  },

  careers: {
    header: {
      label: "Kariyer",
      titlePre: "Henüz Var Olmayanı ",
      titleGlow: "İnşa Et.",
      lede: "Küçük ekipler. Zor problemler. Tam sahiplik. İşinin ayağa kalkıp yürümesini isteyen mühendisleri arıyoruz.",
    },
    howWeWork: "Nasıl Çalışıyoruz",
    disciplinesSection: { label: "Açık Disiplinler", title: "Hangi alanlarda işe alıyoruz." },
    apply: "Başvur",
    applySubject: "Başvuru",
    istanbulNote: "İstanbul, Türkiye — taşınma desteği sağlanır",
    istanbulPre: "Laboratuvar İstanbul'da.",
    istanbulPost: "Misyon her yerde.",
    values: [
      {
        title: "Küçük ekipler",
        body: "Her sistemin üzerinde bir isim yazar. Sahiplik tamdır — itibar da.",
      },
      {
        title: "Zor problemler",
        body: "İki ayaklı hareket, temas yoğun manipülasyon, gerçek zamanlı öğrenilmiş kontrol. Burada çözülmüş problem yok.",
      },
      {
        title: "Donanım gerçeği",
        body: "Simülasyon hattır; hakem robottur. İş, ya ayakta duran ya da düşen bir makineye gider.",
      },
      {
        title: "Uzun ufuk",
        body: "Demo günleri için değil, on yıllar için inşa ediyoruz. Mühendislik kararları buna göre alınır.",
      },
    ],
    disciplines: [
      {
        code: "CTL",
        title: "Kontrol Mühendisliği",
        blurb: "Tüm vücut kontrolü, durum kestirimi, katı gerçek zamanlı sistemler.",
      },
      {
        code: "MEC",
        title: "Eyleyici ve Mekatronik",
        blurb: "Eyleyici tasarımı, aktarma sistemleri, yapısal mühendislik.",
      },
      {
        code: "MLR",
        title: "Makine ve Robot Öğrenimi",
        blurb: "Ölçekli pekiştirmeli öğrenme, taklit öğrenimi, görü-dil-eylem modelleri.",
      },
      {
        code: "PER",
        title: "Algı",
        blurb: "Sensör füzyonu, SLAM, gerçek zamanlı sahne anlama.",
      },
      {
        code: "EMB",
        title: "Gömülü Sistemler",
        blurb: "Aygıt yazılımı, motor sürücüleri, robot üstü hesaplama mimarisi.",
      },
      {
        code: "SIM",
        title: "Simülasyon",
        blurb: "Fizik motorları, dijital ikizler, devasa paralel eğitim altyapısı.",
      },
    ],
  },

  contact: {
    header: {
      label: "İletişim",
      titlePre: "Bağlantıyı ",
      titleGlow: "Başlat.",
      lede: "İnsanların okuduğu tek bir kanal. Ne inşa ettiğinizi, nereye konuşlandıracağınızı ya da neyi haberleştirdiğinizi anlatın.",
    },
    channel: "Doğrudan Kanal",
    purposes: "İş Birlikleri · Basın · Kariyer",
    copyLabel: "E-posta adresini kopyala",
  },
};

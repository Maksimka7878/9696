import {
  NavItem,
  TourDate,
  GalleryItem,
  TimelineItem,
  WhyVisitImage,
  TrackItem,
  FAQItem
} from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'ГЛАВНАЯ', href: '#hero' },
  { label: 'О ГРУППЕ', href: '#about' },
  { label: 'ТРЕК-ЛИСТ', href: '#tracklist' },
  { label: 'ИСТОРИЯ', href: '#timeline' },
  { label: 'МЕДИА', href: '#media' },
  { label: 'КОЛЛЕКТИВ', href: '#collective' },
  { label: 'FAQ', href: '#faq' },
  { label: 'КОНТАКТЫ', href: '#contact' },
];

export const TOUR_DATES: TourDate[] = [
  { id: 1, date: '24 ОКТ', city: 'МОСКВА', venue: 'Adrenaline Stadium', soldOut: true },
  { id: 2, date: '28 ОКТ', city: 'САНКТ-ПЕТЕРБУРГ', venue: 'A2 Green Concert', soldOut: false },
  { id: 3, date: '05 НОЯ', city: 'ЕКАТЕРИНБУРГ', venue: 'Tele-Club', soldOut: false },
  { id: 4, date: '12 НОЯ', city: 'КАЗАНЬ', venue: 'Korston Club', soldOut: false },
  { id: 5, date: '18 НОЯ', city: 'НОВОСИБИРСК', venue: 'Expo Centre', soldOut: true },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop',
    title: 'Neon Pulse',
    type: 'image',
    width: 'narrow'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1200&auto=format&fit=crop',
    title: 'Crowd Control',
    type: 'image',
    width: 'wide'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1514525253440-b393452e3383?q=80&w=800&auto=format&fit=crop',
    title: 'Rhythm Core',
    type: 'image',
    width: 'medium'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800&auto=format&fit=crop',
    title: 'Backstage',
    type: 'image',
    width: 'narrow'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1459749411177-0473ef716175?q=80&w=800&auto=format&fit=crop',
    title: 'Soundcheck',
    type: 'video',
    width: 'medium'
  },
  {
    id: 6,
    url: '/image/video9696.mp4',
    title: 'Show 9696',
    type: 'video',
    width: 'wide'
  },
  {
    id: 7,
    url: '/image/ArtemPol.webp',
    title: 'Artem',
    type: 'image',
    width: 'narrow'
  },
  {
    id: 8,
    url: '/image/grim_solo.mp4',
    title: 'Grim Solo',
    type: 'video',
    width: 'medium'
  },
  {
    id: 9,
    url: '/image/Gleb.webp',
    title: 'Gleb',
    type: 'image',
    width: 'narrow'
  },
  {
    id: 10,
    url: '/image/grim_yeam_video.mp4',
    title: 'Grim Team',
    type: 'video',
    width: 'wide'
  },
  {
    id: 11,
    url: '/image/KonstantinKuz.webp',
    title: 'Konstantin',
    type: 'image',
    width: 'narrow'
  },
  {
    id: 12,
    url: '/image/grim1.mp4',
    title: 'Grim Highlight',
    type: 'video',
    width: 'medium'
  },
  {
    id: 13,
    url: '/image/MaryaPon.webp',
    title: 'Marya',
    type: 'image',
    width: 'narrow'
  },
  {
    id: 14,
    url: '/image/TatyanaKr.webp',
    title: 'Tatyana',
    type: 'image',
    width: 'narrow'
  },
  {
    id: 15,
    url: '/image/VV.webp',
    title: 'Valery Voloshin',
    type: 'image',
    width: 'medium'
  },
  {
    id: 16,
    url: '/image/VeronikaLis.webp',
    title: 'Veronika',
    type: 'image',
    width: 'narrow'
  },
  {
    id: 17,
    url: '/image/baraban.webp',
    title: 'Drums',
    type: 'image',
    width: 'wide'
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  { year: '1996', description: 'Основание коллектива в гараже на окраине Волгограда. Первые эксперименты с индустриальным шумом.' },
  { year: '2001', description: 'Первое выступление на фестивале "Уличный Бит". Использование бочек и металлических труб.' },
  { year: '2005', description: 'Тур по клубам Урала. Формирование основного состава и фирменного стиля.' },
  { year: '2010', description: 'Интеграция электронных сэмплов и светового шоу. Выход на большую сцену.' },
  { year: '2015', description: 'Хедлайнеры фестиваля "Ритм Города". Аудитория 15 000 человек.' },
  { year: '2018', description: 'Запуск шоу "Symbio". Коллаборация с симфоническим оркестром.' },
  { year: '2020', description: 'Концерты в ведущих клубах Москвы.' },
  { year: '2024', description: 'Туры по Волгограду.' },
  { year: '2025', description: 'Туры по Саратову.' },
  { year: '2026', description: 'Теперь и в Нижнем Новгороде.' },
];

export const WHY_VISIT_IMAGES: WhyVisitImage[] = [
  { id: 1, url: '/image/фото1конц.jpg', caption: 'Живое Выступление' },
  { id: 2, url: '/image/фото2бараб.jpg', caption: 'Энергия' },
  { id: 3, url: '/image/фото3бар.jpg', caption: 'Атмосфера' },
  { id: 4, url: '/image/фото4бар.jpg', caption: 'Свет' },
  { id: 5, url: '/image/фото5бар.jpg', caption: 'Драйв' },
  { id: 6, url: '/image/фото6бар.jpg', caption: 'Ритм' },
  { id: 7, url: '/image/фото7бар.jpg', caption: 'Шоу' },
  { id: 8, url: '/image/фото8бар.jpg', caption: 'Эмоции' },
];

export const TRACKLIST_DATA: TrackItem[] = [
  {
    id: 1,
    title: 'Highway to Hell',
    originalArtist: 'AC/DC',
    coverUrl: '/image/1.webp',
    duration: '3:28'
  },
  {
    id: 2,
    title: 'The Greatest Show',
    originalArtist: 'The Greatest Showman',
    coverUrl: '/image/2.webp',
    duration: '5:02'
  },
  {
    id: 3,
    title: 'Is This Love',
    originalArtist: 'Whitesnake',
    coverUrl: '/image/3.webp',
    duration: '4:43'
  },
  {
    id: 4,
    title: 'Gaia',
    originalArtist: 'Chris Coleman',
    coverUrl: '/image/4.webp',
    duration: '4:15'
  },
  {
    id: 5,
    title: 'Smoke on the Water',
    originalArtist: 'Deep Purple',
    coverUrl: '/image/5.webp',
    duration: '5:40'
  },
  {
    id: 6,
    title: 'Кукушка',
    originalArtist: 'Полина Гагарина',
    coverUrl: '/image/6.webp',
    duration: '3:52'
  },
  {
    id: 7,
    title: 'Соло',
    originalArtist: 'Valery Voloshin',
    coverUrl: '/image/7.webp',
    duration: '2:10'
  },
  {
    id: 8,
    title: "Cryin'",
    originalArtist: 'Aerosmith',
    coverUrl: '/image/8.webp',
    duration: '5:08'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'Что такое Гримерка 96?',
    answer: 'Гримерка 96 (Grimerka96) — это профессиональное барабанное мультимедиа шоу, основанное Валерием Волошиным в 1996 году. Это завораживающее перкуссионное шоу объединяет ритмы уличной культуры с уникальным аудио-визуальным опытом, включая песочное шоу и световые партитуры.'
  },
  {
    id: 2,
    question: 'Кто такой Валерий Волошин?',
    answer: 'Валерий Волошин — художественный руководитель и основатель барабанного шоу Гримерка 96. Мастер ритма с 1996 года, создатель уникального звука и стиля коллектива. Руководит студией, которая выступает по всей России.'
  },
  {
    id: 3,
    question: 'Сколько длится выступление?',
    answer: 'Стандартная программа барабанного шоу Гримерка 96 длится 120 минут. Мы также можем адаптировать сет под формат фестиваля (45-60 минут).'
  },
  {
    id: 4,
    question: 'Есть ли возрастные ограничения?',
    answer: 'Сольные концерты Гримерка 96 обычно 6+. Для ночных клубных выступлений — 18+.'
  },
  {
    id: 5,
    question: 'Можно ли заказать шоу Гримерка 96 на частное мероприятие?',
    answer: 'Да, барабанное шоу Гримерка 96 выступает на корпоративах и частных событиях. Свяжитесь с нами через форму на сайте или по email Drumgrim96@mail.ru для обсуждения райдера.'
  },
  {
    id: 6,
    question: 'Что входит в технический райдер?',
    answer: 'Для выступления барабанного шоу Гримерка 96 требуется площадка минимум 6x4 метра, качественная PA-система и возможность подключения нашего светового оборудования.'
  },
  {
    id: 7,
    question: 'Где купить билеты на барабанное шоу Валерия Волошина?',
    answer: 'Билеты на барабанное шоу Гримерка 96 Валерия Волошина можно приобрести на сайте kassir.ru или на нашем официальном сайте.'
  },
];
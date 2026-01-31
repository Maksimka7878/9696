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
  { id: 1, url: 'https://images.unsplash.com/photo-1470229722913-7c0d2dbbafd3?q=80&w=600&auto=format&fit=crop', caption: 'Живое Выступление' },
  { id: 2, url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600&auto=format&fit=crop', caption: 'Энергия' },
  { id: 3, url: 'https://images.unsplash.com/photo-1459749411177-0473ef716175?q=80&w=600&auto=format&fit=crop', caption: 'Атмосфера' },
  { id: 4, url: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=600&auto=format&fit=crop', caption: 'Свет' },
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
    question: 'Сколько длится выступление?',
    answer: 'Стандартная программа длится 120 минут. Мы также можем адаптировать сет под формат фестиваля (45-60 минут).'
  },
  {
    id: 2,
    question: 'Есть ли возрастные ограничения?',
    answer: 'Наши сольные концерты обычно 6+. Для ночных клубных выступлений — 18+.'
  },
  {
    id: 3,
    question: 'Можно ли заказать шоу на частное мероприятие?',
    answer: 'Да, мы выступаем на корпоративах и частных событиях. Свяжитесь с нами через форму ниже для обсуждения райдера.'
  },
  {
    id: 4,
    question: 'Что входит в технический райдер?',
    answer: 'Нам требуется площадка минимум 6x4 метра, качественная PA-система и возможность подключения нашего светового оборудования.'
  },
];
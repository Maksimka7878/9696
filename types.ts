
export interface TourDate {
  id: number;
  date: string;
  city: string;
  venue: string;
  soldOut: boolean;
}

export interface GalleryItem {
  id: number;
  url: string;
  title: string;
  type: 'image' | 'video';
  width: 'narrow' | 'medium' | 'wide';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SetlistResponse {
  vibe: string;
  songs: {
    title: string;
    description: string;
    tempo: string;
  }[];
  lightingSuggestion: string;
}

export interface TimelineItem {
  year: string;
  description: string;
  top?: string;
  left?: string;
}

export interface WhyVisitImage {
  id: number;
  url: string;
  caption: string;
}

export interface TrackItem {
  id: number;
  title: string;
  originalArtist: string;
  coverUrl: string;
  duration: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

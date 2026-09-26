export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tagline: string;
  features: string[];
  imageUrl: string;
  badge?: string;
  deliveryTime: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'pop' | 'painting' | 'wallpaper' | 'renovation' | 'taroline' | 'moulding';
  categoryLabel: string;
  location: string;
  imageUrl: string;
  summary: string;
  details: string[];
  materials: string[];
}

export interface TrustPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  serviceRendered: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'process' | 'technical' | 'timeline';
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  service: string;
  location: string;
  budgetRange: string;
  timeline: string;
  projectDetails: string;
}

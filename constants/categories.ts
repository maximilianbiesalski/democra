import type { Category } from '@/lib/types';

export const CATEGORIES: Category[] = [
  {
    id: '1',
    key: 'economy',
    label: 'Wirtschaft',
    icon: 'line-chart',
    description: 'Steuern, Arbeitsmarkt, Handel & Konjunktur',
  },
  {
    id: '2',
    key: 'housing',
    label: 'Wohnen',
    icon: 'home',
    description: 'Mieten, Bauen, Wohnungsnot & Stadtentwicklung',
  },
  {
    id: '3',
    key: 'security',
    label: 'Sicherheit',
    icon: 'shield',
    description: 'Innere Sicherheit, Polizei, Kriminalität',
  },
  {
    id: '4',
    key: 'education',
    label: 'Bildung',
    icon: 'graduation-cap',
    description: 'Schulen, Unis, BAföG & Digitalisierung',
  },
  {
    id: '5',
    key: 'climate',
    label: 'Klima & Energie',
    icon: 'leaf',
    description: 'Energiewende, CO₂, Nachhaltigkeit',
  },
  {
    id: '6',
    key: 'mobility',
    label: 'Mobilität',
    icon: 'car',
    description: 'Radwege, ÖPNV, Parkplätze & Verkehrswende',
  },
  {
    id: '7',
    key: 'health',
    label: 'Gesundheit',
    icon: 'heartbeat',
    description: 'Krankenversicherung, Pflege, Krankenhäuser',
  },
  {
    id: '8',
    key: 'digital',
    label: 'Digitales',
    icon: 'laptop',
    description: 'Breitband, KI, Datenschutz & E-Government',
  },
  {
    id: '9',
    key: 'migration',
    label: 'Migration',
    icon: 'globe',
    description: 'Integration, Asyl, Zuwanderung & Fachkräfte',
  },
  {
    id: '10',
    key: 'social',
    label: 'Soziales',
    icon: 'users',
    description: 'Rente, Bürgergeld, Familienförderung',
  },
];

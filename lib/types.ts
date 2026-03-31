// ─── Core Domain Types ───

export interface Party {
  id: string;
  name: string;
  shortName: string; // e.g. "SPD", "CDU"
  color: string;
  logoUrl?: string;
}

export interface Politician {
  id: string;
  name: string;
  partyId: string;
  role: string; // e.g. "MdB", "Stadtrat"
  constituency: string; // Wahlkreis
  avatarUrl?: string;
  transparencyScore: number; // 0-100
}

export interface Category {
  id: string;
  key: string;
  label: string;
  icon: string; // FontAwesome icon name
  description: string;
}

export interface PulseItem {
  id: string;
  title: string;
  summary: string;
  categoryId: string;
  sourceUrl: string;
  sourceName: string;
  createdAt: string;
  imageUrl?: string;
}

export interface MatchQuestion {
  id: string;
  text: string;
  categoryId: string;
  partyPositions: Record<string, 'agree' | 'neutral' | 'disagree'>;
}

export interface ImpactItem {
  id: string;
  promise: string;
  politicianId: string;
  categoryId: string;
  status: 'promised' | 'in_progress' | 'implemented' | 'failed';
  progressPercent: number;
  lastUpdated: string;
}

export interface FrustReport {
  id: string;
  userId: string;
  text: string;
  categoryId: string;
  location?: { lat: number; lng: number };
  voteCount: number;
  createdAt: string;
}

// ─── User Types ───

export interface UserProfile {
  id: string;
  displayName: string;
  level: number;
  xp: number;
  streak: number;
  matchedParties: string[];
}

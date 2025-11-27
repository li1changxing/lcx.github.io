export enum PaperStatus {
  ACCEPTED = 'Accepted',
  UNDER_REVIEW = 'Under Review'
}

export enum PaperType {
  JOURNAL = 'Journal',
  CONFERENCE = 'Conference'
}

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  status: PaperStatus;
  type: PaperType;
  impactFactor?: string;
  rank?: string; // e.g., CCF-A, CAS Tier 1
  isOral?: boolean;
  motivation?: string;
  contribution?: string[];
  imagePrompt?: string; // For placeholder generation
}

export interface StatItem {
  label: string;
  value: string;
  description?: string;
}
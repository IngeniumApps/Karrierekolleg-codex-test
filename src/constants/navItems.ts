export interface NavItem {
  id: string;
  label: string;
  shape?: 1 | 2 | 3;
  color?: string;
}

export const navItems: NavItem[] = [
  { id: 'startseite', label: 'Startseite', shape: 2, color: '#f39d40' },
  // { id: 'intro', label: 'Was ist ein Kolleg?' },
  { id: 'vorteile', label: 'Vorteile', shape: 2, color: '#e1544c' },
  // { id: 'struktur', label: 'Aufbau & Formen' },
  // { id: 'skills', label: 'Kompetenzen' },
  // { id: 'anerkennung', label: 'Anerkennung' },
  // { id: 'weiterstudieren', label: 'Weiterführendes Studium' },
  { id: 'kollegs', label: 'Kollegs', shape: 2, color: '#e9669e' },
  { id: 'kontakt', label: 'Kontakt', shape: 2, color: '#0d94cb' },
];

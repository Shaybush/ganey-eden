import { navbarContriesModel } from '../model/navbar.model';

export const navbarContriesConfig: navbarContriesModel[] = [
  {
    icon: 'il',
    alt: 'Israel flag',
    id: crypto.randomUUID(),
    locale: 'il',
  },
  {
    icon: 'fr',
    alt: 'France flag',
    id: crypto.randomUUID(),
    locale: 'fr',
  },
  {
    icon: 'ru',
    alt: 'Russian flag',
    id: crypto.randomUUID(),
    locale: 'ru',
  },
  {
    icon: 'us',
    alt: 'United States flag',
    id: crypto.randomUUID(),
    locale: 'us',
  },
];

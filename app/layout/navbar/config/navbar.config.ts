import { navbarContriesModel, navbarLinksModel } from "../model/navbar.model";
import stringConst from '@/public/locales/he/navbar.json';

export const navbarContriesConfig: navbarContriesModel[] = [
    {
        icon: 'il',
        alt: 'Israel flag',
        id: crypto.randomUUID(),
        locale: 'il'
    },
    {
        icon: 'fr',
        alt: 'France flag',
        id: crypto.randomUUID(),
        locale: 'fr'
    },
    {
        icon: 'ru',
        alt: 'Russian flag',
        id: crypto.randomUUID(),
        locale: 'ru'
    },
    {
        icon: 'us',
        alt: 'United States flag',
        id: crypto.randomUUID(),
        locale: 'us'
    }
];

export const navbarLinksConfig: navbarLinksModel[] = [
    {
        label: stringConst.navbar_home,
        link: '/',
        externalRoute: false,
        id:crypto.randomUUID()
    },
    {
        label: stringConst.navbar_gardens,
        link: '/',
        externalRoute: false,
        id:crypto.randomUUID()
    },
    {
        label: stringConst.navbar_synthetic_grass,
        link: '/',
        externalRoute: false,
        id:crypto.randomUUID()
    },
    {
        label: stringConst.navbar_about,
        link: '/about',
        externalRoute: false,
        id:crypto.randomUUID()
    },
    {
        label: stringConst.navbar_gallery,
        link: '/',
        externalRoute: false,
        id:crypto.randomUUID()
    },
    {
        label: stringConst.navbar_contact_us,
        link: '/contact',
        externalRoute: false,
        id:crypto.randomUUID()
    }
];
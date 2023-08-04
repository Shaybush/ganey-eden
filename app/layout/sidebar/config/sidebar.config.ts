import { navbarLinksModel } from "../model/sidebar.model";
import stringConst from '@/public/locales/he/navbar.json';

export const navbarLinksConfig: navbarLinksModel[] = [
    {
        label: stringConst.navbar_home,
        link: '/',
        externalRoute: false,
        id: crypto.randomUUID()
    },
    {
        label: stringConst.navbar_gardens,
        link: '/',
        externalRoute: false,
        id: crypto.randomUUID()
    },
    {
        label: stringConst.navbar_synthetic_grass,
        link: '/',
        externalRoute: false,
        id: crypto.randomUUID()
    },
    {
        label: stringConst.navbar_about,
        link: '/about',
        externalRoute: false,
        id: crypto.randomUUID()
    },
    {
        label: stringConst.navbar_gallery,
        link: '/',
        externalRoute: false,
        id: crypto.randomUUID()
    },
    {
        label: stringConst.navbar_contact_us,
        link: '/contact',
        externalRoute: false,
        id: crypto.randomUUID()
    }
];
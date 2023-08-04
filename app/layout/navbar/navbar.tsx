'use client';

import IconShared from '@/app/shared/components/icon/icon';
import stringConst from '@/public/locales/he/navbar.json';
import Link from 'next/link';
import { FC } from 'react';
import { navbarContriesConfig, navbarLinksConfig } from './config/navbar.config';

interface INavbarModel { }

const Navbar: FC<INavbarModel> = ({ }) => {
    const contriesIcons = navbarContriesConfig;
    const navbarLinks = navbarLinksConfig;
    return (
        <header className='bg-green-500 font-bold'>
            <nav className='py-4 px-8 flex justify-between items-center'>
                <div className="flex items-center uppercase">
                    {/* pages links */}
                    {navbarLinks.map(link => (
                        <div key={link.id} className='mr-4'>
                            <Link target={link.externalRoute ? '_blank' : '_self'} href={link.link}>{link.label}</Link>
                        </div>
                    ))}
                </div>

                {/* countries */}
                <div className="flex">
                    {contriesIcons.map(country => (
                        <Link key={country.id} className='mr-3' href={'/'} locale={country.icon}>
                            <IconShared iconSrc={country.icon} />
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
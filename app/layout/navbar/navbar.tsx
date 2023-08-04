'use client';

import IconShared from '@/app/shared/components/icon/icon';
import Link from 'next/link';
import { FC } from 'react';
import { navbarContriesConfig } from './config/navbar.config';

interface INavbarModel { }

const Navbar: FC<INavbarModel> = ({ }) => {
    const contriesIcons = navbarContriesConfig;
    return (
        <header className='font-bold shadow-md z-40'>
            <nav className='nav-nav pl-4 flex justify-between items-center'>
                {
                    true &&
                    <div className='flex items-center'>
                        {/* countries */}
                        <div className="flex pl-5">
                            {contriesIcons.map(country => (
                                <Link key={country.id} className='mr-3' href={'/'} locale={country.icon}>
                                    <IconShared iconSrc={country.icon} />
                                </Link>
                            ))}
                        </div>
                    </div>
                }
                {/* logo */}
                <IconShared iconSrc='logo' width={250} link='/'/>
            </nav>
        </header>
    );
};

export default Navbar;
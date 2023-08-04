'use client';

import React, { FC, useState } from 'react';
import { navbarLinksConfig } from './config/sidebar.config';
import Link from 'next/link';
import IconShared from '@/app/shared/components/icon/icon';

interface ISidebarModel { }

const Sidebar: FC<ISidebarModel> = ({ }) => {
    const navbarLinks = navbarLinksConfig;
    const [isActive, setIsActive] = useState(false);

    return (
        <React.Fragment>
            {/* todo - move on click to component */}
            <span onClick={() => setIsActive(!isActive)}><IconShared iconSrc='bars' /></span>
            {
                isActive &&
                <div className='w-8/12 bg-green-300 absolute top-8 right-0 z-30'>
                    {/* pages links */}
                    <ul>
                        {navbarLinks.map(link => (
                            <Link key={link.id} className='py-8 px-8 ' target={link.externalRoute ? '_blank' : '_self'} href={link.link}>
                                <li className='text-green-100 hover:text-green-300'>
                                    {link.label}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            }

        </React.Fragment>

    );
};

export default Sidebar;
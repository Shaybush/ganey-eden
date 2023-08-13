'use client';

import IconShared from '@/app/shared/components/icon/icon';
import { FC, useState } from 'react';
import { navbarContriesConfig } from './config/navbar.config';
import style from "./navbar.module.scss";

interface INavbarModel { }

const Navbar: FC<INavbarModel> = ({ }) => {
    const contriesIcons = navbarContriesConfig;
    const [isOpen, setIsOpen] = useState(false);

    const handleBarClicked = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    };
    return (
        <header className='font-bold shadow-md z-40'>
            <nav className='nav-nav px-4 flex justify-between items-center'>
                <div className="right-bar">
                    <span className='cursor-pointer' onClick={() => handleBarClicked()}>
                        {isOpen ?
                        <IconShared iconSrc='close' width={40} /> :
                        <IconShared iconSrc='bars' width={40} />
                        }
                    </span>
                </div>
                <div className={style.center_bar}>
                    <IconShared iconSrc='logo' link='/' />
                </div>
                <div className="left-bar">
                    <select name="options" id="" dir='ltr'>
                        {
                            contriesIcons.map(country => (
                                <option key={country.id}>
                                    {country.locale}
                                </option>
                            ))
                        }
                    </select>
                </div>
                {/* logo */}

            </nav>
        </header>
    );
};

export default Navbar;
'use client';

import { FC, useState } from 'react';
import IconShared from '@/app/shared/components/icon/icon';
import { navbarContriesConfig } from './config/navbar.config';
import style from './navbar.module.scss';

interface INavbarModel {}

const Navbar: FC<INavbarModel> = () => {
  const contriesIcons = navbarContriesConfig;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='font-bold shadow-md z-40 py-2'>
      <nav className='nav-nav px-8 flex justify-between items-center'>
        <div className={style.right_bar}>
          <span className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <IconShared iconSrc={isOpen ? 'close' : 'bars'} />
          </span>
        </div>

        {/* logo */}
        <div className={style.center_bar}>
          <IconShared iconSrc='logo' link='/' />
        </div>
        <div className='left-bar'>
          <select name='options' id='' dir='ltr'>
            {contriesIcons.map((country) => (
              <option key={country.id}>{country.locale}</option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
